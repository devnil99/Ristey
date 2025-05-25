import React from 'react'
import { useState, useEffect } from 'react'
import { UserGet, UserUpdate, UserTransactionsGet, UserTransactionsUpdate } from '../../Api/CoreApi'
import { Link, useNavigate } from 'react-router-dom'
import {Button, Table, message } from "antd";
import { FaUser } from "react-icons/fa6";



function User_Withdrawal() {
    const Navigate = useNavigate();

    const [staff, setStaff] = useState([])
    const [data, setData] = useState([])

    console.log(data, '***** v ******')

    const get = async () => {
        const staff_response = await UserGet()
        setStaff(staff_response)

        const response1 = await UserTransactionsGet()
        const filter_user = response1.filter(i => i.status === 'pending')
        setData(filter_user)
    }

    useEffect(() => {
        get()
    }, [])


    const accept = async (value) => {
        // console.log(value,'** value **')
        try {
            const user_id = value.id
            const values = ({ status: 'accept' })
            const response = await UserTransactionsUpdate(user_id, values)
            const user_pendings_filter = response.filter(i => i.status === 'pending')
            setData(user_pendings_filter)
            message.success('success')
        } catch (error) {
            message.error('Failed');
        }
    }

    const reject = async (value) => {
        try {
            console.log(value, '***** value *******')
            const user_id = value.user_id
            const transaction_id = value.id
            const transaction_amount = value.amount
            // const transaction_amount_data = ({ balance: transaction_amount })
            const values = ({ status: 'reject' })
            const response = await UserTransactionsUpdate(transaction_id, values)
            const user_pendings_filter = response.filter(i => i.status === 'pending')
            setData(user_pendings_filter)

            console.log(response, '**** response *****')
            if (values.status === 'reject') {
                const user_filter = staff.filter(i => i.id === user_id)
                const user_balance = user_filter.map(i => i.balance)
                const add = (parseInt(user_balance) + parseInt(transaction_amount))
                const add_balance = ({ balance: add })
                console.log(add_balance,'****** add *****')
                const response = await UserUpdate(user_id, add_balance)
                const user_pending_filter = response.filter(i => i.id === user_id)
                
            }
            message.success('success')
        } catch (error) {
            message.error('Failed');
        }
    }

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/Admin_Login')
    }
    return (
        <div>
            {/* <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
                <Link to='/Admin_Panel'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}

                    >
                        Dashboard
                    </Button>
                </Link>
                <Link to='/Staff_Tables'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Staff
                    </Button>
                </Link>
                <Link to='/User_Tables'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        User
                    </Button>
                </Link>
                <Link to='/Transaction'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Transaction
                    </Button>
                </Link>
                <Link to='/Staff_Withdrawal'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Withdrawal
                    </Button>
                </Link>
                <Link to='/Post_Commission'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Commisions
                    </Button>
                </Link>
                <Button
                    style={{
                        textAlign: "center",
                        color: "black",
                        borderRadius: "0px",
                        width: "100%",
                    }}
                    onClick={log_out}
                >
                    Log Out
                </Button>
            </div> */}
            <div style={{ marginLeft: '0px', paddingTop: '70px' }}>
                <p style={{ fontSize: '28px', textAlign: 'center' }}>User Withdrawal</p>
                <Table
                    columns={[
                        { title: "ID", dataIndex: "id", key: "id" },
                        { title: "user_id", dataIndex: "user_id", key: "user_id" },
                        { title: "amount", dataIndex: "amount", key: "amount" },
                        { title: "date", dataIndex: "date", key: "date" },
                        {
                            title: "type",
                            dataIndex: "type",
                            key: "type",
                        },
                        {
                            title: "status",
                            dataIndex: "status",
                            key: "status",
                        },
                        {
                            title: "Actions",
                            key: "actions",
                            render: (
                                _,
                                record // Corrected to pass row data
                            ) => (
                                <>
                                    <Button
                                        style={{ marginRight: 8 }}
                                        onClick={() => accept(record)}
                                    >
                                        accept
                                    </Button>
                                    <Button danger onClick={() => reject(record)}>
                                        reject
                                    </Button>
                                </>
                            ),
                        },
                    ]}
                    dataSource={data}
                    rowKey="id"
                    bordered
                    scroll={{ x: true }} // Makes it responsive
                />
            </div>
        </div>
    )
}

// import React from 'react'

// function user_Withdrawal() {
//   return (
//     <div>Staff_Withdrawal</div>
//   )
// }

// export default Staff_Withdrawal

export default User_Withdrawal