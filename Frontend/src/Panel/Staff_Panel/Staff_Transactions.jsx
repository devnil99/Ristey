import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StaffTransactionsGet, StaffTransactionsUpdate } from '../../Api/CoreApi'
import { useParams, Link } from 'react-router-dom'
import { Form, Input, Button, Table } from "antd";



function Staff_Transactions() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const int_id = (String(id))
    const [data, setData] = useState([])
    // console.log(int_id, '***** v ******')

    const get = async () => {
        const response = await StaffTransactionsGet()
        const filter_data = response.filter(i => i.staff_id === int_id)
        setData(filter_data)
    }

    useEffect(() => {
        get()
    }, [])

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/Staff_Login')
    }
    return (
        <div>
            <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
                <Link to='/Home_Page_wLog'>
                    <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
                </Link>

                {id ? (
                    <Link to='/Staff_Panel'>
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
                <Link to='/Staff_Panel'>
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
                <Link to='/Staff_Added_User'>
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
                <Link to='/Staff_Transactions'>
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
                <Link to='/Staff_Withdrawals'>
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
            <div style={{ marginLeft: '210px', paddingTop: '70px' }}>
                <p style={{ textAlign: 'center', fontSize: '28px' }}>Staff Transactions</p>
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

export default Staff_Transactions