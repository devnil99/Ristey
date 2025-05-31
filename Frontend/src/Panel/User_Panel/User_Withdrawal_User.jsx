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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message, Table } from "antd";
import { Link } from "react-router-dom";
import {
  UserGet,
  UserTransactionsGet,
  UserTransactionsPost,
  UserUpdate,
} from "../../Api/CoreApi";
import { FaWhatsapp, FaRupeeSign } from "react-icons/fa";

function User_Withdrawal_User() {
  const Navigate = useNavigate();

  const id = localStorage.getItem("user_id");
  const int_id = String(id);
  const [data, setData] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const get = async () => {
    const response = await UserGet();
    const staff_filter = response.filter((i) => i.id === int_id);
    setData(staff_filter);

    const transaction_response = await UserTransactionsGet();
    const transaction_filter = transaction_response.filter(
      (i) => i.user_id === int_id
    );
    setTransaction(transaction_filter.reverse());
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Initial check
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Withdrawal = async (i) => {
    if (i.balance > 0) {
      const id = i.id;
      const balance = i.balance;
      const reduce = { balance: 0 };
      const Transaction_data = {
        user_id: id,
        amount: balance,
        type: "withdrawal",
      };
      await UserTransactionsPost(Transaction_data);

      const staff_response = await UserUpdate(id, reduce);
      const staff_filter = staff_response.filter((i) => i.id === int_id);
      setData(staff_filter.reverse());

      // Refresh transactions after withdrawal
      const transaction_response = await UserTransactionsGet();
      const transaction_filter = transaction_response.filter(
        (i) => i.user_id === int_id
      );
      setTransaction(transaction_filter.reverse());

      message.success("Withdrawal successful");
    } else {
      message.error("Withdrawal failed: balance is zero or less");
    }
  };

  const log_out = () => {
    localStorage.removeItem("user_id");
    Navigate("/User_Login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Topbar */}
      <div className="top-navbar">
        <div className="top-navbar-left">
          {/* Toggle Button */}
          <Button onClick={toggleSidebar} className="sidebar-toggle-button">
            ☰
          </Button>
          <Link to="/Home_Page_wLog">
            <p className="navbar-title">Ristey</p>
          </Link>
        </div>

        {int_id ? (
          <Link to="/User_Panel" className="navbar-link">
            Profile
          </Link>
        ) : (
          <div className="navbar-auth-links">
            <Link to="/User_Reg/885695" className="navbar-link">
              Sign Up
            </Link>
            <Link to="/User_Login" className="navbar-link">
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-buttons">
          <Link to="/User_Panel">
            <Button className="sidebar-button">
              {sidebarOpen ? "Dashboard" : "D"}
            </Button>
          </Link>
          <Link to="/User_Added_User">
            <Button className="sidebar-button">
              {sidebarOpen ? "User" : "U"}
            </Button>
          </Link>
          <Link to="/User_Recharge">
            <Button className="sidebar-button">
              {sidebarOpen ? "Recharge" : "R"}
            </Button>
          </Link>
          <Link to="/User_Transaction_User">
            <Button className="sidebar-button">
              {sidebarOpen ? "Transaction" : "T"}
            </Button>
          </Link>
          <Link to="/User_Withdrawal_User">
            <Button className="sidebar-button">
              {sidebarOpen ? "Withdrawal" : "W"}
            </Button>
          </Link>
          <Button className="sidebar-button" onClick={log_out}>
            {sidebarOpen ? "Log Out" : "L"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <br /> <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {data.map((i) => (
          <div
            key={i.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px auto",
              maxWidth: "600px",
              width: "90%", // Responsive width
              textAlign: "center",
            }}
          >
            {/* Content Wrapper */}
          
            <div style={{ width: "400px", textAlign: "center",paddingTop:"10px" }}>
              <FaRupeeSign style={{ fontSize: "40px", marginBottom: "10px" }} />
              <p style={{ fontSize: "40px", margin: "10px 0" }}>{i.balance}</p>
              <Button
                style={{ margin: "10px 0" ,marginLeft:"10px",marginRight:"30px"}}
                onClick={() => Withdrawal(i)}
              >
                Withdrawal
              </Button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `http://localhost:3000/${i.refer}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px",
                  color: "#25D366",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <FaWhatsapp style={{ fontSize: "22px" }} />
                <span style={{ marginLeft: "8px" }}>Share & Earn</span>
              </a>
            </div>
          </div>
        ))}

        {/* Transaction Table */}
        <div style={{ width: "100%", maxWidth: "1000px", marginTop: "40px" }}>
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
    </div>
  );
}

export default User_Withdrawal_User;
