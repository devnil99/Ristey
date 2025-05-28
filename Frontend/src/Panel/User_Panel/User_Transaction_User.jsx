// import React from 'react'
// import { useState, useEffect } from 'react'
// import { UserTransactionsGet } from '../../Api/CoreApi'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import { Form, Input, Button, Table } from "antd";



// function User_Transaction_User() {
//     const Navigate = useNavigate();

//     const id = localStorage.getItem('user_id')
//     const [data, setData] = useState([])
//     console.log(data, '***** v ******')

//     const get = async () => {
//         const response = await UserTransactionsGet()
//         console.log(response, '**** response *********')
//         const filter_transaction = response.filter(i => i.user_id === id)
//         console.log(filter_transaction, '******* filter_transaction ******')

//         setData(filter_transaction)
//     }

//     useEffect(() => {
//         get()
//     }, [])

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
//             <div style={{ marginLeft: '185px', paddingTop: '70px' }}>
//                 <Table
//                     columns={[
//                         { title: "id", dataIndex: "id", key: "id" },
//                         { title: "User_id", dataIndex: "user_id", key: "user_id" },
//                         { title: "amount", dataIndex: "amount", key: "amount" },
//                         { title: "date", dataIndex: "date", key: "date" },
//                         { title: "type", dataIndex: "type", key: "type" },
//                         { title: "status", dataIndex: "status", key: "status" }
//                     ]}
//                     dataSource={data}
//                     rowKey="id"
//                     bordered
//                     scroll={{ x: true }} // Makes it responsive
//                 />
//             </div>
//         </div>
//     )
// }

// export default User_Transaction_User



import React, { useState, useEffect } from 'react'
import { UserTransactionsGet } from '../../Api/CoreApi'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Table } from "antd";

function User_Transaction_User() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const [data, setData] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const get = async () => {
        const response = await UserTransactionsGet()
        const filter_transaction = response.filter(i => i.user_id === id)
        setData(filter_transaction)
    }

    useEffect(() => {
        get()
    }, [])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        // Auto close sidebar on small screens
        if (window.innerWidth <= 768) setSidebarOpen(false);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const log_out = () => {
        localStorage.removeItem('user_id')
        Navigate('/User_Login')
    }

    // Sidebar width changes based on open state
    const sidebarWidth = sidebarOpen ? 180 : 60;

    // Styles
    const sidebarStyle = {
        width: sidebarWidth,
        height: 'calc(100vh - 50px)',
        backgroundColor: 'white',
        position: 'fixed',
        marginTop: '50px',
        overflowX: 'hidden',
        transition: 'width 0.3s ease',
        whiteSpace: 'nowrap',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
    };

    const mainContentStyle = {
        marginLeft: sidebarWidth,
        paddingTop: '70px',
        paddingLeft: windowWidth <= 480 ? '10px' : '20px',
        paddingRight: windowWidth <= 480 ? '10px' : '20px',
        transition: 'margin-left 0.3s ease',
    };

    // Topbar style with flex wrap for small widths
    const topBarStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'rgba(7, 110, 148,1)',
        position: 'fixed',
        zIndex: '999',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    };

    const logoStyle = {
        fontSize: '30px',
        color: 'white',
        margin: 0,
        cursor: 'pointer',
    };

    const authContainerStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'white',
        fontSize: '15px',
    };

    const toggleButtonStyle = {
        backgroundColor: 'rgba(7, 110, 148,1)',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '5px 10px',
        marginRight: '10px',
    };

    return (
        <div>
            {/* Topbar */}
            <div style={topBarStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Sidebar toggle button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={toggleButtonStyle}
                        aria-label="Toggle Sidebar"
                    >
                        {sidebarOpen ? '☰' : '☰'}
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
                <Link to='/User_Panel'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title="Dashboard"
                    >
                        {sidebarOpen ? "Dashboard" : "D"}
                    </Button>
                </Link>
                <Link to='/User_Added_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title="User"
                    >
                        {sidebarOpen ? "User" : "U"}
                    </Button>
                </Link>
                <Link to='/User_Recharge'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title="Recharge"
                    >
                        {sidebarOpen ? "Recharge" : "R"}
                    </Button>
                </Link>
                <Link to='/User_Transaction_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title="Transaction"
                    >
                        {sidebarOpen ? "Transaction" : "T"}
                    </Button>
                </Link>
                <Link to='/User_Withdrawal_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                            whiteSpace: 'normal',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title="Withdrawal"
                    >
                        {sidebarOpen ? "Withdrawal" : "W"}
                    </Button>
                </Link>
                <Button
                    style={{
                        textAlign: "center",
                        color: "black",
                        borderRadius: "0px",
                        width: "100%",
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    onClick={log_out}
                    title="Log Out"
                >
                    {sidebarOpen ? "Log Out" : "L"}
                </Button>
            </div>

            {/* Main content */}
            <div style={mainContentStyle}>
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
                    scroll={{ x: true }}
                />
            </div>
        </div>
    )
}

export default User_Transaction_User
