import React from 'react'
import { useState, useEffect } from 'react'
import { UserTransactionsGet } from '../../Api/CoreApi'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Table } from "antd";



function User_Transaction_User() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const [data, setData] = useState([])
    console.log(data, '***** v ******')

    const get = async () => {
        const response = await UserTransactionsGet()
        console.log(response, '**** response *********')
        const filter_transaction = response.filter(i => i.user_id === id)
        console.log(filter_transaction, '******* filter_transaction ******')

        setData(filter_transaction)
    }

    useEffect(() => {
        get()
    }, [])

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/User_Login')
    }
    return (
        <div>
            <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
                <Link to='/Home_Page_wLog'>
                    <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
                </Link>

                {id ? (
                    <Link to='/User_Panel'>
                        <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
                    </Link>
                ) : (
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to='/User_Reg/885695'>
                            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
                        </Link>
                        <Link to='/User_Login'>
                            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
                        </Link>
                    </div>
                )}
            </div>
            <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
                <Link to='/User_Panel'>
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
                <Link to='/User_Added_User'>
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
                <Link to='/User_Recharge'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Recharge
                    </Button>
                </Link>
                <Link to='/User_Transaction_User'>
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
                <Link to='/User_Withdrawal_User'>
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
            </div>
            <div style={{ marginLeft: '185px', paddingTop: '70px' }}>
                <Table
                    columns={[
                        { title: "id", dataIndex: "id", key: "id" },
                        { title: "User_id", dataIndex: "user_id", key: "user_id" },
                        { title: "amount", dataIndex: "amount", key: "amount" },
                        { title: "date", dataIndex: "date", key: "date" },
                        { title: "type", dataIndex: "type", key: "type" },
                        { title: "status", dataIndex: "status", key: "status" }
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

export default User_Transaction_User