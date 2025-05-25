
// import React, { useEffect, useState } from "react";
// import { Form, Input, Button, Card, Image, Row, Col } from "antd";
// import {
//   FaIndianRupeeSign, FaFacebook,

//   FaInstagram,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import { UserDataGetwt, UserImage_wt } from "../Api/CoreApi";
// import { useParams } from "react-router-dom";
// import user_image from "../Assets/wedding1.jpg";


// function User_Data_wl() {
//   const baseurl = "http://127.0.0.1:8000/";
//   const id = useParams();
//   const int_id = (String(id.id))

//   const [activeTab, setActiveTab] = useState(null);
//   const [User, setUser] = useState([]);
//   const [obj, setObj] = useState([]);
//   const [image, setImage] = useState([]);
//   const [previewImage, setPreviewImage] = useState(null);

//   console.log(image, "******* User ********");

//   const get_user = async () => {
//     const response = await UserDataGetwt();
//     // console.log(response, "******* User ********");

//     const filter = response.filter((i) => i.User_id === int_id);
//     setUser(filter);
//     setObj(filter[0]);
//   };

//   const get_user_image = async () => {
//     const response = await UserImage_wt();
//     const filter = response.filter((i) => i.user_id === int_id);
//     console.log(response, "***** filter *****");
//     setImage(filter);
//   };
//   useEffect(() => {
//     get_user();
//     get_user_image();
//   }, []);


//   const submit = (value) => {
//     // console.log(value, "**** value ******");
//   };


//   const iconStyle = {
//     fontSize: "25px",
//     cursor: "pointer",
//     transition: "color 0.3s ease",
//   };


//   return (
//     <div style={{ paddingTop: "30px" }}>
//       {User.map((i) => (
//         <Card
//           style={{ marginLeft: "280px", width: "1000px", height: '900px', marginTop: "10px" }}
//         >
//           <Image style={{ height: "280px", width: "940px" }} src={user_image} />

//           {/* <img
//             style={{ height: "250px", width: "100%" }}
//             src="https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg"
//           /> */}

//           {/* <Card style={{ marginTop:'-100px',marginLeft: '30px', width: '300px', display: 'flex',height:'100px',borderRadius:'50px' }}>
//                     <p><img style={{ width: '100px', height: '100px', borderRadius: '50px' }} src='https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg' /></p>
//                     <h2 style={{ marginTop: '30px',marginLeft:'10px' }}>Naincy Garg</h2>
//                 </Card> */}

//           <Card
//             style={{
//               // border: "2px solid",
//               width: "200px",
//               height: "200px",
//               marginLeft: "100px",
//               marginTop: "-80px",
//               borderRadius: "50%",
//               overflow: "hidden", // ensure image stays within the circle
//               zIndex: "998",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               paddingTop: '8px'
//             }}
//           >
//             <img
//               style={{
//                 // border:'2px solid',
//                 width: "190px",
//                 height: "190px",
//                 objectFit: "cover",
//                 borderRadius: "50%",
//               }}
//               src={`${baseurl}${i.pic}`}
//               alt="profile"
//             />
//           </Card>
//           <h2
//             style={{
//               marginTop: "-110px",
//               marginLeft: "340px",
//               fontSize: "25px",
//             }}
//           >
//             {i.username}
//           </h2>
//           {/* <div style={{ display: "flex", marginLeft: "335px" }}>
//             <h4 style={{ marginTop: "10px", fontWeight: "normal", fontSize: "15px" }}>
//               Age: 23, 5ft 7 inch - 172 cm, Software Developer, Raipur, India
//             </h4>
//           </div> */}


//           <div
//             style={{
//               display: "flex",
//               marginLeft: "330px",
//               columnGap: "20px",
//               marginTop: "10px",
//             }}
//           >


//             <p
//               style={{ ...iconStyle, color: "black" }}
//               onMouseEnter={(e) => (e.target.style.color = "#25D366")}
//               onMouseLeave={(e) => (e.target.style.color = "black")}
//             >
//               <FaWhatsapp />
//             </p>
//             <p
//               style={{ ...iconStyle, color: "black" }}
//               onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
//               onMouseLeave={(e) => (e.target.style.color = "black")}
//             >
//               <FaFacebook />
//             </p>
//             <p
//               style={{ ...iconStyle, color: "black" }}
//               onMouseEnter={(e) => (e.target.style.color = "#E4405F")}
//               onMouseLeave={(e) => (e.target.style.color = "black")}
//             >
//               <FaInstagram />
//             </p>
//             <p
//               style={{ ...iconStyle, color: "black" }}
//               onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
//               onMouseLeave={(e) => (e.target.style.color = "black")}
//             >
//               <FaTwitter />
//             </p>


//           </div>

//           {/* {"link":'https://www.google.com'} */}
//           <Card style={{ marginTop: "60px", height: '350px' }}>
//             <div
//               style={{ columnGap: "10px", display: "flex", marginTop: "-25px" }}
//             >
//               <p>
//                 <Button
//                   style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab(null)}
//                 >
//                   Gallary
//                 </Button>
//               </p>

//               <p>
//                 <Button
//                   style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("profile")}
//                 >
//                   Profile
//                 </Button>
//               </p>
//               <p>
//                 <Button
//                   style={{ width: "135px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("family")}
//                 >
//                   Family Details
//                 </Button>
//               </p>
//               <p>
//                 <Button
//                   style={{ width: "135px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("address")}
//                 >
//                   Address
//                 </Button>
//               </p>
//               <p>
//                 <Button
//                   style={{ width: "135px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("contact")}
//                 >
//                   Contact
//                 </Button>
//               </p>
//               <p>
//                 {/* <Button
//                   style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("kundli")}
//                 >
//                   Kundli
//                 </Button> */}
//               </p>
//               <p>
//                 <Button
//                   style={{ width: "110px", height: "40px", fontSize: "18px" }}
//                   onClick={() => setActiveTab("education")}
//                 >
//                   Educations
//                 </Button>
//               </p>
//             </div>
//             {activeTab === null && (
//               <div>
//                 {/* Image Grid */}
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     columnGap: "10px",
//                     rowGap: "10px",
//                     paddingTop: "10px",
//                   }}
//                 >
//                   {image.map((i, index) => (
//                     <div
//                       key={index}
//                       style={{ width: "calc(25% - 8px)", cursor: "pointer" }}
//                       onClick={() => setPreviewImage(`${baseurl}${i.images}`)}
//                     >
//                       <p>
//                         <img
//                           style={{
//                             height: "180px",
//                             width: "100%",
//                             objectFit: "cover",
//                             borderRadius: "8px",
//                           }}
//                           src={`${baseurl}${i.images}`}
//                           alt="Image"
//                         />
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Image Preview Modal */}
//                 {previewImage && (
//                   <div
//                     style={{
//                       position: "fixed",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       background: "rgba(0, 0, 0, 0.8)",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       zIndex: 1000,
//                       flexDirection: "column",
//                     }}
//                   >
//                     {/* Close Button (X) */}
//                     <button
//                       onClick={() => setPreviewImage(null)}
//                       style={{
//                         position: "absolute",
//                         top: "20px",
//                         right: "30px",
//                         fontSize: "24px",
//                         color: "white",
//                         background: "transparent",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       ✖
//                     </button>

//                     {/* Enlarged Preview Image */}
//                     <img
//                       src={previewImage}
//                       alt="Preview"
//                       style={{
//                         width: "min(100vw, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport width
//                         height: "min(100vh, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport height
//                         borderRadius: "5px",
//                         boxShadow: "0 4px 16px rgba(255,255,255,0.3)",
//                         objectFit: "contain",
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* {activeTab === "profile" && (
//               <div>
//                 <Form onFinish={submit} initialValues={obj}>
//                   <Form.Item
//                     label="Name"
//                     name="username"
//                     style={{ width: "500px", height: "5px" }}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="Caste"
//                     name="caste"
//                     style={{ width: "500px", height: "5px" }}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="Age"
//                     name="age"
//                     style={{ width: "500px", height: "5px" }}
//                   >
//                     <Input type="number" style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="Gender"
//                     name="gender"
//                     style={{ width: "500px", height: "5px" }}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Button htmlType="submit" style={{ marginLeft: "30%" }}>
//                     Save
//                   </Button>
//                 </Form>
//               </div>
//             )}
//              */}

//             {activeTab === "profile" && (
//               <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
//                 <div>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Name : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Caste : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Religion : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Date Of Birth : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Gender : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Age : </p>
//                 </div>
//                 <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.username}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.caste}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.religion}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.dob}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.gender}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.age}</p>
//                 </div>
//                 <div style={{ marginLeft: '380px', marginTop: '-207px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Marrige Status : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Job :  </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Job Type : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Salary : </p>

//                 </div>
//                 <div style={{ marginLeft: '580px', marginTop: '-138px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.marrige_status}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.job_title}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.job_type}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.salary}</p>

//                 </div>
//               </div>
//             )}

//             {activeTab === "family" && (
//               <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
//                 <div>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Father : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Mother : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Brothers : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Sisters : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
//                 </div>
//                 <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.father_name}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.mother_name}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.brother}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.brother_marrige}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.sister}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.sister_marrige}</p>
//                 </div>
//               </div>
//             )}
//             {activeTab === "address" && (
//               <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
//                 <div >
//                   <p style={{ color: 'black', fontSize: '20px' }}>City/Town : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Disttrict : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>State : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Country : </p>
//                 </div>
//                 <div style={{ marginLeft: '180px', marginTop: '-137px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.city}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.disttrict}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.state}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.country}</p>
//                 </div>
//               </div>
//             )}
//             {activeTab === "contact" && (
//               <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
//                 <div >
//                   <p style={{ color: 'black', fontSize: '20px' }}>Phone : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Email : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Instagram : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Facebook : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>Twitter : </p>

//                 </div>
//                 <div style={{ marginLeft: '180px', marginTop: '-171px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.contact}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.email}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>----</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>----</p>
//                 </div>
//               </div>
//             )}

//             {/* {activeTab === "kundli" && (
//               <div>
//                 <Form onFinish={submit} initialValues={obj}>
//                   <Form.Item
//                     label="City/Village"
//                     name="city"
//                     style={{ width: "500px", height: "5px" }}
//                     // initialValue={User[0].city}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="disttrict"
//                     name="disttrict"
//                     style={{ width: "500px", height: "5px" }}
//                     // initialValue={User[0].disttrict}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="state"
//                     name="state"
//                     style={{ width: "500px", height: "5px" }}
//                     // initialValue={User[0].state}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="country"
//                     name="country"
//                     style={{ width: "500px", height: "5px" }}
//                     // initialValue={User[0].country}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Form.Item
//                     label="full_address"
//                     name="full_address"
//                     style={{ width: "500px", height: "5px" }}
//                     // initialValue={User[0].full_address}
//                   >
//                     <Input style={{}} />
//                   </Form.Item>
//                   <Button htmlType="submit" style={{ marginLeft: "30%" }}>
//                     Save
//                   </Button>
//                 </Form>
//               </div>
//             )} */}


//             {activeTab === "education" && (
//               <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
//                 <div >
//                   <p style={{ color: 'black', fontSize: '20px' }}>Course : </p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>University : </p>
//                 </div>
//                 <div style={{ marginLeft: '180px', marginTop: '-67px' }}>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.course}</p>
//                   <p style={{ color: 'black', fontSize: '20px' }}>{i.university}</p>

//                 </div>
//               </div>
//             )}
//           </Card>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default User_Data_wl;



// // import React from 'react'

// // function User_Data_wl() {
// //   return (
// //     <div>User_Data_wl</div>
// //   )
// // }

// // export default User_Data_wl


// // import React, { useEffect, useState } from "react";
// // import { Card, message } from "antd";
// // import { FaIndianRupeeSign, FaWhatsapp } from "react-icons/fa6";
// // import { FaLocationDot } from "react-icons/fa6";
// // import { IoSend } from "react-icons/io5";
// // import { IoCall } from "react-icons/io5";
// // import { formatDistanceToNow, parse } from "date-fns";
// // import { Button } from "antd";
// // import img from "../Assets/wedding1.jpg";
// // import { Link } from "react-router-dom";
// // import {
// //   UserGet,
// //   UserUpdate,
// //   User_Array_Update,
// //   AdminGet,
// //   AdminUpdate,
// //   StaffGet,
// //   StaffUpdate,
// //   DeveloperGet,
// //   DeveloperUpdate,
// //   PostChargesGet,
// //   TotalRevenueGet,
// //   TotalRevenueUpdate,
// // } from "../Api/CoreApi";
// // import { formatDistanceToNow as timeAgo } from "date-fns";
// // import "../Home_Page/Home_Page.css";
// // import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// // import { TfiEmail } from "react-icons/tfi";

// // function User_data() {
// //   const baseurl = "http://127.0.0.1:8000/";
// //   const [user, setUser] = useState([]); // current user
// //   const [data, setData] = useState([]); // filterd user
// //   const [admin, setAdmin] = useState([]); // admin
// //   const [staff_Json, setStaff_Json] = useState([]); // staff
// //   const [developer, setDeveloper] = useState([]); // developer
// //   const [charges, setCharges] = useState([]);
// //   const [revenue, setRevenue] = useState([]);
// //   // console.log(user,'**** user ******')
// //   // console.log(data,'**** data ******')
// //   // console.log(admin,'**** admin ******')
// //   // console.log(staff_Json,'**** staff_Json ******')
// //   // console.log(developer,'**** developer ******')
// //   // console.log(charges,'**** charges ******')

// //   const userid = localStorage.getItem("User");
// //   const id = parseInt(userid);
// //   // console.log(id,'****** id *******')

// //   const user_get = async () => {
// //     // user
// //     const response = await UserGet();
// //     const current_user = response.filter((i) => i.id === id);
// //     // console.log(response,'**** current_user ******')
// //     setUser(current_user);

// //     const user_geder = current_user.map((i) => i.gender);
// //     if (user_geder == "Male") {
// //       const filter_female = response.filter((i) => i.gender === "Female");
// //       setData(filter_female);
// //     } else {
// //       const filter_male = response.filter((i) => i.gender === "Male");
// //       setData(filter_male);
// //     }
// //   };

// //   const admin_get = async () => {
// //     // admin
// //     const response = await AdminGet();
// //     setAdmin(response);
// //   };

// //   const staff_get = async () => {
// //     // staff
// //     const response = await StaffGet();
// //     setStaff_Json(response);
// //   };

// //   const developer_get = async () => {
// //     // developer
// //     const response = await DeveloperGet();
// //     setDeveloper(response);
// //   };

// //   const PostCharges_get = async () => {
// //     // developer
// //     const response = await PostChargesGet();
// //     setCharges(response);
// //   };

// //   const TotalRevenueGet_get = async () => {
// //     // Developer
// //     const today = new Date();
// //     const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
// //     const year = today.getFullYear();
// //     const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)
// //     const response = await TotalRevenueGet();
// //     const current_revenue = response.filter((i) => i.month === formattedDate);
// //     setRevenue(current_revenue);
// //   };

// //   useEffect(() => {
// //     user_get();
// //     admin_get();
// //     staff_get();
// //     developer_get();
// //     PostCharges_get();
// //     TotalRevenueGet_get();
// //   }, []);

// //   const alert_popup = (i) => {
// //     if (window.confirm("Are you sure?")) {
// //       distribute(i);
// //     }
// //   };

// //   const distribute = async (value) => {
// //     // console.log(value,'******* value ********')
// //     if (user[0].balance > 99) {
// //       const amount = charges.map((i) => i.post_charges);
// //       // const amount = 100
// //       const commision = charges.map((i) => i.staff_commission);
// //       // const commision = 15
// //       // const filter_user_area = staff_Json.filter(
// //       //   (i) => i.disttrict === value.disttrict
// //       // );
// //       // console.log(filter_user_area, '***** filter_user_area ******')

// //       const user_amount = value.balance;
// //       const reduce_balance = parseInt(user_amount) - parseInt(amount); // send user API
// //       const fix_user_amount = { balance: reduce_balance };
// //       const response1 = await UserUpdate(id, fix_user_amount);
// //       console.log(response1, "****** user_reduce_balance ******");

// //       const plateform_charge = (amount * 2) / 100; // plateform charge $2 = $98
// //       const after_pateform_charge = amount - plateform_charge;

// //       const staff_Commision =
// //         (parseInt(after_pateform_charge) * parseInt(commision)) / 100; // send Staff 98 ka 15% = 14.7 == 83.3
// //       const filter_staff = staff_Json.filter(
// //         (i) => i.disttrict === value.disttrict
// //       );
// //       const staff_id = filter_staff.map((i) => i.id);
// //       const staff_id_int = parseInt(staff_id);
// //       const staff_balance = filter_staff.map((i) => i.balance);
// //       const add = parseInt(staff_Commision) + parseInt(staff_balance); // send Staff API 14
// //       const fix_staff_amount = { balance: add };

// //       const response2 = await StaffUpdate(staff_id_int, fix_staff_amount);
// //       console.log(response2, "***** response2 ******");

// //       const after_staff_Commision =
// //         parseInt(after_pateform_charge) - parseInt(staff_Commision); // 83.3

// //       const dev_commision = (after_staff_Commision * 15) / 100; // send developer  12
// //       const developer_id = developer.map((i) => i.id);
// //       const developer_id_int = parseInt(developer_id);

// //       const developer_balance = developer.map((i) => i.balance);
// //       const add_developer_balance =
// //         parseInt(developer_balance) + parseInt(dev_commision);
// //       const fix_developer_amount = { balance: add_developer_balance };

// //       const response3 = await DeveloperUpdate(
// //         developer_id_int,
// //         fix_developer_amount
// //       );
// //       console.log(response3, "**** add_developer_balance ***");

// //       const admin_commision = after_staff_Commision - dev_commision; // send admin 71
// //       const admin_id = admin.map((i) => i.id);
// //       const admin_id_int = parseInt(admin_id);
// //       const Admin_balance = admin.map((i) => i.balance);
// //       const add_Admin_balance =
// //         parseInt(Admin_balance) + parseInt(admin_commision);
// //       const fix_admin_amount = { balance: add_Admin_balance };

// //       const response4 = await AdminUpdate(admin_id_int, fix_admin_amount);
// //       console.log(response4, "***** add_Admin_balance *****");

// //       const data_id = value.id;
// //       const ammount = value.balance;
// //       const today = new Date().toLocaleDateString();
// //       value.user_apply.push({ user: id, balance: ammount, date: today });
// //       delete value.pic;

// //       const response = await User_Array_Update(data_id, value);
// //       setData(response);

// //       const revenue_month = revenue.map((i) => i.month);
// //       const sting_month = revenue_month[0];
// //       const revenue_id = revenue.map((i) => i.id);
// //       const int_revenue_id = parseInt(revenue_id);
// //       const revenue_revenue = revenue.map((i) => i.revenue);
// //       const revenue_amount = parseInt(revenue_revenue);
// //       const total_revenue = parseInt(revenue_amount) + parseInt(ammount);

// //       const rev = revenue[0];
// //       rev.user.push({
// //         suser_id: id,
// //         ruser_id: data_id,
// //         amount: ammount,
// //         date: today,
// //       });
// //       setRevenue(rev);

// //       const revenue1 = { ...rev, revenue: total_revenue };
// //       const response5 = await TotalRevenueUpdate(int_revenue_id, revenue1);
// //       console.log(response5, "****** response4 *******");
// //       setRevenue(response5);
// //     } else {
// //       alert("need to add balance");
// //     }
// //   };

// //   return (
// //     // <div style={{ paddingTop: "20px" }}>
// //     //   <div
// //     //     style={{
// //     //       // border: "2px solid",
// //     //       width: "1600px",
// //     //       // height: "600px",
// //     //       marginLeft: "120px",
// //     //       display: "flex",
// //     //       columnGap: "20px",
// //     //     }}
// //     //   >
// //     //     {data.map((i) => (
// //     //       <div
// //     //         style={{
// //     //           paddingTop: "1px",
// //     //           paddingLeft: "7px",
// //     //           height: "170px",
// //     //           width: "500px",
// //     //           backgroundColor: "white",
// //     //           borderRadius: "10px",
// //     //           boxShadow: "1px 0.5px 4px gray",
// //     //         }}
// //     //       >
// //     //         <Link
// //     //           to={`/${i.id}`}
// //     //           style={{ textDecoration: "none", color: "inherit" }}
// //     //         >
// //     //           <p>
// //     //             <img
// //     //               src={`${baseurl}${i.pic}`}
// //     //               style={{
// //     //                 width: "150px",
// //     //                 height: "150px",
// //     //                 borderRadius: "5%",
// //     //                 marginLeft: "2px",
// //     //                 // marginTop: "-13px",
// //     //                 marginTop: "5px",
// //     //                 marginBottom: "10px",
// //     //               }}
// //     //             />
// //     //           </p>

// //     //           <p
// //     //             style={{
// //     //               marginTop: "-180px",
// //     //               marginLeft: "170px",
// //     //               fontSize: "28px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             {i.username}
// //     //           </p>
// //     //           <p
// //     //             style={{
// //     //               marginTop: "-10px",
// //     //               marginLeft: "170px",
// //     //               fontSize: "18px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             Age : {i.age}
// //     //           </p>
// //     //           <p
// //     //             style={{
// //     //               marginTop: "-30px",
// //     //               marginLeft: "255px",
// //     //               fontSize: "18px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             {i.religion}
// //     //           </p>
// //     //           <p
// //     //             style={{
// //     //               marginTop: "-30px",
// //     //               marginLeft: "325px",
// //     //               fontSize: "18px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             {i.gender}
// //     //           </p>
// //     //           <p
// //     //             style={{
// //     //               marginTop: "-5px",
// //     //               marginLeft: "170px",
// //     //               fontSize: "18px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             Education : {i.course}
// //     //           </p>
// //     //           <p
// //     //             style={{
// //     //               marginTop: "-5px",
// //     //               marginLeft: "170px",
// //     //               fontSize: "18px",
// //     //               color: "black",
// //     //             }}
// //     //           >
// //     //             Job : {i.job_title}
// //     //           </p>
// //     //         </Link>
// //     //         <FaLocationDot
// //     //           style={{
// //     //             marginTop: "-5px",
// //     //             marginLeft: "170px",
// //     //             fontSize: "18px",
// //     //             color: "black",
// //     //           }}
// //     //         />
// //     //         <p
// //     //           style={{
// //     //             marginTop: "-27px",
// //     //             marginLeft: "190px",
// //     //             fontSize: "18px",
// //     //             color: "black",
// //     //           }}
// //     //         >
// //     //           {i.disttrict}
// //     //         </p>
// //     //         <p
// //     //           style={{
// //     //             marginTop: "-4px",
// //     //             marginLeft: "170px",
// //     //             fontSize: "18px",
// //     //             color: "black",
// //     //           }}
// //     //         >
// //     //           {" "}
// //     //           {timeAgo(new Date(i.create_date), { addSuffix: true }).replace(
// //     //             "about ",
// //     //             ""
// //     //           )}
// //     //         </p>

// //     //         {i.user_apply.some((u) => u.user === 6) ? (
// //     //           <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
// //     //             <Button
// //     //               onClick={() => (window.location.href = `tel:${i.contact}`)}
// //     //               style={{ height: "33px", width: "100px" }}
// //     //             >
// //     //               <IoCall style={{ fontSize: "18px" }} />
// //     //             </Button>
// //     //           </p>
// //     //         ) : (
// //     //           <p style={{ marginTop: "-40px", marginLeft: "385px" }}>
// //     //             <Button style={{ height: "33px", width: "100px" }}>
// //     //               <IoSend
// //     //                 style={{ fontSize: "25px" }}
// //     //                 onClick={() => alert_popup(i)}
// //     //               />
// //     //             </Button>
// //     //           </p>
// //     //         )}
// //     //       </div>
// //     //     ))}
// //     //   </div>
// //     // </div>
// //     // <>
// //     //   <div style={{ marginTop: "20px" }}>
// //     //     <div style={{ textAlign: "center" }}>
// //     //       <img
// //     //         src={img}
// //     //         alt=""
// //     //         style={{ height: "400px", width: "700px", textAlign: "center" }}
// //     //       />
// //     //     </div>
// //     //     <div>
// //     //       <p style={{ textAlign: "center", fontSize: "25px" }}>
// //     //         Age 5ft 8 inch 142 cm, Doctor{" "}
// //     //       </p>
// //     //       <p style={{ textAlign: "center", fontSize: "25px" }}>India</p>
// //     //     </div>

// //     //     <div style={{ textAlign: "center",fontSize:"30px",columnGap:"100px" }}>
// //     //       <IoCall></IoCall>
// //     //       <TfiEmail></TfiEmail>
// //     //       <FaWhatsapp></FaWhatsapp>
// //     //     </div>

// //     //     <div style={{textAlign:"center"}}>
// //     //       <h3>Personal Details </h3>
// //     //        <p>Name : Sumit kumar</p>
// //     //        <p>Gendar : Male</p>

// //     //        <p>Address : Raipur </p>
// //     //        <p>Qulificatioin : 12th </p>

// //     //     </div>

// //     //     <div style={{textAlign:"center"}}>
// //     //       <h3>Religiours Details </h3>
// //     //        <p>Name : Sumi</p>
// //     //        <p>Gendar : Male</p>

// //     //        <p>Address : Raipur </p>

// //     //     </div>

// //     //     <div style={{textAlign:"center"}}>
// //     //       <h3>Career Details </h3>
// //     //        <p>Name : Sumi</p>
// //     //        <p>Gendar : Male</p>

// //     //        <p>Address : Raipur </p>

// //     //     </div>

// //     //     <div style={{textAlign:"center"}}>
// //     //       <h3>About </h3>
// //     //        <p> my name is sunita</p>

// //     //     </div>

// //     //     <div style={{textAlign:"center"}}>
// //     //       <h3>Family Details </h3>
// //     //        <p>Name : Sumi</p>
// //     //        <p>Gendar : Male</p>

// //     //        <p>Address : Raipur </p>

// //     //     </div>
// //     //   </div>
// //     // </>

// //     <div>
// //       <div style={{border:'2px solid', width:'1500px',height:'600px',marginLeft:'10%',marginTop:'20px'}}>
// //         <img />
// //       </div>
// //     </div>
// //   );
// // }

// // export default User_data;

// import React from "react";
// import {
//   UserGet,
//   UserUpdate,
//   User_Array_Update,
//   UserImagesGet,
//   AdminGet,
//   AdminUpdate,
//   StaffGet,
//   StaffUpdate,
//   DeveloperGet,
//   DeveloperUpdate,
//   PostChargesGet,
//   TotalRevenueGet,
//   TotalRevenueUpdate,
// } from "../Api/CoreApi";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// function User_data() {
//   const id = useParams();
//   const baseurl = "http://127.0.0.1:8000/";
//   const int = parseInt(id.id);
//   const [data, setData] = useState([]);
//   const [image, setImage] = useState([]);

//   console.log(image, "***** data ******");
//   const user_get = async () => {
//     const response = await UserGet();
//     const filter = response.filter((i) => i.id === int);
//     setData(filter);
//     const image_response = await UserImagesGet();
//     const image_filter = image_response.filter((i) => i.user_id === int);
//     setImage(image_filter);
//   };
//   useEffect(() => {
//     user_get();
//   }, []);
//   return (
//     <div style={{ border: "2px solid black", width: "80%", marginLeft: "10%" }}>
//       <div>
//         <div
//           style={{
//             border: "2px solid",
//             width: "1350px",
//             height: "600px",
//             marginLeft: "50px",
//             marginTop: "20px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "10px",
//           }}
//         >
//           {image.length > 2 ? (
//             <Swiper
//               navigation
//               modules={[Navigation]}
//               spaceBetween={10}
//               slidesPerView={1}
//             >
//               {image.map((i, index) => (
//                 <SwiperSlide key={index}>
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <img
//                       style={{
//                         width: "650px",
//                         height: "550px",
//                         display: "block",
//                         marginLeft: "18px",
//                         borderRadius: "10px",
//                       }}
//                       src={`${baseurl}${i.images}`}
//                       alt={`Slide ${index}`}
//                     />
//                     {image[index + 1] && ( // Check if there's a second image to display
//                       <img
//                         style={{
//                           width: "650px",
//                           height: "550px",
//                           display: "block",
//                         }}
//                         src={`${baseurl}${image[index + 1].images}`}
//                         alt={`Slide ${index + 1}`}
//                       />
//                     )}
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           ) : (
//             <div style={{ display: "flex", gap: "10px" }}>
//               {image.map((i, index) => (
//                 <img
//                   key={index}
//                   style={{ width: "650px", height: "550px", display: "block" }}
//                   src={`${baseurl}${i.images}`}
//                   alt={`Image ${index}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//         <div style={{ marginLeft: "110px" }}>
//           <p>hello</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User_data;




////////////////////////////////////////////////////////////


import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { formatDistanceToNow, parse } from "date-fns";
import { Link } from "react-router-dom";
import {
  UserDataGetwt,
  UserImage_wt,
} from "../Api/CoreApi";
// import { UserDataGetwt, UserImage_wt } from "../Api/CoreApi";

import { formatDistanceToNow as timeAgo } from "date-fns";
// import "../Home_Page/Home_Page.css";

import React, { useEffect, useState } from "react";
import { Card, Image, message, Button } from "antd";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import user_image from "../Assets/wedding1.jpg";

function User_data() {
  const id_param = useParams();
  const int_id = (String(id_param.id))

  const id = localStorage.getItem("user_id");
  const baseurl = "http://127.0.0.1:8000/";

  const [data, setData] = useState([]); // male/Female filterd user
  console.log(data, '******** data ********')

  const user_get = async () => {
    const response = await UserDataGetwt();
    const filter = response.filter((i) => i.User_id === int_id);
    setData(filter)

    const response_img = await UserImage_wt();
    const filter_img = response_img.filter((i) => i.User_id === int_id);
    setImage(filter_img);

  };

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = today.getFullYear();
  // const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)


  const [activeTab, setActiveTab] = useState(null);
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    user_get();
  }, []);


  const id_navigate = (value) => {
    console.log(value, '********* value *********')
    localStorage.setItem('id_navigate', value)
  }
  return (
    <div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
        </Link>

        {id ? (
          <Link to='/User_panel'>
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
      <div style={{ paddingTop: "50px" }}>

        {data.map((i) => (
          <Card
            style={{ marginLeft: "280px", width: "1000px", height: '900px', marginTop: "10px" }}
          >
            <Image style={{ height: "280px", width: "940px" }} src={user_image} />

            {/* <img
            style={{ height: "250px", width: "100%" }}
            src="https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg"
          /> */}

            {/* <Card style={{ marginTop:'-100px',marginLeft: '30px', width: '300px', display: 'flex',height:'100px',borderRadius:'50px' }}>
                    <p><img style={{ width: '100px', height: '100px', borderRadius: '50px' }} src='https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg' /></p>
                    <h2 style={{ marginTop: '30px',marginLeft:'10px' }}>Naincy Garg</h2>
                </Card> */}

            <Card
              style={{
                // border: "2px solid",
                width: "200px",
                height: "200px",
                marginLeft: "100px",
                marginTop: "-80px",
                borderRadius: "50%",
                overflow: "hidden", // ensure image stays within the circle
                zIndex: "998",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: '8px'
              }}
            >
              <img
                style={{
                  // border:'2px solid',
                  width: "190px",
                  height: "190px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={`${baseurl}${i.pic}`}
                alt="profile"
              />
            </Card>
            <h2
              style={{
                marginTop: "-110px",
                marginLeft: "340px",
                fontSize: "25px",
              }}
            >
              {i.username}
            </h2>
            {/* <div style={{ display: "flex", marginLeft: "335px" }}>
            <h4 style={{ marginTop: "10px", fontWeight: "normal", fontSize: "15px" }}>
              Age: 23, 5ft 7 inch - 172 cm, Software Developer, Raipur, India
            </h4>
          </div> */}


            <div
              style={{
                display: "flex",
                marginLeft: "330px",
                columnGap: "20px",
                marginTop: "10px",
              }}
            >


              {/* <p
              style={{ ...iconStyle, color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#25D366")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              <FaWhatsapp />
            </p>
            <p
              style={{ ...iconStyle, color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              <FaFacebook />
            </p>
            <p
              style={{ ...iconStyle, color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#E4405F")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              <FaInstagram />
            </p>
            <p
              style={{ ...iconStyle, color: "black" }}
              onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              <FaTwitter />
            </p> */}

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "28px",
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#25D366")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                <FaWhatsapp />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "28px",
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                <FaFacebook />
              </a>

              {/* Instagram (No direct share, just profile or post link) */}
              <a
                href={`${i.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "28px",
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#E4405F")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                <FaInstagram />
              </a>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "28px",
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                <FaTwitter />
              </a>


            </div>

            {/* {i.user_apply?.some((u) => u.suser_id === id) ? (
            <p style={{ marginTop: "-40px", marginLeft: "585px" }}>
              <Button>
       
                Login
              </Button>
            </p>
          ) : ( */}
            <p style={{ marginTop: "-40px", marginLeft: "585px" }}>
              <Link to='/User_Login'><Button style={{ height: "33px", width: "100px" }} onClick={() => id_navigate(i.User_id)}>
                Login
              </Button></Link>
            </p>
            {/* )} */}



            {/* {"link":'https://www.google.com'} */}
            <Card style={{ marginTop: "60px", height: '350px' }}>
              <div
                style={{ columnGap: "10px", display: "flex", marginTop: "-25px" }}
              >
                <p>
                  <Button
                    style={{ width: "100px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab(null)}
                  >
                    Gallary
                  </Button>
                </p>

                <p>
                  <Button
                    style={{ width: "100px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab("profile")}
                  >
                    Profile
                  </Button>
                </p>
                <p>
                  <Button
                    style={{ width: "135px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab("family")}
                  >
                    Family Details
                  </Button>
                </p>
                <p>
                  <Button
                    style={{ width: "135px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab("address")}
                  >
                    Address
                  </Button>
                </p>
                <p>
                  <Button
                    style={{ width: "135px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact
                  </Button>
                </p>
                <p>
                  {/* <Button
                  style={{ width: "100px", height: "40px", fontSize: "18px" }}
                  onClick={() => setActiveTab("kundli")}
                >
                  Kundli
                </Button> */}
                </p>
                <p>
                  <Button
                    style={{ width: "110px", height: "40px", fontSize: "18px" }}
                    onClick={() => setActiveTab("education")}
                  >
                    Educations
                  </Button>
                </p>
              </div>
              {activeTab === null && (
                <div>
                  {/* Image Grid */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      columnGap: "10px",
                      rowGap: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    {image.map((i, index) => (
                      <div
                        key={index}
                        style={{ width: "calc(25% - 8px)", cursor: "pointer" }}
                        onClick={() => setPreviewImage(`${baseurl}${i.images}`)}
                      >
                        <p>
                          <img
                            style={{
                              height: "180px",
                              width: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            src={`${baseurl}${i.images}`}
                            alt="Image"
                          />
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Image Preview Modal */}
                  {previewImage && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        flexDirection: "column",
                      }}
                    >
                      {/* Close Button (X) */}
                      <button
                        onClick={() => setPreviewImage(null)}
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "30px",
                          fontSize: "24px",
                          color: "white",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        ✖
                      </button>

                      {/* Enlarged Preview Image */}
                      <img
                        src={previewImage}
                        alt="Preview"
                        style={{
                          width: "min(100vw, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport width
                          height: "min(100vh, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport height
                          borderRadius: "5px",
                          boxShadow: "0 4px 16px rgba(255,255,255,0.3)",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* {activeTab === "profile" && (
              <div>
                <Form onFinish={submit} initialValues={obj}>
                  <Form.Item
                    label="Name"
                    name="username"
                    style={{ width: "500px", height: "5px" }}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="Caste"
                    name="caste"
                    style={{ width: "500px", height: "5px" }}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name="age"
                    style={{ width: "500px", height: "5px" }}
                  >
                    <Input type="number" style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    name="gender"
                    style={{ width: "500px", height: "5px" }}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Button htmlType="submit" style={{ marginLeft: "30%" }}>
                    Save
                  </Button>
                </Form>
              </div>
            )}
             */}

              {activeTab === "profile" && (
                <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
                  <div>
                    <p style={{ color: 'black', fontSize: '20px' }}>Name : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Caste : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Religion : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Date Of Birth : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Gender : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Age : </p>
                  </div>
                  <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.username}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.caste}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.religion}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.dob}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.gender}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.age}</p>
                  </div>
                  <div style={{ marginLeft: '380px', marginTop: '-207px' }}>
                    <p style={{ color: 'black', fontSize: '20px' }}>Marrige Status : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Job :  </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Job Type : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Salary : </p>

                  </div>
                  <div style={{ marginLeft: '580px', marginTop: '-138px' }}>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.marrige_status}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.job_title}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.job_type}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.salary}</p>

                  </div>
                </div>
              )}

              {activeTab === "family" && (
                <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
                  <div>
                    <p style={{ color: 'black', fontSize: '20px' }}>Father : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Mother : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Brothers : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Sisters : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
                  </div>
                  <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.father_name}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.mother_name}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.brother}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.brother_marrige}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.sister}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.sister_marrige}</p>
                  </div>
                </div>
              )}
              {activeTab === "address" && (
                <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
                  {i.user_apply.some((u) => u.suser_id === id) ? (
                    <>
                      <div>
                        <p style={{ color: 'black', fontSize: '20px' }}>City/Town : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>District : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>State : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>Country : </p>
                      </div>
                      <div style={{ marginLeft: '180px', marginTop: '-137px' }}>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.city}</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.disttrict}</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.state}</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.country}</p>
                      </div>
                    </>
                  ) : (
                    <p>Need to Login</p>
                  )}
                </div>
              )}

              {activeTab === "contact" && (
                <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
                  {i.user_apply.some((u) => u.suser_id === id) ? (
                    <>
                      <div >
                        <p style={{ color: 'black', fontSize: '20px' }}>Phone : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>Email : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>Instagram : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>Facebook : </p>
                        <p style={{ color: 'black', fontSize: '20px' }}>Twitter : </p>

                      </div>
                      <div style={{ marginLeft: '180px', marginTop: '-171px' }}>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.contact}</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>{i.email}</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>----</p>
                        <p style={{ color: 'black', fontSize: '20px' }}>----</p>
                      </div>
                    </>
                  ) : (
                    <p>Need to Login</p>
                  )}
                </div>
              )}

              {/* {activeTab === "kundli" && (
              <div>
                <Form onFinish={submit} initialValues={obj}>
                  <Form.Item
                    label="City/Village"
                    name="city"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].city}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="disttrict"
                    name="disttrict"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].disttrict}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="state"
                    name="state"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].state}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="country"
                    name="country"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].country}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item
                    label="full_address"
                    name="full_address"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].full_address}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <Button htmlType="submit" style={{ marginLeft: "30%" }}>
                    Save
                  </Button>
                </Form>
              </div>
            )} */}


              {activeTab === "education" && (
                <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
                  <div >
                    <p style={{ color: 'black', fontSize: '20px' }}>Course : </p>
                    <p style={{ color: 'black', fontSize: '20px' }}>University : </p>
                  </div>
                  <div style={{ marginLeft: '180px', marginTop: '-67px' }}>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.course}</p>
                    <p style={{ color: 'black', fontSize: '20px' }}>{i.university}</p>

                  </div>
                </div>
              )}
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default User_data;



// {i.user_apply.some((u) => u.suser_id === id) ? (
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