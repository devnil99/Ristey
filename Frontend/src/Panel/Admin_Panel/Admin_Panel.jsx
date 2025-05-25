// import React from "react";
// import { useState, useEffect } from "react";
// import { Form, Input, Button, Table } from "antd";
// import {
//   UserPost,
//   UserGet,
//   UserUpdate,
//   User_Array_Update,
//   UserRemove,
//   UserImagesPost,
//   UserImagesGet,
//   UserImagesUpdate,
//   UserImagesRemove,
//   StaffGet,
//   StaffPost,
//   StaffUpdate,
//   StaffRemove,
//   PostChargesPost,
//   PostChargesGet,
//   PostChargesUpdate,
//   PostChargesRemove,
//   TotalRevenueGet,
// } from "../../Api/CoreApi";

// function Admin() {
//   const [user, setUser] = useState([]);
//   const [userImages, setUserimages] = useState([]);
//   const [staff, setStaff] = useState([]);
//   const [currentstaff, setCurrentstaff] = useState([]);
//   const [postcharges, setPostcharges] = useState([]);
//   const [totalrevenue, setTotalrevenue] = useState([]);

//   console.log(staff, "****** staff *****");

//   const [div, setDiv] = useState("home");
//   const [staff_form, setStaff_form] = useState(null);
//   const [staff_data, setStaff_data] = useState(null);

//   const get = async () => {
//     const user_response = await UserGet();
//     setUser(user_response);

//     const UserImages_response = await UserImagesGet();
//     setUserimages(UserImages_response);

//     const staff_response = await StaffGet();
//     setStaff(staff_response);

//     const PostCharges_response = await PostChargesGet();
//     setPostcharges(PostCharges_response);

//     const total_revenue_response = await TotalRevenueGet();

//     setTotalrevenue(total_revenue_response);
//   };

//   const adduser = (value) => {
//     console.log(value, "******* value *****");
//     setStaff_form(null);
//   };
//   useEffect(() => {
//     get();
//   }, []);

//   const update_pass = (i) => {
//     console.log(i, "update pass");
//     setStaff_form("update_button");
//   };
//   const updatestaff = (i) => {
//     console.log(i.id, "update pass");
//     setStaff_form(null);
//   };

//   const clickstaff = (value) => {
//     setCurrentstaff(value);
//     setDiv("staff_details");
//   };
//   return (
//     <div style={{ paddingTop: "64px", height: "675px", display: "flex" }}>
//       <div style={{ border: "2px solid red", width: "180px" }}>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//           onClick={() => setDiv("dashboard")}
//         >
//           Dashboard
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//           onClick={() => setDiv("staffprofile")}
//         >
//           Staff
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//         >
//           User
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//         >
//           Transaction
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//         >
//           Withdrawal
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//         >
//           Commisions
//         </Button>
//         <Button
//           style={{
//             textAlign: "center",
//             color: "black",
//             borderRadius: "0px",
//             width: "100%",
//           }}
//         >
//           Log Out
//         </Button>
//       </div>

//       <div
//         style={{
//           border: "2px solid green",
//           width: "90%",
//           marginTop: "15px",
//           marginLeft: "20px",
//         }}
//       >
//         {div === "dashboard" && (
//           <div style={{ display: "flex", columnGap: "5%" ,background:"green",textAlign:"center",padding:"20px",color:"white"}}>
//             <div
//               style={{ width: "20%", height: "120px", border: "2px solid" ,padding:"40px"}}
//               onClick={() => setDiv("staffprofile")}
//             >
//               Staff
//               <p>{staff.length}</p>
//             </div>
//             <div style={{ width: "20%", height: "120px", border: "2px solid",padding:"40px" }}>
//               User
//               <p>{user.length}</p>
//             </div>
//             <div style={{ width: "20%", height: "120px", border: "2px solid",padding:"40px" }}>
//               Transantion
//             </div>
//             <div style={{ width: "20%", height: "120px", border: "2px solid",padding:"40px" }}>
//               Withdrawal
//             </div>
//           </div>
//         )}

//         {div === "staffprofile" && (
//           <div>
//             {staff_form === null && (
//               <Button
//                 style={{ marginLeft: "90%", width: "100px" }}
//                 onClick={() => setStaff_form("add")}
//               >
//                 Add Staff
//               </Button>
//             )}
//             {staff_form === "add" && (
//               <Form style={{ display: "flex" }} onFinish={adduser}>
//                 <Form.Item style={{ width: "400px" }} name="username">
//                   <Input placeholder="Username" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "400px" }}>
//                   <Input placeholder="password" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "300px" }}>
//                   <Input placeholder="Balance" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "300px" }}>
//                   <Input placeholder="Disttrict" />
//                 </Form.Item>
//                 <Form.Item>
//                   <Button
//                     style={{ width: "150px", marginLeft: "10px" }}
//                     htmlType="submit"
//                   >
//                     add
//                   </Button>
//                 </Form.Item>
//               </Form>
//             )}

//             {staff_form === "update_button" && (
//               <Form style={{ display: "flex" }} onFinish={updatestaff}>
//                 <Form.Item style={{ width: "400px" }} name="username">
//                   <Input placeholder="Username" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "400px" }}>
//                   <Input placeholder="password" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "300px" }}>
//                   <Input placeholder="Balance" />
//                 </Form.Item>
//                 <Form.Item style={{ width: "300px" }}>
//                   <Input placeholder="Disttrict" />
//                 </Form.Item>
//                 <Form.Item>
//                   <Button
//                     style={{ width: "150px", marginLeft: "10px" }}
//                     htmlType="submit"
//                   >
//                     update
//                   </Button>
//                 </Form.Item>
//               </Form>
//             )}

//             {staff_data === null && (
//               <Table
//                 columns={[
//                   { title: "ID", dataIndex: "id", key: "id" },
//                   { title: "Username", dataIndex: "username", key: "username" },
//                   { title: "Password", dataIndex: "password", key: "password" },
//                   { title: "Balance", dataIndex: "balance", key: "balance" },
//                   {
//                     title: "District",
//                     dataIndex: "disttrict",
//                     key: "disttrict",
//                   },
//                   {
//                     title: "Actions",
//                     key: "actions",
//                     render: (
//                       _,
//                       record // Corrected to pass row data
//                     ) => (
//                       <>
//                         <Button
//                           style={{ marginRight: 8 }}
//                           onClick={() => update_pass(record)}
//                         >
//                           Update
//                         </Button>
//                         <Button
//                           danger
//                           onClick={() => console.log("Delete:", record)}
//                         >
//                           Delete
//                         </Button>
//                         <Button danger onClick={() => clickstaff(record)}>
//                           details
//                         </Button>
//                       </>
//                     ),
//                   },
//                 ]}
//                 dataSource={staff}
//                 rowKey="id"
//                 bordered
//                 scroll={{ x: true }} // Makes it responsive
//               />
//             )}
//           </div>
//         )}

//         {div === "staff_details" && (
//           <div style={{ display: "flex" }}>
//             <div
//               style={{ border: "2px solid", width: "400px", height: "600px" }}
//             >
//               <div>
//                 <div
//                   style={{
//                     border: "2px solid",
//                     width: "60%",
//                     textAlign: "center",
//                     marginLeft: "20%",
//                     height: "200px",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   img
//                 </div>
//                 <Form onFinish={updatestaff} initialValues={currentstaff}>
//                   <Form.Item style={{ marginTop: "10px" }} name="username">
//                     <Input style={{ border: "none" }} />
//                   </Form.Item>
//                   <Form.Item style={{ marginTop: "-20px" }} name="password">
//                     <Input style={{ border: "none" }} />
//                   </Form.Item>
//                   <Form.Item style={{ marginTop: "-20px" }} name="balance">
//                     <Input style={{ border: "none" }} />
//                   </Form.Item>
//                   <Form.Item style={{ marginTop: "-20px" }} name="disttrict">
//                     <Input style={{ border: "none" }} />
//                   </Form.Item>
//                   <div
//                     style={{
//                       display: "flex",
//                       columnGap: "30px",
//                       marginLeft: "60px",
//                     }}
//                   >
//                     <Form.Item>
//                       <Button>Block</Button>
//                     </Form.Item>
//                     <Form.Item>
//                       <Button htmlType="submit">Save</Button>
//                     </Form.Item>
//                     <Form.Item>
//                       <Button>Delete</Button>
//                     </Form.Item>
//                   </div>
//                   {/* <p style={{fontSize:'22px',marginTop:'30px',marginLeft:'10px',color:'black'}}>Name : {i.username}</p>
//               <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Balance : {i.balance}</p>
//               <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Disttrict : {i.disttrict}</p>
//               <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>password : {i.password}</p> */}
//                 </Form>
//               </div>
//             </div>
//             <div>
//               <p>Hello</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Admin;

//////////////////////////////////////////////////////////////

import React, { useEffect } from 'react'
import { Button, message } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { PiHandWithdrawFill } from "react-icons/pi";

import { UserGet, UserTransactionsGet, StaffTransactionsGet, AdminTotalRevenueGet } from '../../Api/CoreApi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";


function Admin_Panel() {
  const admin_id = localStorage.getItem('user_id')
  const Navigate = useNavigate();

  const [pop, setPop] = useState(null)

  const [user, setUser] = useState([])
  const [staff, setStaff] = useState([])
  const [cmonth_revenue, setCMonth_revenue] = useState([]);
  const [staffwithdrawal, setStaffWithdrawal] = useState([])
  const [userwithdrawal, setUserWithdrawal] = useState([])

  console.log(cmonth_revenue, '****** cmonth_revenue*****')

  const get = async () => {
    const user_response = await UserGet()
    const user_filter = user_response.filter(i => i.role === 'user')
    setUser(user_filter)

    const staff_filter = user_response.filter(i => i.role === 'staff')
    // console.log(staff_filter,'****** user_filter ****')
    setStaff(staff_filter)

    const staff_transaction_response = await StaffTransactionsGet()
    const filter = staff_transaction_response.filter(i => i.status === 'pending')
    setStaffWithdrawal(filter)
    const user_transaction_response = await UserTransactionsGet()
    const filter_user = user_transaction_response.filter(i => i.status === 'pending')
    setUserWithdrawal(filter_user)
    // console.log(filter,filter_user,'****** withdrawal*****')


    const AdminTotalRevenueGet_response1 = await AdminTotalRevenueGet()
    const AdminTotalRevenueGet_response = AdminTotalRevenueGet_response1.filter(i => i.admin_id === admin_id)

    // console.log(AdminTotalRevenueGet_response, '****** admin ******')


    const filteredUsers_Jan = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "01"
    );
    const total_amount_1 = filteredUsers_Jan.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jan")
        ? prev.map(item =>
          item.month === "Jan" ? { month: "Jan", amount: total_amount_1 } : item
        )
        : [...prev, { month: "Jan", amount: total_amount_1 }]
    );


    const filteredUsers_feb = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "02"
    );
    const total_amount_2 = filteredUsers_feb.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Feb")
        ? prev.map(item =>
          item.month === "Feb" ? { month: "Feb", amount: total_amount_2 } : item
        )
        : [...prev, { month: "Feb", amount: total_amount_2 }]
    );

    const filteredUsers_march = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "03"
    );
    const total_amount_March = filteredUsers_march.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "March")
        ? prev.map(item =>
          item.month === "March" ? { month: "March", amount: total_amount_March } : item
        )
        : [...prev, { month: "March", amount: total_amount_March }]
    );

    const filteredUsers_april = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "04"
    );
    const total_amount_april = filteredUsers_april.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "April")
        ? prev.map(item =>
          item.month === "April" ? { month: "April", amount: total_amount_april } : item
        )
        : [...prev, { month: "April", amount: total_amount_april }]
    );


    const filteredUsers_may = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "05"
    );
    const total_amount = filteredUsers_may.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "May")
        ? prev.map(item =>
          item.month === "May" ? { month: "May", amount: total_amount } : item
        )
        : [...prev, { month: "May", amount: total_amount }]
    );


    const filteredUsers_jun = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "06"
    );
    const total_amount_06 = filteredUsers_jun.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jun")
        ? prev.map(item =>
          item.month === "Jun" ? { month: "Jun", amount: total_amount_06 } : item
        )
        : [...prev, { month: "Jun", amount: total_amount_06 }]
    );


    const filteredUsers_Jully = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "07"
    );
    const total_amount_07 = filteredUsers_Jully.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jully")
        ? prev.map(item =>
          item.month === "Jully" ? { month: "Jully", amount: total_amount_07 } : item
        )
        : [...prev, { month: "Jully", amount: total_amount_07 }]
    );




    const filteredUsers_Aug = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "08"
    );
    const total_amount_08 = filteredUsers_Aug.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Aug")
        ? prev.map(item =>
          item.month === "Aug" ? { month: "Aug", amount: total_amount_08 } : item
        )
        : [...prev, { month: "Aug", amount: total_amount_08 }]
    );


    const filteredUsers_Sept = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "09"
    );
    const total_amount_09 = filteredUsers_Sept.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Sept")
        ? prev.map(item =>
          item.month === "Sept" ? { month: "Sept", amount: total_amount_09 } : item
        )
        : [...prev, { month: "Sept", amount: total_amount_09 }]
    );


    const filteredUsers_Oct = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "10"
    );
    const total_amount_10 = filteredUsers_Oct.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Oct")
        ? prev.map(item =>
          item.month === "Oct" ? { month: "Oct", amount: total_amount_10 } : item
        )
        : [...prev, { month: "Oct", amount: total_amount_10 }]
    );

    const filteredUsers_Nov = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "11"
    );
    const total_amount_11 = filteredUsers_Nov.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Nov")
        ? prev.map(item =>
          item.month === "Nov" ? { month: "Nov", amount: total_amount_11 } : item
        )
        : [...prev, { month: "Nov", amount: total_amount_11 }]
    );

    const filteredUsers_Dec = AdminTotalRevenueGet_response.filter(
      (i) => i.month === "12"
    );
    const total_amount_12 = filteredUsers_Dec.map(i => i.admin_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Dec")
        ? prev.map(item =>
          item.month === "Dec" ? { month: "Dec", amount: total_amount_12 } : item
        )
        : [...prev, { month: "Dec", amount: total_amount_12 }]
    );

  }

  const todayMonth = new Date().toLocaleString('en-US', { month: 'long' });
  // console.log(todayMonth,'******** todayMonth ******')
  const current_month = cmonth_revenue.filter(i => i.month === todayMonth)
  // console.log(current_month, '****** todayMonth ******')

  useEffect(() => {
    get()
  }, [])

  const log_out = () => {
    localStorage.removeItem('Staff')
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
      <div style={{ marginLeft: '220px', marginTop: '0px', height: '100%', display: 'flex', columnGap: '20px', paddingTop: '70px' }}>
        <Link to='/Staff_Tables'><div style={{ width: '300px', height: '150px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}>
          <p style={{ fontSize: '60px', textAlign: 'center' }}><FaUser /></p>
          <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '-25px' }}>{staff.length}</p>
          <p style={{ fontSize: '28px', textAlign: 'center', marginTop: '-15px' }}>Staff</p>
        </div></Link>
        <Link to='/User_Tables'><div style={{ width: '300px', height: '150px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}>
          <p style={{ fontSize: '60px', textAlign: 'center' }}><FaUser /></p>
          <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '-25px' }}>{user.length}</p>
          <p style={{ fontSize: '28px', textAlign: 'center', marginTop: '-15px' }}>User</p>
        </div></Link>
        <div style={{ width: '300px', height: '150px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}>
          <p style={{ fontSize: '60px', textAlign: 'center' }}><FaRupeeSign /></p>
          <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '-25px' }}>{current_month[0]?.amount || ""}</p>
          <p style={{ fontSize: '28px', textAlign: 'center', marginTop: '-15px' }}>Total Revenue</p>
        </div>
        <Link to='/Withdrawal'><div style={{ width: '300px', height: '150px', borderRadius: '10px', backgroundColor: 'white', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}>
          <p style={{ fontSize: '60px', textAlign: 'center' }}><PiHandWithdrawFill /></p>
          <p style={{ fontSize: '30px', marginLeft: '40px', marginTop: '-70px' }}>Staff</p>
          <p style={{ fontSize: '30px', marginLeft: '195px', marginTop: '-50px' }}>User</p>
          <p style={{ fontSize: '30px', marginLeft: '40px', marginTop: '-10px' }}>{staffwithdrawal.length}</p>
          <p style={{ fontSize: '30px', marginLeft: '200px', marginTop: '-50px' }}>{userwithdrawal.length}</p>
          <p style={{ fontSize: '28px', textAlign: 'center', marginTop: '-15px' }}>Withdrawal Request</p>
        </div></Link>
      </div>
      <ResponsiveContainer width="80%" height={300} style={{ marginTop: '150px', marginLeft: '190px' }}>
        <BarChart data={cmonth_revenue} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8">
            <LabelList dataKey="amount" position="top" style={{ fontSize: '12px', fill: '#000' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div >
  )
}

export default Admin_Panel

// import React from 'react'

// function Admin_Panel() {
//   return (
//     <div>Admin_Panel</div>
//   )
// }

// export default Admin_Panel