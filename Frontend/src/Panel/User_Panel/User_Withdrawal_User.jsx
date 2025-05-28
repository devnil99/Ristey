// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button, message, Table } from 'antd'
// import { Link } from 'react-router-dom'
// import { UserGet, UserUpdate, UserTransactionsPost, UserTransactionsGet } from '../../Api/CoreApi'
// import { FaUser } from "react-icons/fa6";
// import { FaRupeeSign } from "react-icons/fa";
// import {
//     FaFacebook,
//     FaIndianRupeeSign,
//     FaInstagram,
//     FaTwitter,
//     FaWhatsapp,
// } from "react-icons/fa6";

// function User_Withdrawal_User() {
//     const Navigate = useNavigate();

//     const id = localStorage.getItem('user_id')
//     const int_id = (String(id))
//     const [data, setData] = useState([])
//     const [transaction, setTransaction] = useState([])

//     console.log(data, transaction, '***** data ******')

//     const get = async () => {
//         const response = await UserGet()
//         const staff_filter = response.filter(i => i.id === int_id)
//         setData(staff_filter)

//         const transaction_response = await UserTransactionsGet()
//         const transaction_filter = transaction_response.filter(i => i.user_id === int_id)
//         setTransaction(transaction_filter.reverse())
//     }
//     useEffect(() => {
//         get()
//     }, [])

//     const Withdrawal = async (i) => {
//         if (i.balance > 0) {
//             const id = i.id
//             const balance = i.balance
//             const reduce = ({ balance: 0 })
//             console.log(i, '******* id ********')
//             const Transaction_data = ({ user_id: id, amount: balance, type: 'withdrawal' })
//             const response = await UserTransactionsPost(Transaction_data)
//             const filter_transaction = response.filter(i => i.user_id === int_id)
//             setTransaction(filter_transaction)
//             const staff_response = await UserUpdate(id, reduce)
//             const stass_filter = staff_response.filter(i => i.id === int_id)
//             setData(stass_filter.reverse())
//             message.success('success')
//         } else {
//             message.error('faild')
//         }

//     }

//     const log_out = () => {
//         localStorage.removeItem('user_id')
//         Navigate('/User_Login')
//     }
//     return (
//         <div>
//             <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
//                 <Link to='/Home_Page_wLog'>
//                     <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
//                 </Link>

//                 {id ? (
//                     <Link to='/User_Panel'>
//                         <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
//                     </Link>
//                 ) : (
//                     <div style={{ display: 'flex', gap: '20px' }}>
//                         <Link to='/User_Reg/885695'>
//                             <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
//                         </Link>
//                         <Link to='/User_Login'>
//                             <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//             <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
//                 <Link to='/User_Panel'>
//                     <Button
//                         style={{
//                             textAlign: "center",
//                             color: "black",
//                             borderRadius: "0px",
//                             width: "100%",
//                         }}

//                     >
//                         Dashboard
//                     </Button>
//                 </Link>
//                 <Link to='/User_Added_User'>
//                     <Button
//                         style={{
//                             textAlign: "center",
//                             color: "black",
//                             borderRadius: "0px",
//                             width: "100%",
//                         }}
//                     >
//                         User
//                     </Button>
//                 </Link>
//                 <Link to='/User_Recharge'>
//                     <Button
//                         style={{
//                             textAlign: "center",
//                             color: "black",
//                             borderRadius: "0px",
//                             width: "100%",
//                         }}
//                     >
//                         Recharge
//                     </Button>
//                 </Link>
//                 <Link to='/User_Transaction_User'>
//                     <Button
//                         style={{
//                             textAlign: "center",
//                             color: "black",
//                             borderRadius: "0px",
//                             width: "100%",
//                         }}
//                     >
//                         Transaction
//                     </Button>
//                 </Link>
//                 <Link to='/User_Withdrawal_User'>
//                     <Button
//                         style={{
//                             textAlign: "center",
//                             color: "black",
//                             borderRadius: "0px",
//                             width: "100%",
//                         }}
//                     >
//                         Withdrawal
//                     </Button>
//                 </Link>
//                 <Button
//                     style={{
//                         textAlign: "center",
//                         color: "black",
//                         borderRadius: "0px",
//                         width: "100%",
//                     }}
//                     onClick={log_out}
//                 >
//                     Log Out
//                 </Button>
//             </div>
//             <div style={{ marginLeft: '210px', paddingTop: '70px' }}>
//                 <div>
//                     {data.map(i => (
//                         <>
//                             <div style={{ display: 'flex' }}>
//                                 <div style={{ width: '500px', marginLeft: '25%', display: 'flex', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}><p style={{ fontSize: '50px' }}><FaRupeeSign /></p><p style={{ marginTop: '-4px', marginLeft: '10px', fontSize: '50px' }}>{i.balance}</p>
//                                     <Button style={{ marginTop: '18px', marginLeft: '200px' }} onClick={() => Withdrawal(i)}>Withdrawal</Button>
//                                     <a
//                                         href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/${i.refer}`)}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         style={{
//                                             fontSize: "30px",
//                                             marginLeft: "-20px",
//                                             marginTop: '50px',
//                                             cursor: "pointer",
//                                             color: "#25D366",
//                                             paddingTop:'15px'
//                                         }}
//                                     // onMouseEnter={(e) => (e.target.style.color = "#25D366")}
//                                     // onMouseLeave={(e) => (e.target.style.color = "black")}
//                                     >
//                                         <FaWhatsapp />
//                                         <p style={{marginLeft:'-30px',marginTop:'-10px'}}>Share & Earn</p>

//                                     </a>
//                                 </div>
//                             </div>
//                         </>
//                     ))}

//                     <div style={{ marginTop: '20px' }}>
//                         <Table
//                             columns={[
//                                 { title: "ID", dataIndex: "id", key: "id" },
//                                 { title: "user_id", dataIndex: "user_id", key: "user_id" },
//                                 { title: "amount", dataIndex: "amount", key: "amount" },
//                                 { title: "date", dataIndex: "date", key: "date" },
//                                 {
//                                     title: "type",
//                                     dataIndex: "type",
//                                     key: "type",
//                                 },
//                                 {
//                                     title: "status",
//                                     dataIndex: "status",
//                                     key: "status",
//                                 },
//                             ]}
//                             dataSource={transaction}
//                             rowKey="id"
//                             bordered
//                             scroll={{ x: true }} // Makes it responsive
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default User_Withdrawal_User

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, message, Table } from 'antd'
import { Link } from 'react-router-dom'
import { UserGet, UserTransactionsGet, UserTransactionsPost, UserUpdate } from '../../Api/CoreApi'
import { FaWhatsapp, FaRupeeSign } from "react-icons/fa";

function User_Withdrawal_User() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const int_id = String(id)
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth <= 768) {
                setSidebarOpen(false)
            }
        };
        window.addEventListener('resize', handleResize);

        // Initial check
        if (window.innerWidth <= 768) {
            setSidebarOpen(false)
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const Withdrawal = async (i) => {
        if (i.balance > 0) {
            const id = i.id
            const balance = i.balance
            const reduce = { balance: 0 }
            const Transaction_data = { user_id: id, amount: balance, type: 'withdrawal' }
            await UserTransactionsPost(Transaction_data)

            const staff_response = await UserUpdate(id, reduce)
            const staff_filter = staff_response.filter(i => i.id === int_id)
            setData(staff_filter.reverse())

            // Refresh transactions after withdrawal
            const transaction_response = await UserTransactionsGet()
            const transaction_filter = transaction_response.filter(i => i.user_id === int_id)
            setTransaction(transaction_filter.reverse())

            message.success('Withdrawal successful')
        } else {
            message.error('Withdrawal failed: balance is zero or less')
        }
    }

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/User_Login')
    }

    const sidebarWidth = sidebarOpen ? 180 : 60

    const sidebarStyle = {
        width: sidebarWidth,
        height: 'calc(100vh - 50px)',
        backgroundColor: 'white',
        position: 'fixed',
        marginTop: '50px',
        overflowX: 'hidden',
        transition: 'width 0.3s ease',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '10px',
    }

    const mainContentStyle = {
        marginLeft: sidebarWidth + 30,
        paddingTop: '70px',
        paddingLeft: windowWidth <= 480 ? '10px' : '20px',
        paddingRight: windowWidth <= 480 ? '10px' : '20px',
        transition: 'margin-left 0.3s ease',
    }

    const topBarStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'rgba(7, 110, 148,1)',
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }

    const logoStyle = {
        fontSize: '30px',
        color: 'white',
        margin: 0,
        cursor: 'pointer',
    }

    const authContainerStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'white',
        fontSize: '15px',
    }

    const toggleButtonStyle = {
        backgroundColor: 'rgba(7, 110, 148,1)',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '5px 10px',
        marginRight: '10px',
    }

    // Helper to render button text or only first letter when closed
    function renderButtonText(text) {
        return sidebarOpen ? text : text.charAt(0)
    }

    // List of menu items with paths and labels
    const menuItems = [
        { path: '/User_Panel', label: 'Dashboard' },
        { path: '/User_Added_User', label: 'User' },
        { path: '/User_Recharge', label: 'Recharge' },
        { path: '/User_Transaction_User', label: 'Transaction' },
        { path: '/User_Withdrawal_User', label: 'Withdrawal' },
    ]

    return (
        <div>
            {/* Topbar */}
            <div style={topBarStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={toggleButtonStyle}
                        aria-label="Toggle Sidebar"
                    >
                        ☰
                    </button>
                    <Link to='/Home_Page_wLog'>
                        <p style={logoStyle}>Ristey</p>
                    </Link>
                </div>

                <div style={authContainerStyle}>
                    {id ? (
                        <Link to='/User_Panel' style={{ color: 'white' }}>
                            Profile
                        </Link>
                    ) : (
                        <>
                            <Link to='/User_Reg/885695' style={{ color: 'white' }}>
                                Sign Up
                            </Link>
                            <Link to='/User_Login' style={{ color: 'white' }}>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            <div style={sidebarStyle}>
                {menuItems.map(({ path, label }) => (
                    <Link key={path} to={path} style={{ display: 'block', marginBottom: '5px' }}>
                        <Button
                            style={{
                                textAlign: "center",
                                color: "black",
                                borderRadius: "0px",
                                width: "100%",
                                whiteSpace: 'nowrap',
                                paddingLeft: sidebarOpen ? '10px' : '5px',
                                paddingRight: sidebarOpen ? '10px' : '5px',
                                fontSize: sidebarOpen ? '14px' : '18px',
                                transition: 'font-size 0.3s ease, padding 0.3s ease',
                            }}
                        >
                            {renderButtonText(label)}
                        </Button>
                    </Link>
                ))}
                <Button
                    style={{
                        textAlign: "center",
                        color: "black",
                        borderRadius: "0px",
                        width: "100%",
                        whiteSpace: 'nowrap',
                        paddingLeft: sidebarOpen ? '10px' : '5px',
                        paddingRight: sidebarOpen ? '10px' : '5px',
                        fontSize: sidebarOpen ? '14px' : '18px',
                        transition: 'font-size 0.3s ease, padding 0.3s ease',
                    }}
                    onClick={log_out}
                >
                    {renderButtonText('Log Out')}
                </Button>
            </div>

            {/* Main Content */}
            <div style={mainContentStyle}>
                {data.map(i => (
                    <div
                        key={i.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '20px',
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            padding: '20px',
                            alignItems: 'center',
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <FaRupeeSign style={{ fontSize: '50px' }} />
                        <p style={{ marginLeft: '10px', fontSize: '50px' }}>{i.balance}</p>
                        <Button style={{ marginLeft: 'auto' }} onClick={() => Withdrawal(i)}>
                            Withdrawal
                        </Button>
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/${i.refer}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "30px",
                                marginLeft: "20px",
                                cursor: "pointer",
                                color: "#25D366",
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <FaWhatsapp />
                            <span style={{ marginLeft: '8px', fontSize: '16px' }}>Share & Earn</span>
                        </a>
                    </div>
                ))}

                <Table
                    columns={[
                        { title: "ID", dataIndex: "id", key: "id" },
                        { title: "user_id", dataIndex: "user_id", key: "user_id" },
                        { title: "amount", dataIndex: "amount", key: "amount" },
                        { title: "date", dataIndex: "date", key: "date" },
                        { title: "type", dataIndex: "type", key: "type" },
                        { title: "status", dataIndex: "status", key: "status" },
                    ]}
                    dataSource={transaction}
                    rowKey="id"
                    bordered
                    scroll={{ x: true }}
                />
            </div>
        </div>
    )
}

export default User_Withdrawal_User
