import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, message, Table } from 'antd'
import { Link } from 'react-router-dom'
import { UserGet, UserUpdate, UserTransactionsPost, UserTransactionsGet } from '../../Api/CoreApi'
import { FaUser } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import {
    FaFacebook,
    FaIndianRupeeSign,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa6";

function User_Withdrawal_User() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const int_id = (String(id))
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState([])

    console.log(data, transaction, '***** data ******')

    const get = async () => {
        const response = await UserGet()
        const staff_filter = response.filter(i => i.id === int_id)
        setData(staff_filter)

        const transaction_response = await UserTransactionsGet()
        const transaction_filter = transaction_response.filter(i => i.user_id === int_id)
        setTransaction(transaction_filter.reverse())
    }
    useEffect(() => {
        get()
    }, [])

    const Withdrawal = async (i) => {
        if (i.balance > 0) {
            const id = i.id
            const balance = i.balance
            const reduce = ({ balance: 0 })
            console.log(i, '******* id ********')
            const Transaction_data = ({ user_id: id, amount: balance, type: 'withdrawal' })
            const response = await UserTransactionsPost(Transaction_data)
            const filter_transaction = response.filter(i => i.user_id === int_id)
            setTransaction(filter_transaction)
            const staff_response = await UserUpdate(id, reduce)
            const stass_filter = staff_response.filter(i => i.id === int_id)
            setData(stass_filter.reverse())
            message.success('success')
        } else {
            message.error('faild')
        }

    }

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
            <div style={{ marginLeft: '210px', paddingTop: '70px' }}>
                <div>
                    {data.map(i => (
                        <>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '500px', marginLeft: '25%', display: 'flex', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}><p style={{ fontSize: '50px' }}><FaRupeeSign /></p><p style={{ marginTop: '-4px', marginLeft: '10px', fontSize: '50px' }}>{i.balance}</p>
                                    <Button style={{ marginTop: '18px', marginLeft: '200px' }} onClick={() => Withdrawal(i)}>Withdrawal</Button>
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/${i.refer}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: "30px",
                                            marginLeft: "-20px",
                                            marginTop: '50px',
                                            cursor: "pointer",
                                            color: "#25D366",
                                            paddingTop:'15px'
                                        }}
                                    // onMouseEnter={(e) => (e.target.style.color = "#25D366")}
                                    // onMouseLeave={(e) => (e.target.style.color = "black")}
                                    >
                                        <FaWhatsapp />
                                        <p style={{marginLeft:'-30px',marginTop:'-10px'}}>Share & Earn</p>

                                    </a>
                                </div>
                            </div>
                        </>
                    ))}

                    <div style={{ marginTop: '20px' }}>
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
                            ]}
                            dataSource={transaction}
                            rowKey="id"
                            bordered
                            scroll={{ x: true }} // Makes it responsive
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Withdrawal_User


// import React from 'react'

// function Staff_Withdrawals() {
//   return (
//     <div>Staff_Withdrawals</div>
//   )
// }

// export default Staff_Withdrawals