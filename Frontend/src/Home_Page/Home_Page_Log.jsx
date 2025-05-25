// import React, { useEffect, useState } from "react";
// import { Button, Card, message } from "antd";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoSend } from "react-icons/io5";
// import { IoCall } from "react-icons/io5";
// import { formatDistanceToNow, parse } from "date-fns";
// import { Link } from "react-router-dom";
// import {
//   UserGet,
//   UserUpdate,
//   User_Array_Update,
//   PostChargesGet,
//   StaffTotalRevenueGet,
//   StaffTotalRevenueUpdate,
//   AdminTotalRevenueGet,
//   AdminTotalRevenueUpdate
// } from "../Api/CoreApi";
// import { formatDistanceToNow as timeAgo } from "date-fns";
// import "../Home_Page/Home_Page.css";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// function Home_Page_Log() {
//   const baseurl = "http://127.0.0.1:8000/";
//   const [user, setUser] = useState([]); // current user
//   const [alluser, setAlluser] = useState([])
//   const [data, setData] = useState([]); // filterd user
//   const [admin, setAdmin] = useState([]); // admin
//   const [staff_Json, setStaff_Json] = useState([]); // staff
//   const [developer, setDeveloper] = useState([]); // developer
//   const [charges, setCharges] = useState([]);
//   const [staffrevenue, setStaffrevenue] = useState([]);
//   const [adminrevenue, setAdminrevwnue] = useState([])
//   // console.log(user, '**** user ******')
//   // console.log(alluser,'**** alluser ******')
//   // console.log(data,'**** data ******')
//   // console.log(admin, '**** admin ******')
//   // console.log(staff_Json,'**** staff_Json ******')
//   // console.log(developer,'**** developer ******')
//   // console.log(charges,'**** charges ******')
//   // console.log(staffrevenue, '**** staffrevenue ******')
//   // console.log(adminrevenue,'**** adminrevenue ******')

//   const id = localStorage.getItem("user_id");
//   // const id = parseInt(userid);
//   // console.log(id, '****** id *******')

//   const user_get = async () => {
//     // user
//     const response = await UserGet();
//     // console.log(response,'********* response *******')
//     const alluser_filter = response.filter(i=>i.role === 'user')
//     setAlluser(alluser_filter)

//     const admin_filter = response.filter(i=>i.role === 'admin')
//     setAdmin(admin_filter)

//     const staff_filter = response.filter(i=>i.role === 'staff')
//     setStaff_Json(staff_filter)

//     const developer_filter = response.filter(i=>i.role === 'developer')
//     setDeveloper(developer_filter)

//     const current_user = response.filter((i) => i.id === id);
//     // console.log(response,'**** current_user ******')
//     setUser(current_user);

//     const user_geder = current_user.map((i) => i.gender);
//     if (user_geder == "Male") {
//       const filter_female = response.filter((i) => i.gender === "Female");
//       setData(filter_female);
//     } else {
//       const filter_male = response.filter((i) => i.gender === "Male");
//       setData(filter_male);
//     }
//   };

//   const PostCharges_get = async () => {
//     // developer
//     const response = await PostChargesGet();
//     // console.log(response,'PostCharges_get')
//     setCharges(response);
//   };

//   const StaffTotalRevenueGet_get = async () => {
//     // Developer
//     const today = new Date();
//     const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
//     const year = today.getFullYear();
//     const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)
//     const response = await StaffTotalRevenueGet();
//     const current_revenue = response.filter((i) => i.month === formattedDate);
//     setStaffrevenue(current_revenue);
//   };

//   const AdminTotalRevenueGet_get = async () => {
//     // Developer
//     const today = new Date();
//     const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
//     const year = today.getFullYear();
//     const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)
//     const response = await AdminTotalRevenueGet();
//     const current_revenue = response.filter((i) => i.month === formattedDate);
//     setAdminrevwnue(current_revenue);
//   };

//   useEffect(() => {
//     user_get();
//     PostCharges_get();
//     StaffTotalRevenueGet_get();
//     AdminTotalRevenueGet_get();
//   }, []);

//   const alert_popup = (i) => {
//     if (window.confirm("Are you sure?")) {
//       distribute(i);
//     }
//   };

//   const distribute = async (value) => {
//     if (user[0].balance > 24) {
//       const charges_amount = charges.map((i) => i.post_charges);
//       const amount = (parseInt(charges_amount))
//       const user_amount = user[0].balance
//       // console.log(amount,'******* value ********')

//       // const amount = 100
//       const commision = charges.map((i) => i.staff_commission);
//       // const commision = 15

//       // const user_amount = value.balance;
//       const reduce_balance = parseInt(user_amount) - parseInt(amount); // send user API
//       const fix_user_amount = { balance: reduce_balance };

//       const response1 = await UserUpdate(id, fix_user_amount);

//       console.log(response1, "****** (1) user_reduce_balance Main okkkkkkk ******");  // ok

//       const plateform_charge = (amount * 2) / 100; // plateform charge $2 = $98
//       const after_pateform_charge = amount - plateform_charge;

//       const staffCommision = (parseInt(after_pateform_charge) * parseInt(commision)) / 100;  // send Staff 98 ka 15% = 14.7 == 83.3
//       const staff_Commision = (parseInt(staffCommision))



//       const filter_staff = staff_Json.filter((i) => i.refer === value.ref);
//       // console.log(filter_staff, "***** (2) refer_staff_commission okkkkk ******");  // ok

//       const str = filter_staff.map((i) => i.id);
//       const staff_id = String(str);
//       if (filter_staff.length === 1) {
//         const staff_balance = filter_staff.map((i) => i.balance);
//         const add = parseInt(staff_Commision) + parseInt(staff_balance); // send Staff API 14
//         const fix_staff_amount = { balance: add };

//         const response2 = await UserUpdate(staff_id, fix_staff_amount);
//         console.log(response2, "***** (2) refer_staff_commission okkkkk ******");  // ok

//         const data_id = value.id;
//         const today = new Date().toLocaleDateString();
//         value.user_apply.push({
//           suser_id: id,
//           ruser_id: data_id,
//           amount: amount,
//           date: today,
//           staff: staff_id,
//           a:'(2,1)'
//         });
//         delete value.pic;

//         const response3 = await User_Array_Update(data_id, value);
//         setData(response3);
//         console.log(response3, "****** (2,1) User_Array_Staff_commisssion okkkkk *******");
//         // StaffTotalRevenueUpdate

//         // const data_id = value.id;
//         // const today = new Date().toLocaleDateString();

//         const staffrevenueid = staffrevenue.map((i) => i.id);
//         const staffrevenue_id = String(staffrevenueid)
//         // const int_staffrevenue_id = parseInt(staffrevenue_id); // id

//         const staffrevenue_revenue = staffrevenue.map((i) => i.revenue); // 
//         const staffrevenue_amount = parseInt(staffrevenue_revenue);
//         const stafftotal_revenue = parseInt(staffrevenue_amount) + parseInt(staff_Commision);

//         const staffrev = staffrevenue[0];
//         staffrev.user.push({
//           suser_id: id,
//           ruser_id: data_id,
//           staff_amount: staff_Commision,
//           total_amount: amount,
//           date: today,
//           staff: staff_id,
//         });
//         setStaffrevenue(staffrev);

//         const staffrevenue1 = { ...staffrev, revenue: stafftotal_revenue };
//         const adminresponse5 = await StaffTotalRevenueUpdate(staffrevenue_id, staffrevenue1);
//         console.log(adminresponse5, "****** Stafftotal revenue okkkkk *******");
//         setStaffrevenue(adminresponse5);
//       } 
//       // else {
//       //   const data_id = value.id;
//       //   const today = new Date().toLocaleDateString();
//       //   value.user_apply.push({
//       //     suser_id: id,
//       //     ruser_id: data_id,
//       //     amount: amount,
//       //     date: today,
//       //     staff: '',
//       //   });
//       //   delete value.pic;

//       //   // const response3 = await User_Array_Update(data_id, value);
//       //   // setData(response3);
//       //   console.log(value, "****** (2,1) User_Array_Staff_commisssion //// *******");
//       // }



//       const after_staff_Commision =
//         parseInt(after_pateform_charge) - parseInt(staff_Commision); // 83.3

//       const dev_commision = (after_staff_Commision * 15) / 100; // send developer  12
//       const dev_id = developer.map((i) => i.id);
//       const developer_id = String(dev_id);

//       // const developer_id_int = parseInt(developer_id);

//       const developer_balance = developer.map((i) => i.balance);
//       const add_developer_balance =
//         parseInt(developer_balance) + parseInt(dev_commision);
//       const fix_developer_amount = { balance: add_developer_balance };

//       const response3 = await UserUpdate(
//         developer_id,
//         fix_developer_amount
//       );

//       console.log(response3, "***** (3) Dev_commission Main okkkkkk ******");  // ok

//       const filter_Dev = developer.filter((i) => i.refer === value.ref);
//       if (filter_Dev.length === 1) {
//         const add = parseInt(staff_Commision) + parseInt(add_developer_balance); // send Dev API 14
//         const fix_Dev_amount = { balance: add };

//         const response4 = await UserUpdate(developer_id, fix_Dev_amount);
//         console.log(response4, "***** (3,1) refer_Dev_commission ******");  // ok


//         const data_id = value.id;
//         const today = new Date().toLocaleDateString();
//         value.user_apply.push({
//           a:'',
//           suser_id: id,
//           ruser_id: data_id,
//           amount: amount,
//           date: today,
//           developer: developer_id,
//         });
//         delete value.pic;

//         const response5 = await User_Array_Update(data_id, value);
//         setData(response5);
//         console.log(response5, "***** (3,2) User_Array_Update_Dev_commission /////  okkkkk ******");  // ok
//       }

//       // console.log(fix_developer_amount, "**** add_developer_balance ***");  // ok

//       const admincommision = after_staff_Commision - dev_commision; // send admin 71
//       const admin_commision = (parseInt(admincommision))
//       const adminid = admin.map((i) => i.id);
//       const admin_id = String(adminid)
//       // const admin_id_int = parseInt(admin_id);
//       const Admin_balance = admin.map((i) => i.balance);
//       const add_Admin_balance =
//         parseInt(Admin_balance) + parseInt(admin_commision);
//       const fix_admin_amount = { balance: add_Admin_balance };

//       const response6 = await UserUpdate(admin_id, fix_admin_amount);
//       console.log(response6, "***** (4) Admin_Commission Main ////// *****"); // ok


//       const filter_admin = admin.filter((i) => i.refer === value.ref);
//       if (filter_admin.length === 1) {
//         const add = parseInt(staff_Commision) + parseInt(add_Admin_balance); // send Dev API 14
//         const fix_admin_amount = { balance: add };

//         const response7 = await UserUpdate(admin_id, fix_admin_amount);
//         console.log(response7, "***** (4,1) refer_Admin_Commission ******");  // ok

//         const data_id = value.id;
//         const today = new Date().toLocaleDateString();
//         value.user_apply.push({
//           suser_id: id,
//           ruser_id: data_id,
//           amount: amount,
//           date: today,
//           admin: admin_id,
//         });
//         delete value.pic;

//         const response8 = await User_Array_Update(data_id, value);
//         console.log(response8, "***** (4,1) User_Array_Update_Admin_Commission ******");  // ok

//         setData(response8);

//       }

//       const filter_user = alluser.filter((i) => i.refer === value.ref);
//       const alluser__id = filter_user.map(i => i.id)
//       const alluser_id = String(alluser__id);

//       const alluser_balance = filter_user.map(i => i.balance)
//       if (filter_user.length === 1) {
//         const add = parseInt(staff_Commision) + parseInt(alluser_balance); // send Dev API 14
//         const fix_user_amount = { balance: add };
//         const response9 = await UserUpdate(alluser_id, fix_user_amount);
//         console.log(response9, "***** (5) refer_User_commission Okkkkkkkkk ******");  // ok


//         const data_id = value.id;
//         // console.log(value,'****** value pic *****')
//         const today = new Date().toLocaleDateString();
//         value.user_apply.push({
//           suser_id: id,
//           ruser_id: data_id,
//           amount: amount,
//           date: today,
//           user: alluser_id,
//         });
//         delete value.pic;

//         const response10 = await User_Array_Update(data_id, value);
//         setData(response10);

//         console.log(response10, "***** (5,1) User_Array_Update_User_commission Okkkkkkkkk *****");
//         // const data_id = value.id;
//         // const today = new Date().toLocaleDateString();
//       }
//       //  else {
//       //   const data_id = value.id;
//       //   const today = new Date().toLocaleDateString();
//       //   value.user_apply.push({
//       //     suser_id: id,
//       //     ruser_id: data_id,
//       //     amount: amount,
//       //     date: today,
//       //     user: '',
//       //   });
//       //   delete value.pic;

//       //   // const response10 = await User_Array_Update(data_id, value);
//       //   // setData(response10);

//       //   console.log(value, "***** (5,2) User_Array_Update_User_commission Okkkkkkkkk *****");
//       // }

//       const data_id = value.id;
//       const today = new Date().toLocaleDateString();
//       const admin_str = adminrevenue.map((i) => i.id);
//       const adminrevenue_id = String(admin_str)
//       // const int_adminrevenue_id = parseInt(adminrevenue_id); // id

//       const adminrevenue_revenue = adminrevenue.map((i) => i.revenue); // 
//       const adminrevenue_amount = parseInt(adminrevenue_revenue);
//       const admintotal_revenue = parseInt(adminrevenue_amount) + parseInt(admin_commision);

//       const adminrev = adminrevenue[0];
//       adminrev.user.push({
//         suser_id: id,
//         ruser_id: data_id,
//         admin_amount: admin_commision,
//         total_amount: amount,
//         date: today,
//       });
//       setAdminrevwnue(adminrev);

//       const adminrevenue1 = { ...adminrev, revenue: admintotal_revenue };
//       const adminresponse11 = await AdminTotalRevenueUpdate(adminrevenue_id, adminrevenue1);
//       console.log(adminresponse11, "****** (5,3) Admintotal revenue okkkkkkk *******");
//       // setAdminrevwnue(adminresponse11);

//       message.success('success')

//     } else {
//       message.error('need to aad balance')
//     }
//   };

//   return (
//     <>
//       <div>
//         <div style={{ height: "80px", display: "flex", marginLeft: "300px" }}>
//           <img
//             src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt=""
//             style={{
//               width: "200px",
//               height: "70px",
//               paddingTop: "10px",
//               marginLeft: "30px",
//             }}
//           />
//           <div style={{ paddingTop: "20px", marginLeft: "200px" }}>
//             <Link to="/User_Profile">My Profile</Link>{" "}
//           </div>
//         </div>

//         <div style={{ paddingTop: "20px" }}>
//           <div
//             style={{
//               // border: "2px solid",
//               width: "1600px",
//               // height: "600px",
//               marginLeft: "120px",
//               display: "flex",
//               columnGap: "20px",
//             }}
//           >
//             {data.map((i) => (
//               <div
//                 style={{
//                   paddingTop: "1px",
//                   paddingLeft: "7px",
//                   height: "180px",
//                   width: "500px",
//                   backgroundColor: "white",
//                   borderRadius: "10px",
//                   boxShadow: "1px 0.5px 4px gray",
//                 }}
//               >
//                 <Link
//                   to={`/${i.id}`}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   <p>
//                     <img
//                       src={`${baseurl}${i.pic}`}
//                       style={{
//                         width: "150px",
//                         height: "150px",
//                         borderRadius: "5%",
//                         marginLeft: "2px",
//                         // marginTop: "-13px",
//                         marginTop: "5px",
//                         marginBottom: "10px",
//                       }}
//                     />
//                   </p>

//                   <p
//                     style={{
//                       marginTop: "-180px",
//                       marginLeft: "170px",
//                       fontSize: "28px",
//                       color: "black",
//                     }}
//                   >
//                     {i.username}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "-10px",
//                       marginLeft: "170px",
//                       fontSize: "18px",
//                       color: "black",
//                     }}
//                   >
//                     Age : {i.age}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "-30px",
//                       marginLeft: "255px",
//                       fontSize: "18px",
//                       color: "black",
//                     }}
//                   >
//                     {i.religion}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "-30px",
//                       marginLeft: "325px",
//                       fontSize: "18px",
//                       color: "black",
//                     }}
//                   >
//                     {i.gender}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "-5px",
//                       marginLeft: "170px",
//                       fontSize: "18px",
//                       color: "black",
//                     }}
//                   >
//                     Education : {i.course}
//                   </p>
//                   <p
//                     style={{
//                       marginTop: "-5px",
//                       marginLeft: "170px",
//                       fontSize: "18px",
//                       color: "black",
//                     }}
//                   >
//                     Job : {i.job_title}
//                   </p>
//                 </Link>
//                 <FaLocationDot
//                   style={{
//                     marginTop: "-5px",
//                     marginLeft: "170px",
//                     fontSize: "18px",
//                     color: "black",
//                   }}
//                 />
//                 <p
//                   style={{
//                     marginTop: "-27px",
//                     marginLeft: "190px",
//                     fontSize: "18px",
//                     color: "black",
//                   }}
//                 >
//                   {i.disttrict}
//                 </p>
//                 <p
//                   style={{
//                     marginTop: "-4px",
//                     marginLeft: "170px",
//                     fontSize: "18px",
//                     color: "black",
//                   }}
//                 >
//                   {/* {" "} */}
//                   {timeAgo(new Date(i.create_date), {
//                     addSuffix: true,
//                   }).replace("about ", "")}
//                 </p>

//                 {i.user_apply.some((u) => u.suser_id === id) ? (
//                   <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
//                     <Button
//                       onClick={() =>
//                         (window.location.href = `tel:${i.contact}`)
//                       }
//                       style={{ height: "33px", width: "100px" }}
//                     >
//                       <IoCall style={{ fontSize: "18px" }} />
//                     </Button>
//                   </p>
//                 ) : (
//                   <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
//                     <Button style={{ height: "33px", width: "100px" }}>
//                       <IoSend
//                         style={{ fontSize: "25px" }}
//                         onClick={() => alert_popup(i)}
//                       />
//                     </Button>
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home_Page_Log;


import React, { useEffect, useState } from "react";
import { Button, Card, message } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  UserGet,
  UserUpdate,
  UserData_Array_Update,
  UserDataGet,
  UserDataUpdate,
  PostChargesGet,
  UserTotalRevenuePost,
  StaffTotalRevenuePost,
  DevTotalRevenuePost,
  AdminTotalRevenuePost,
} from "../Api/CoreApi";
import { formatDistanceToNow as timeAgo } from "date-fns";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";

function Home_Page_Log() {
  const id = localStorage.getItem("user_id");
  const baseurl = "http://127.0.0.1:8000/";


  const [user, setUser] = useState([]); // current user
  const [alluser, setAlluser] = useState([]) // all user
  const [data, setData] = useState([]); // male/Female filterd user
  const [admin, setAdmin] = useState([]); // admin
  const [staff_Json, setStaff_Json] = useState([]); // staff
  const [developer, setDeveloper] = useState([]); // developer
  const [charges, setCharges] = useState([]); // charges
  const [reload, setReload] = useState(0)

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = today.getFullYear();
  // const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)


  const user_get = async () => {
    const response = await UserGet();

    const alluser_filter = response.filter(i => i.role === 'user')
    setAlluser(alluser_filter)

    const admin_filter = response.filter(i => i.role === 'admin')
    setAdmin(admin_filter)

    const staff_filter = response.filter(i => i.role === 'staff')
    setStaff_Json(staff_filter)

    const developer_filter = response.filter(i => i.role === 'developer')
    setDeveloper(developer_filter)

    const current_user = response.filter((i) => i.id === id);
    setUser(current_user); // current

    const response_UserDataGet = await UserDataGet();
    const user_geder = current_user.map((i) => i.gender);
    const user_geder_str = String(user_geder)
    if (user_geder_str == "Male") {
      const filter_female = response_UserDataGet.filter((i) => i.gender === "Female");
      setData(filter_female);
    } else {
      const filter_male = response_UserDataGet.filter((i) => i.gender === "Male");
      setData(filter_male);
    }

    const response_PostCharges = await PostChargesGet();
    setCharges(response_PostCharges);

  };

  useEffect(() => {
    user_get();
  }, [reload]);

  const alert_popup = (i) => {
    if (window.confirm("Are you sure?")) {
      distribute(i);
    }
  };


  const distribute = async (value) => {
    const data_id = value.User_id;
    const today = new Date().toLocaleDateString();
    if (user[0].balance > 24) {
      message.success("success");
      const charges_amount = charges.map((i) => i.post_charges);
      const amount = parseInt(charges_amount);
      const user_amount = user[0].balance;

      const commision = charges.map((i) => i.staff_commission);

      const reduce_balance = parseInt(user_amount) - parseInt(amount); // send user API
      const fix_user_amount = { balance: reduce_balance };

      const response1 = await UserUpdate(id, fix_user_amount);

      console.log(
        response1,
        "****** (1) user_reduce_balance Main okkkkkkk ******"
      ); // ok
      const current_admin = response1.filter((i) => i.role === 'admin');
      const current_staff = response1.filter((i) => i.role === 'staff');
      const current_dev = response1.filter((i) => i.role === 'developer');
      const current_user = response1.filter((i) => i.id === id);
      setAdmin(current_admin)
      setStaff_Json(current_staff)
      setDeveloper(current_dev)
      setAlluser(response1);
      setUser(current_user);


      const plateform_charge = (amount * 2) / 100; // plateform charge $2 = $98
      const after_pateform_charge = amount - plateform_charge;

      const staffCommision = (parseInt(after_pateform_charge) * parseInt(commision)) / 100; // send Staff 98 ka 15% = 14.7 == 83.3
      const staff_Commision = parseInt(staffCommision);

      //////////////////////////////// Staff Commossion ////////////////////////////////////////////

      const filter_staff = staff_Json.filter((i) => i.refer === value.ref);

      const str = filter_staff.map((i) => i.id);
      const staff_id = String(str);
      if (filter_staff.length === 1) {
        const staff_balance = filter_staff.map((i) => i.balance);
        const add = parseInt(staff_Commision) + parseInt(staff_balance); // send Staff API 14
        const fix_staff_amount = { balance: add };

        const response2 = await UserUpdate(staff_id, fix_staff_amount);
        console.log(
          response2,
          "***** (2) refer_staff_commission okkkkk ******"
        ); // ok
        const current_admin = response2.filter((i) => i.role === 'admin');
        const current_staff = response2.filter((i) => i.role === 'staff');
        const current_dev = response2.filter((i) => i.role === 'developer');
        const current_user = response2.filter((i) => i.id === id);
        setAdmin(current_admin)
        setStaff_Json(current_staff)
        setDeveloper(current_dev)
        setAlluser(response2);
        setUser(current_user);


        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // staff_id: staff_id,
        });
        delete value.pic;
        delete value.cover_img;

        const response3 = await UserData_Array_Update(data_id, value);
        setData(response3);
        console.log(
          response3,
          "****** (2,1) User_Array_Staff_commisssion okkkkk *******"
        );

        const staffrev = ({
          suser_id: id,
          ruser_id: data_id,
          staff_amount: staff_Commision,
          total_amount: amount,
          date: today,
          month: month,
          staff_id: staff_id
        });

        const adminresponse5 = await StaffTotalRevenuePost(staffrev);
        console.log(adminresponse5, "****** Stafftotal revenue okkkkk *******");
      }

      ///////////////////////////// Developer ////////////////////////////////

      const after_staff_Commision =
        parseInt(after_pateform_charge) - parseInt(staff_Commision); // 83.3

      const int_dev_commision = (after_staff_Commision * 15) / 100; // send developer  12
      const dev_commision = parseInt(int_dev_commision)
      const dev_id = developer.map((i) => i.id);
      const developer_id = String(dev_id);

      const developer_balance = developer.map((i) => i.balance);
      const add_developer_balance =
        parseInt(developer_balance) + parseInt(dev_commision);
      const fix_developer_amount = { balance: add_developer_balance };

      const response3 = await UserUpdate(developer_id, fix_developer_amount);
      const current_admin3 = response3.filter((i) => i.role === 'admin');
      const current_staff3 = response3.filter((i) => i.role === 'staff');
      const current_dev3 = response3.filter((i) => i.role === 'developer');
      const current_user3 = response3.filter((i) => i.id === id);
      setAdmin(current_admin3)
      setStaff_Json(current_staff3)
      setDeveloper(current_dev3)
      setAlluser(response3);
      setUser(current_user3);
      console.log(response3, "***** (3) Dev_commission Main okkkkkk ******"); // ok

      ////////////////// DevTotalRevenue //////////////////////////

      const devrev = {
        suser_id: id,
        ruser_id: data_id,
        dev_amount: dev_commision,
        total_amount: amount,
        date: today,
        month: month,
        dev_id: developer_id
      }

      const devresponse5 = await DevTotalRevenuePost(devrev);

      console.log(devresponse5, "****** devtotal revenue okkkkk *******");

      const filter_Dev = developer.filter((i) => i.refer === value.ref);
      if (filter_Dev.length === 1) {
        const parse_add = parseInt(staff_Commision) + parseInt(add_developer_balance); // send Dev API 14
        const add = parseInt(parse_add)
        const fix_Dev_amount = { balance: add };

        const response4 = await UserUpdate(developer_id, fix_Dev_amount);
        const current_admin4 = response4.filter((i) => i.role === 'admin');
        const current_staff4 = response4.filter((i) => i.role === 'staff');
        const current_dev4 = response4.filter((i) => i.role === 'developer');
        const current_user4 = response4.filter((i) => i.id === id);
        setAdmin(current_admin4)
        setStaff_Json(current_staff4)
        setDeveloper(current_dev4)
        setAlluser(response4);
        setUser(current_user4);
        console.log(response4, "***** (3,1) refer_Dev_commission ******"); // ok

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // dev_id: developer_id,
        });
        delete value.pic;

        const response5 = await UserData_Array_Update(data_id, value);
        setData(response5);
        console.log(
          response5,
          "***** (3,2) UserData_Array_Update_Dev_commission /////  okkkkk ******"
        ); // ok

        const devrev = ({
          suser_id: id,
          ruser_id: data_id,
          dev_amount: dev_commision,
          total_amount: amount,
          date: today,
          month: month,
          dev_id: developer_id

        });

        const devresponse5 = await DevTotalRevenuePost(devrev);
        console.log(devresponse5, "****** devtotal revenue okkkkk *******");
      }


      //////////////////////// Admin Commission ///////////////////////////////


      const admincommision = after_staff_Commision - dev_commision; // send admin 71
      const admin_commision = parseInt(admincommision);
      const admin_scom_adcom = admin_commision + staff_Commision;
      const adminid = admin.map((i) => i.id);
      const admin_id = String(adminid);
      const Admin_balance = admin.map((i) => i.balance);
      const add_Admin_balance =
        parseInt(Admin_balance) + parseInt(admin_commision);
      const fix_admin_amount = { balance: add_Admin_balance };

      const response6 = await UserUpdate(admin_id, fix_admin_amount);
      const current_admin6 = response6.filter((i) => i.role === 'admin');
      const current_staff6 = response6.filter((i) => i.role === 'staff');
      const current_dev6 = response6.filter((i) => i.role === 'developer');
      const current_user6 = response6.filter((i) => i.id === id);
      setAdmin(current_admin6)
      setStaff_Json(current_staff6)
      setDeveloper(current_dev6)
      setAlluser(response6);
      setUser(current_user6);
      console.log(response6, "***** (4) Admin_Commission Main ////// *****"); // ok

      const filter_admin = admin.filter((i) => i.refer === value.ref && i.role === 'admin');
      if (filter_admin.length === 1) {
        const parse_add = parseInt(staff_Commision) + parseInt(add_Admin_balance); // send Dev API 14
        const add = parseInt(parse_add)
        const fix_admin_amount = { balance: add };

        const response7 = await UserUpdate(admin_id, fix_admin_amount);
        // const admin_filter = response7.filter(i => i.role === 'admin')
        const current_admin7 = response7.filter((i) => i.role === 'admin');
        const current_staff7 = response7.filter((i) => i.role === 'staff');
        const current_dev7 = response7.filter((i) => i.role === 'developer');
        const current_user7 = response7.filter((i) => i.id === id);
        setAdmin(current_admin7)
        setStaff_Json(current_staff7)
        setDeveloper(current_dev7)
        setAlluser(response7);
        setUser(current_user7);
        console.log(response7, "***** (4,1) refer_Admin_Commission ******"); // ok

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // admin_id: admin_id,
        });
        delete value.pic;

        const response8 = await UserData_Array_Update(data_id, value);
        console.log(
          response8,
          "***** (4,1) UserData_Array_Update_Admin_Commission ******"
        ); // ok
        setData(response8)

        const adminrev = ({
          suser_id: id,
          ruser_id: data_id,
          admin_amount: admin_scom_adcom,
          total_amount: amount,
          date: today,
          month: month,
          admin_id: admin_id
        });

        const adminresponse11 = await AdminTotalRevenuePost(adminrev);
        console.log(
          adminresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );

      } else {

        const adminrev = ({
          suser_id: id,
          ruser_id: data_id,
          admin_amount: admin_commision,
          total_amount: amount,
          date: today,
          month: month,
          admin_id: admin_id

        });

        const adminresponse11 = await AdminTotalRevenuePost(adminrev);
        console.log(
          adminresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );
      }


      const filter_user = alluser.filter((i) => i.refer === value.ref && i.role === 'user');
      console.log(filter_user, '******** all user *********')

      const alluser__id = filter_user.map((i) => i.id);
      const alluser_id = String(alluser__id);
      const filter_user_balance = filter_user.map(i => i.balance)

      const alluser_balance = (parseInt(filter_user_balance))
      if (filter_user.length === 1) {
        const add = parseInt(staff_Commision) + parseInt(alluser_balance); // send Dev API 14
        const fix_user_amount = { balance: add };
        console.log(fix_user_amount, '******* fix_user_amount *******')
        const response9 = await UserUpdate(alluser_id, fix_user_amount);
        console.log(
          response9,
          "***** (5) refer_User_commission Okkkkkkkkk ******"
        ); // ok
        const current_admin9 = response9.filter((i) => i.role === 'admin');
        const current_staff9 = response9.filter((i) => i.role === 'staff');
        const current_dev9 = response9.filter((i) => i.role === 'developer');
        const current_user9 = response9.filter((i) => i.id === id);
        setAdmin(current_admin9)
        setStaff_Json(current_staff9)
        setDeveloper(current_dev9)
        setAlluser(response9);
        setUser(current_user9);

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // user_id: alluser_id,
        });
        delete value.pic;

        const response10 = await UserData_Array_Update(data_id, value);
        setData(response10);

        console.log(
          response10,
          "***** (5,1) UserData_Array_Update_User_commission Okkkkkkkkk *****"
        );

        const userrev = ({
          suser_id: id,
          ruser_id: data_id,
          user_amount: staff_Commision,
          total_amount: amount,
          date: today,
          month: month,
          user_id: alluser_id
        });

        const userresponse11 = await UserTotalRevenuePost(userrev);
        console.log(
          userresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );
      }

      // setReload(1);
    } else {
      message.error("need to aad balance");
      setReload(1);
    }
  };
  return (
    <>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft:'20px',marginTop:'-1px'}}>Ristey</p>
        </Link>

        {id ? (
          <Link to='/User_panel'>
            <p style={{ fontSize: '15px', color: 'white',  marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
          </Link>
        ) : (
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to='/User_Reg/885695'>
              <p style={{ fontSize: '15px', color: 'white',marginTop: '13px', marginLeft: '1200px'  }}>Sign Up</p>
            </Link>
            <Link to='/User_Login'>
              <p style={{ fontSize: '15px', color: 'white',marginTop: '13px', marginLeft: '30px'  }}>Login</p>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div style={{ height: "80px", display: "flex", marginLeft: "300px" }}>
          {/* <img
            src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            style={{
              width: "200px",
              height: "70px",
              paddingTop: "10px",
              marginLeft: "30px",
            }}
          /> */}
          {/* <div style={{ paddingTop: "70px", marginLeft: "200px" }}>
            <Link to="/User_Profile">My Profile</Link>{" "}
          </div> */}
        </div>

        <div style={{ paddingTop: "20px" }}>
          <div
            style={{
              // border: "2px solid",
              width: "1600px",
              // height: "600px",
              marginLeft: "120px",
              display: "flex",
              columnGap: "20px",
            }}
          >
            {data.map((i) => (
              <div
                style={{
                  paddingTop: "1px",
                  paddingLeft: "7px",
                  height: "180px",
                  width: "500px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "1px 0.5px 4px gray",
                }}
              >
                <Link
                  to={`/User_data/${i.User_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>
                    <img
                      src={`${baseurl}${i.pic}`}
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "5%",
                        marginLeft: "2px",
                        // marginTop: "-13px",
                        marginTop: "5px",
                        marginBottom: "10px",
                      }}
                    />
                  </p>

                  <p
                    style={{
                      marginTop: "-180px",
                      marginLeft: "170px",
                      fontSize: "28px",
                      color: "black",
                    }}
                  >
                    {i.firstname}
                  </p>
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "170px",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    Age : {i.age}
                  </p>
                  <p
                    style={{
                      marginTop: "-30px",
                      marginLeft: "255px",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    {i.religion}
                  </p>
                  {/* <p
                    style={{
                      marginTop: "-30px",
                      marginLeft: "325px",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    {i.gender}
                  </p> */}

                  <p
                    style={{
                      marginTop: "-5px",
                      marginLeft: "170px",
                      fontSize: "18px",
                      color: "black"
                    }}
                  >
                    <PiStudentFill style={{ fontSize: "18px" }} /> {i.course}
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginLeft: "170px",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    <MdOutlineWork style={{ fontSize: "18px" }} /> {i.job_title}
                  </p>
                </Link>
                <FaLocationDot
                  style={{
                    marginTop: "-5px",
                    marginLeft: "170px",
                    fontSize: "18px",
                    color: "black",
                  }}
                />
                <p
                  style={{
                    marginTop: "-27px",
                    marginLeft: "190px",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  {i.disttrict}
                </p>
                <p
                  style={{
                    marginTop: "-4px",
                    marginLeft: "170px",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  {i.create_date && !isNaN(new Date(i.create_date)) ? (
                    timeAgo(new Date(i.create_date), {
                      addSuffix: true,
                    }).replace("about ", "")
                  ) : (
                    "Invalid date"
                  )}
                </p>


                {/* {i.user_apply.some((u) => u.suser_id === id) ? (
                  <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
                    <Button
                      onClick={() =>
                        (window.location.href = `tel:${i.contact}`)
                      }
                      style={{ height: "33px", width: "100px" }}
                    >
                      <IoCall style={{ fontSize: "18px" }} />
                    </Button>
                  </p>
                ) : (
                  <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
                    <Button style={{ height: "33px", width: "100px" }}>
                      <IoSend
                        style={{ fontSize: "25px" }}
                        onClick={() => alert_popup(i)}
                      />
                    </Button>
                  </p>
                )} */}

                {i.user_apply?.some((u) => u.suser_id === id) ? (
                  <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
                    <Button
                      onClick={() => (window.location.href = `tel:${i.contact}`)}
                      style={{ height: "33px", width: "100px" }}
                    >
                      <IoCall style={{ fontSize: "18px" }} />
                    </Button>
                  </p>
                ) : (
                  <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
                    <Button style={{ height: "33px", width: "100px" }}>
                      <IoSend
                        style={{ fontSize: "25px" }}
                        onClick={() => alert_popup(i)}
                      />
                    </Button>
                  </p>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Page_Log;
