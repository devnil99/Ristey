import React from 'react'
import { useState, useEffect } from 'react'
import { UserGet, UserUpdate, StaffTransactionsGet, StaffTransactionsUpdate, UserTransactionsGet, UserTransactionsUpdate } from '../../Api/CoreApi'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Table, message } from "antd";
import { FaUser } from "react-icons/fa6";



function Staff_Withdrawal() {
    const Navigate = useNavigate();

    const [staff, setStaff] = useState([])
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])

    console.log(data1, '***** v ******')

    const get = async () => {
        const response = await StaffTransactionsGet()
        const filter = response.filter(i => i.status === 'pending')
        setData(filter)
        const staff_response = await UserGet()
        setStaff(staff_response)

        const response1 = await UserTransactionsGet()
        const filter_user = response1.filter(i => i.status === 'pending')
        setData1(filter_user)
    }

    useEffect(() => {
        get()
    }, [])

    const accept = async (value) => {
        // console.log(value,'** value **')
        try {
            const staff_id = value.id
            const values = ({ status: 'accept' })
            const response = await StaffTransactionsUpdate(staff_id, values)
            const staff_pendings_filter = response.filter(i => i.status === 'pending')
            setData(staff_pendings_filter)
            message.success('success')
        } catch (error) {
            message.error('Failed');
        }
    }

    const reject = async (value) => {
        try {
            console.log(value, '***** value *******')
            const staff_id = value.staff_id
            const transaction_id = value.id
            const transaction_amount = value.amount
            // const transaction_amount_data = ({ balance: transaction_amount })
            const values = ({ status: 'reject' })
            const response = await StaffTransactionsUpdate(transaction_id, values)
            const staff_pendings_filter = response.filter(i => i.status === 'pending')
            setData(staff_pendings_filter)

            // console.log(response[0].status, '**** response *****')
            if (values.status === 'reject') {
                const staff_filter = staff.filter(i => i.id === staff_id)
                const staff_balance = staff_filter.map(i => i.balance)
                const add = (parseInt(staff_balance) + parseInt(transaction_amount))
                const add_balance = ({ balance: add })
                // console.log(add,'****** add *****')
                const response = await UserUpdate(staff_id, add_balance)
                const staff_pending_filter = response.filter(i => i.id === staff_id)
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
                <p style={{ fontSize: '28px', textAlign: 'center' }}>Staff Withdrawal</p>
                <Table
                    columns={[
                        { title: "ID", dataIndex: "id", key: "id" },
                        { title: "staff_id", dataIndex: "staff_id", key: "staff_id" },
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

export default Staff_Withdrawal