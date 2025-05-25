import React, { useEffect, useState } from 'react'
import Staff_Withdrawal from './Staff_Withdrawal'
import User_Withdrawal from './User_Withdrawal'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";


function Withdrawal() {
    const admin_id = localStorage.getItem('user_id')

    const Navigate = useNavigate();

    const [pop, setPop] = useState('staff')

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/Admin_Login')
    }
    return (
        <div>
            <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
                <Link to='/Home_Page_wLog'>
                    <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
                </Link>

                {admin_id ? (
                    <Link to='/Admin_Panel'>
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
                <Link to='/Withdrawal'>
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
                    onClick={log_out}>
                    Log Out
                </Button>
            </div>
            <div style={{ marginLeft: '200px', paddingTop: '70px' }}>

                <div style={{ width: '300px', height: '150px', marginLeft: '250px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }} onClick={() => setPop('staff')}><p style={{ fontSize: '60px', textAlign: 'center', paddingTop: '7px' }}><FaUserAlt /></p><p style={{ fontSize: '28px', textAlign: 'center' }}>Staff Withdrawal</p></div>
                <div style={{ width: '300px', height: '150px', marginTop: '-150px', marginLeft: '700px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }} onClick={() => setPop('user')}><p style={{ fontSize: '60px', textAlign: 'center', paddingTop: '7px' }}><FaUserAlt /></p><p style={{ fontSize: '28px', textAlign: 'center' }}>User Withdrawal</p></div>
                {pop === 'staff' && (

                    <div style={{}}><Staff_Withdrawal /></div>
                )}
                {pop === 'user' && (
                    <div style={{}}><User_Withdrawal /></div>
                )}
            </div>
        </div>
    )
}

export default Withdrawal