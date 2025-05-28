// import React, { useState } from "react";
// import {
//   Form,
//   Card,
//   Button,
//   Input,
//   Steps,
//   Upload,
//   Select,
//   DatePicker,
//   message,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { Link, useParams } from "react-router-dom";
// import { User_send_otp, User_verify_otp, UserRegPost,UserDataUpdatewl } from "../../Api/CoreApi";
// import { Remove } from "@mui/icons-material";

// const { Option } = Select;

// function User_Reg() {
//   const user_refer = useParams()
//   const refer = user_refer.id

//   const [data, setData] = useState([]);
//   console.log(refer, "******* user_id *******");
//   const [otp, setOtp] = useState(1);
//   const [phoneSent, setPhoneSent] = useState(false);
//   const [aadharSent, setAadharSent] = useState(false);
//   const [form] = Form.useForm(); // Form instance for inline updates

//   const send_otp = async (values) => {
//     setData((prev) => ({ ...prev, ...values }));
//     if (Object.keys(values).length === 1) {
//       const response = await User_send_otp(values);
//       if (response.message === "OTP sent successfully") {
//         // console.log(values, "***send*****");
//         // console.log(response, "***revive*****");
//         setPhoneSent(true);
//       } else {
//         message.error("OTP send failed");
//       }
//     } else {
//       const response = await User_verify_otp(values);
//       console.log(values, "***revive*****");
//       console.log(response, "***revive*****");
//       if (response.message === "OTP verified successfully") {
//         // console.log(values, "***send*****");
//         // console.log(response, "***revive*****");
//         setOtp(otp + 1);
//       } else {
//         message.error("OTP send failed");
//       }
//     }

//     setOtp(otp + 1);
//   };

//   const send_aadhar = (values) => {
//     if (Object.keys(values).length === 1) {
//       console.log(values, "***send*****");
//       setData((prev) => ({ ...prev, ...values }));
//       setAadharSent(true);
//     } else {
//       console.log(values, "***revive*****");
//       setOtp(otp + 1);
//     }
//   };

//   // const profile_details = async(values) => {
//   //   const response = await UserRegPost(values);

//   //   console.log(values, "***send*****");
//   //   console.log(response, "***send*****");

//   //   setOtp(otp + 1);
//   // };

//   const [file, setFile] = useState(null); // Store uploaded file

//   const profile_details = async (values) => {
//     const formData = new FormData();
//     formData.append("pic", file); // Append image file
//     formData.append("username", values.username);
//     formData.append("lastname", values.lastname);
//     formData.append("password", values.password);
//     formData.append("caste", values.caste);
//     formData.append("dob", values.dob);
//     formData.append("gender", values.gender);
//     formData.append("email", values.email);

//     console.log(values, "****** formData ******");
//     setData((prev) => ({ ...prev, ...values }));
//     setOtp(otp + 1);

//     // const response = await UserRegPost(formData);

//     // if (response) {
//     //   message.success("Profile details submitted!");
//     //   setOtp(otp + 1);
//     // } else {
//     //   message.error("Submission failed!");
//     // }
//   };

//   // const address_details = async(values) => {
//   //   setData((prev) => ({ ...prev, ...values }));
//   //   console.log(values, "***send*****");
//   //   const response = await UserRegPost(data);
//   //   console.log(response,'******* response **********')

//   //   // setOtp(otp + 1);
//   // };

//   const address_details = async (values) => {
//     // ✅ Immediately merge new values with existing data
//     const updatedData = { ...data, ...values };
//     setData(updatedData); // Update state asynchronously

//     // ✅ Use FormData for API submission
//     const formData = new FormData();

//     if (!file) {
//       message.error("Please upload a valid file.");
//       return;
//     }

//     formData.append("pic", file); // ✅ Append the actual file object
//     formData.append("username", updatedData.username);
//     formData.append("lastname", updatedData.lastname);
//     formData.append("password", updatedData.password);
//     formData.append("caste", updatedData.caste);
//     formData.append("dob", updatedData.dob);
//     formData.append("gender", updatedData.gender);
//     formData.append("email", updatedData.email);
//     formData.append("phone", updatedData.phone);
//     formData.append("aadhar", updatedData.aadhar);
//     formData.append("address", updatedData.address || ""); // ✅ Handle undefined case
//     // formData.append("ref", updatedData.refer || "")

//     // console.log([...formData.entries()], "****** FormData Content ******");
//     try {
//       const response = await UserRegPost(formData);
//       console.log(response, "******* response **********");

//       if (response.length === 1) {
//         message.success("Address details submitted!");
//         // setOtp(otp + 1);
//         const data_id = response.id
//         const data_value = {"ref":refer}
//         const response = await UserDataUpdatewl(data_id,data_value);

//       } else {
//         message.error("Submission failed!");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Something went wrong!");
//     }
//   };

//   const pre = () => setOtp(otp - 1);

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "url('https://img.freepik.com/free-vector/abstract-beautiful-mandala-design-background_1055-2471.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: "200px",
//       }}
//     >
//       <div
//         style={{
//           width: "600px",
//           padding: "30px",
//           marginTop: "-350px",
//           borderRadius: "15px",
//           background: "rgba(255, 255, 255, 0.85)",
//           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <h2>Signup Form </h2>
//           <br />
//         </div>
//         <Steps
//           current={otp - 1}
//           size="small"
//           style={{ marginBottom: "30px" }}
//           items={[
//             { title: "Email Verification" },
//             // { title: "Aadhar Verification" },
//             { title: "Personal Details" },
//             // { title: "Address" },
//           ]}
//         />

//         <Card
//           style={{
//             background: "rgba(255, 255, 255, 0.9)",
//             borderRadius: "10px",
//             boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//             textAlign: "center",
//           }}
//         >
//           {otp === 1 && (
//             <Form form={form} onFinish={send_otp} style={{ width: "100%" }}>
//               <Form.Item name="email" label="Email">
//                 <Input disabled={phoneSent} />
//               </Form.Item>
//               {!phoneSent ? (
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   // onClick={handleSendPhone}
//                 >
//                   Send OTP
//                 </Button>
//               ) : (
//                 <>
//                   <Form.Item name="otp" label="Enter OTP">
//                     <Input />
//                   </Form.Item>
//                   <Button type="primary" htmlType="submit">
//                     Verify & Next
//                   </Button>
//                 </>
//               )}
//             </Form>
//           )}

//           {/* {otp === 2 && (
//             <Form form={form} onFinish={send_aadhar} style={{ width: "100%" }}>
//               <Form.Item name="aadhar" label="Aadhar Number">
//                 <Input disabled={aadharSent} />
//               </Form.Item>
//               {!aadharSent ? (
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   // onClick={handleSendAadhar}
//                 >
//                   Send OTP
//                 </Button>
//               ) : (
//                 <>
//                   <Form.Item name="aadharOtp" label="Enter OTP">
//                     <Input />
//                   </Form.Item>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <Button onClick={pre}>Back</Button>
//                     <Button type="primary" htmlType="submit">
//                       Verify & Next
//                     </Button>
//                   </div>
//                 </>
//               )}
//             </Form>
//           )} */}

//           {otp === 2 && (
//             <Form
//               form={form}
//               onFinish={profile_details}
//               style={{ width: "100%" }}
//             >
//               {/* Profile Picture Upload */}
//               {/* <Form.Item name="pic" label="Profile Picture">
//                 <Upload
//                   beforeUpload={(file) => {
//                     form.setFieldsValue({ pic: file.name }); // ✅ Inline Update with File Name
//                     return false;
//                   }}
//                   showUploadList={false}
//                 >
//                   <Button icon={<UploadOutlined />}>Upload</Button>
//                 </Upload>
//                 <Input style={{ marginTop: "5px" }} disabled />
//               </Form.Item> */}

//               <Form.Item name="pic" label="Profile Picture">
//                 <Upload
//                   beforeUpload={(file) => {
//                     form.setFieldsValue({ pic: file.name }); // Show filename in input
//                     setFile(file); // Store file object in state
//                     return false; // Prevent default upload behavior
//                   }}
//                   showUploadList={false}
//                 >
//                   <Button icon={<UploadOutlined />}>Upload</Button>
//                 </Upload>
//                 {/* <Input style={{ marginTop: "5px" }} disabled /> */}
//               </Form.Item>

//               <Form.Item name="username" label="First Name">
//                 <Input />
//               </Form.Item>
//               <Form.Item name="lastname" label="Last Name">
//                 <Input />
//               </Form.Item>
//               <Form.Item name="password" label="Password">
//                 <Input type="number" />
//               </Form.Item>
//               <Form.Item name="caste" label="Caste">
//                 <Select placeholder="Select">
//                   <Option value="Male">Sc</Option>
//                   <Option value="Female">St</Option>
//                   <Option value="Other">Obc</Option>
//                 </Select>
//               </Form.Item>
//               {/* Inline Date Picker Formatting */}
//               <Form.Item name="dob" label="Date of Birth">
//                 <DatePicker
//                   style={{ width: "100%" }}
//                   format="YYYY-MM-DD"
//                   onChange={(date) =>
//                     form.setFieldsValue({
//                       dob: date ? dayjs(date).format("YYYY-MM-DD") : null,
//                     })
//                   } // ✅ Inline Update
//                 />
//               </Form.Item>

//               <Form.Item name="gender" label="Gender">
//                 <Select placeholder="Select">
//                   <Option value="Male">Male</Option>
//                   <Option value="Female">Female</Option>
//                   <Option value="Other">Other</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item name="address" label="Address">
//                 <Input />
//               </Form.Item>

//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <Button onClick={pre}>Back</Button>
//                 <Button type="primary" htmlType="submit">
//                   Next
//                 </Button>
//               </div>
//             </Form>
//           )}
//           <br />
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default User_Reg;

import React, { useState, useEffect } from "react";
import {
  Form,
  Card,
  Button,
  Input,
  Steps,
  Upload,
  Select,
  DatePicker,
  message,
  Col,
  Row,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useParams, useNavigate } from "react-router-dom";
import {
  User_send_otp,
  User_verify_otp,
  UserRegUpdate,
  UserRegPost,
  UserDataPostwt,
  UserDataUpdatewl,
  User_StateGet,
  User_CasteGet,
} from "../../Api/CoreApi";
import { getRenderPropValue } from "antd/es/_util/getRenderPropValue";

const { Option } = Select;

function User_Reg() {
  const Navigate = useNavigate();
  const admin_id = localStorage.getItem("ref");
  const reid = useParams();
  const ref = reid.id;
  // const ad_ref = admin_id
  console.log(admin_id, "************* ref *********");
  const user_id = localStorage.getItem("user_id");
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null); // Store file object
  const [email_pop, setEmail_pop] = useState(0);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  // const [ref, setRef] = useState([])

  const [district, setDistrict] = useState([]);
  const [state, setState] = useState([]);
  const [caste, setCaste] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(data, "****** data ******");

  const handleStateChange = async (value) => {
    setState(setState);
    const response = await User_StateGet();
    const filter = response.filter((i) => i.state === value);
    const datamap = filter.map((i) => i.district);
    setDistrict(datamap);
  };

  const handlereligionChange = async (value) => {
    const response = await User_CasteGet();
    const filter = response.filter(
      (i) => i.religion === value || i.state === state
    );
    const mapcaste = filter.map((i) => i.caste);
    setCaste(mapcaste.sort());
    console.log(response, "99999", mapcaste);
  };

  const send = async (value) => {
    const response = await User_send_otp(value);
    console.log(response, "********* response ******");
    if (response.message === "Email already exists.") {
      message.error("Email already exists.");
    } else {
      message.success("Check Your Email");
      setEmail_pop(1);
      form.setFieldsValue(value);
    }
  };

  const verify = async (value) => {
    const response = await User_verify_otp(value);
    const email = response.email;
    const user_id1 = response.user_id;
    const mail = { email: email };
    setData(mail);
    localStorage.setItem("user_id", user_id1);
    console.log(response, "********* response ******");
    setEmail_pop(2);
  };

  const username = async (value) => {
    const response = await UserRegUpdate(user_id, value);
    const user_filter = response.filter((i) => i.id === user_id);
    setData(user_filter);
    setEmail_pop(3);
    form.setFieldsValue(value);
  };

  const profile_details = async (value) => {
    const gender = value.gender;
    const disttrict = value.disttrict;
    const state = value.state;
    const firstname = value.firstname;

    const email = data.map((i) => i.email);
    const refer = data.map((i) => i.refer);
    const user_name = data.map((i) => i.username);

    let refValu = ref ? ref : admin_id ? admin_id : "ref";

    const user_update = {
      first_name: firstname,
      gender: gender,
      disttrict: disttrict,
      state: state,
      ref: refValu,
    };
    // const data = ({ ...value, "User_id": user_id })

    // console.log("Form values:", value);
    // console.log("File object:", file);

    const formData = new FormData();
    formData.append("pic", file);
    formData.append("User_id", user_id);
    formData.append("email", email);
    // formData.append("ref", ref);
    let refValue = ref ? ref : admin_id ? admin_id : "ref";
    formData.append("ref", refValue);
    formData.append("refer", refer);
    formData.append("username", user_name);

    Object.entries(value).forEach(([key, val]) => {
      formData.append(key, val);
    });
    const response = await UserDataPostwt(formData);
    const response1 = await UserRegUpdate(user_id, user_update);
    if (response.length >= 0) {
      message.success("Registration Success");
      // window.location.reload();
      Navigate("/User_Login");
    }

    console.log(response, "****** response *******");

    console.log(formData, "****** response1 *******");
  };

  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       "url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     minHeight: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "start",
    //     paddingTop: isMobile ? "100px" : "200px",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: isMobile ? "80%" : "1100px",
    //       backgroundColor: "rgba(255, 255, 255, 0.9)",
    //       padding: "30px",
    //       borderRadius: "15px",
    //       boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    //       marginTop: isMobile ? "-150px" : "-100px",
    //     }}
    //   >
    //     <div style={{ textAlign: "center" }}>
    //       <h2>Signup Form</h2>
    //     </div>

    //     <Card>
    //       {email_pop === 0 && (
    //         <Form onFinish={send}>
    //           <Form.Item name="email">
    //             <Input type="email" placeholder="Enter the your email" />
    //           </Form.Item>
    //           <Form.Item>
    //             <Button htmlType="submit">Send</Button>
    //           </Form.Item>
    //         </Form>
    //       )}
    //       {email_pop === 1 && (
    //         <Form onFinish={verify} form={form} initialValues={form}>
    //           <Form.Item name="email">
    //             <Input type="email" readOnly />
    //           </Form.Item>
    //           <Form.Item name="otp">
    //             <Input type="number" />
    //           </Form.Item>
    //           <Form.Item>
    //             <Button htmlType="submit">Verify</Button>
    //           </Form.Item>
    //         </Form>
    //       )}

    //       {email_pop === 2 && (
    //         <Form onFinish={username}>
    //           <Form.Item name="username">
    //             <Input placeholder="Enter the user name" />
    //           </Form.Item>
    //           <Form.Item name="password">
    //             <Input type="password" placeholder="Enter the your password" />
    //           </Form.Item>
    //           <Form.Item>
    //             <Button htmlType="submit">Submit </Button>
    //           </Form.Item>
    //         </Form>
    //       )}
    //       {email_pop === 3 && (
    //         <Form form={form} onFinish={profile_details} initialValues={form}>
    //           <Row gutter={[16, 16]}>
    //             <Col span={6}>
    //               <Form.Item label="Profile Picture" required>
    //                 <Upload
    //                   beforeUpload={(file) => {
    //                     setFile(file);
    //                     form.setFieldsValue({ pic: file.name });
    //                     return false;
    //                   }}
    //                   showUploadList={false}
    //                 >
    //                   <Button icon={<UploadOutlined />}>Choose File</Button>
    //                 </Upload>
    //                 <Form.Item name="pic" noStyle>
    //                   <Input
    //                     style={{ marginTop: 8 }}
    //                     disabled
    //                     placeholder="No file selected"
    //                   />
    //                 </Form.Item>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="firstname" label="Full Name">
    //                 <Input placeholder="Full Name" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="gender" label="Gender">
    //                 <Select placeholder="Select gender">
    //                   <Option value="Male">Male</Option>
    //                   <Option value="Female">Female</Option>
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="state" label="State">
    //                 <Select placeholder="State" onChange={handleStateChange}>
    //                   <Option value="andhra_pradesh">Andhra Pradesh</Option>
    //                   <Option value="arunachal_pradesh">
    //                     Arunachal Pradesh
    //                   </Option>
    //                   <Option value="assam">Assam</Option>
    //                   <Option value="bihar">Bihar</Option>
    //                   <Option value="Chhattisgarh">Chhattisgarh</Option>
    //                   <Option value="goa">Goa</Option>
    //                   <Option value="gujarat">Gujarat</Option>
    //                   <Option value="haryana">Haryana</Option>
    //                   <Option value="himachal_pradesh">Himachal Pradesh</Option>
    //                   <Option value="jharkhand">Jharkhand</Option>
    //                   <Option value="karnataka">Karnataka</Option>
    //                   <Option value="kerala">Kerala</Option>
    //                   <Option value="madhya_pradesh">Madhya Pradesh</Option>
    //                   <Option value="maharashtra">Maharashtra</Option>
    //                   <Option value="manipur">Manipur</Option>
    //                   <Option value="meghalaya">Meghalaya</Option>
    //                   <Option value="mizoram">Mizoram</Option>
    //                   <Option value="nagaland">Nagaland</Option>
    //                   <Option value="odisha">Odisha</Option>
    //                   <Option value="punjab">Punjab</Option>
    //                   <Option value="rajasthan">Rajasthan</Option>
    //                   <Option value="sikkim">Sikkim</Option>
    //                   <Option value="tamil_nadu">Tamil Nadu</Option>
    //                   <Option value="telangana">Telangana</Option>
    //                   <Option value="tripura">Tripura</Option>
    //                   <Option value="uttar_pradesh">Uttar Pradesh</Option>
    //                   <Option value="uttarakhand">Uttarakhand</Option>
    //                   <Option value="west_bengal">West Bengal</Option>
    //                   <Option value="andaman_nicobar">
    //                     Andaman and Nicobar Islands
    //                   </Option>
    //                   <Option value="chandigarh">Chandigarh</Option>
    //                   <Option value="dadra_nagar_haveli_daman_diu">
    //                     Dadra and Nagar Haveli and Daman and Diu
    //                   </Option>
    //                   <Option value="delhi">Delhi</Option>
    //                   <Option value="jammu_kashmir">Jammu and Kashmir</Option>
    //                   <Option value="ladakh">Ladakh</Option>
    //                   <Option value="lakshadweep">Lakshadweep</Option>
    //                   <Option value="puducherry">Puducherry</Option>
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="disttrict" label="District">
    //                 <Select placeholder="District">
    //                   {district?.[0]?.map((item, index) => (
    //                     <Option key={index} value={item}>
    //                       {item}
    //                     </Option>
    //                   ))}
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="city" label="City">
    //                 <Input placeholder="City" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="religion" label="Religion">
    //                 <Select
    //                   placeholder="Religion"
    //                   onChange={handlereligionChange}
    //                 >
    //                   <Option value="Hindu">Hindu</Option>
    //                   <Option value="muslim">Muslim</Option>
    //                   <Option value="christian">Christian</Option>
    //                   <Option value="sikh">Sikh</Option>
    //                   <Option value="buddhist">Buddhist</Option>
    //                   <Option value="jain">Jain</Option>
    //                   <Option value="other">Other</Option>
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="caste" label="Caste">
    //                 <Select
    //                   showSearch
    //                   allowClear
    //                   placeholder="Caste"
    //                   optionFilterProp="children"
    //                   filterOption={(input, option) =>
    //                     option?.children
    //                       ?.toLowerCase()
    //                       .includes(input.toLowerCase())
    //                   }
    //                 >
    //                   {(Array.isArray(caste[0]) ? caste[0] : caste).map(
    //                     (item, index) => (
    //                       <Option key={index} value={item}>
    //                         {item}
    //                       </Option>
    //                     )
    //                   )}
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="dob" label="DOB">
    //                 <Input type="date" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="age" label="Age">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="father_name" label="Father's Name">
    //                 <Input placeholder="Father Name" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="mother_name" label="Mother's Name">
    //                 <Input placeholder="Mother Name" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="brother" label="No. of Brothers">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="brother_marrige" label="Married Brothers">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="sister" label="No. of Sisters">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="sister_marrige" label="Married Sisters">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="university" label="University/School">
    //                 <Input />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="course" label="Course">
    //                 <Input />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="job_title" label="Job Title">
    //                 <Input />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="job_type" label="Job Type">
    //                 <Select placeholder="Select Job Type">
    //                   <Option value="government">Government</Option>
    //                   <Option value="private">Private</Option>
    //                   <Option value="unemployed">Unemployed</Option>
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="marrige_status" label="Marriage Status">
    //                 <Select placeholder="Marriage Status">
    //                   <Option value="Unmarried">Unmarried</Option>
    //                   <Option value="Married">Married</Option>
    //                 </Select>
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="salary" label="Salary">
    //                 <Input type="number" />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="contact" label="WhatsApp Number">
    //                 <Input />
    //               </Form.Item>
    //             </Col>

    //             <Col span={6}>
    //               <Form.Item name="instagram" label="Instagram Link">
    //                 <Input />
    //               </Form.Item>
    //             </Col>

    //             <Col span={24}>
    //               <Form.Item>
    //                 <Button type="primary" htmlType="submit">
    //                   Save
    //                 </Button>
    //               </Form.Item>
    //             </Col>
    //           </Row>
    //         </Form>
    //       )}
    //     </Card>
    //   </div>
    // </div>

    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: isMobile ? "100px" : "200px",
      }}
    >
      <div
        style={{
          width: isMobile ? "90%" : "1100px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          marginTop: isMobile ? "-150px" : "-100px",
          marginTop:"5px"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20,marginTop:"40px" }}>
          <h2>Signup Form</h2>
        </div>

        <Card>
          {email_pop === 0 && (
            <div
              style={{
                width: "90%", // 90% of the parent/container width
                maxWidth: "800px", // max width on large screens
                margin: "0 auto",
              }}
            >
              <Form onFinish={send}>
                <Form.Item name="email">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    size="middle"
                  />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    htmlType="submit"
                    size="middle"
                    style={{
                      width: "100%", // full width button on small screens
                      maxWidth: "120px", // limit max button width on bigger screens
                      color: "green",
                     border: "1px solid green"
                    }}
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}

          {/* OTP VERIFICATION */}
          {email_pop === 1 && (
            <div
              style={{
                width: "90%",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <Form onFinish={verify} form={form} initialValues={form}>
                <Form.Item name="email">
                  <Input type="email" readOnly size="middle" />
                </Form.Item>
                <Form.Item name="otp">
                  <Input type="number" placeholder="Enter OTP" size="middle" />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    htmlType="submit"
                    size="middle"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                    }}
                  >
                    Verify
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}

          {/* USERNAME & PASSWORD */}
          {email_pop === 2 && (
            <Form onFinish={username}>
              <Form.Item name="username">
                <Input placeholder="Enter your username" size="middle" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  placeholder="Enter your password"
                  size="middle"
                />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" size="middle">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}

          {/* FULL PROFILE FORM */}
          {email_pop === 3 && (
            <Form
              form={form}
              onFinish={profile_details}
              initialValues={form}
              layout="vertical"
            >
              <Row gutter={[16, 16]}>
                {/* Image Upload - Full Width */}
                <Col span={24}>
                  <Form.Item label="Profile Picture" required>
                    <Upload
                      beforeUpload={(file) => {
                        setFile(file);
                        form.setFieldsValue({ pic: file.name });
                        return false;
                      }}
                      showUploadList={false}
                    >
                      <Button icon={<UploadOutlined />} size="middle">
                        Choose File
                      </Button>
                    </Upload>
                    <Form.Item name="pic" noStyle>
                      <Input
                        style={{ marginTop: 8 }}
                        disabled
                        placeholder="No file selected"
                        size="middle"
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>

                {/* All Other Fields in Responsive Columns */}
                {[
                  { name: "firstname", label: "Full Name" },
                  {
                    name: "gender",
                    label: "Gender",
                    type: "select",
                    options: ["Male", "Female"],
                  },
                  {
                    name: "state",
                    label: "State",
                    type: "select",
                    options: [
                      "Andhra Pradesh",
                      "Arunachal Pradesh",
                      "Assam",
                      "Bihar",
                      "Chhattisgarh",
                      "Goa",
                      "Gujarat",
                      "Haryana",
                      "Himachal Pradesh",
                      "Jharkhand",
                      "Karnataka",
                      "Kerala",
                      "Madhya Pradesh",
                      "Maharashtra",
                      "Manipur",
                      "Meghalaya",
                      "Mizoram",
                      "Nagaland",
                      "Odisha",
                      "Punjab",
                      "Rajasthan",
                      "Sikkim",
                      "Tamil Nadu",
                      "Telangana",
                      "Tripura",
                      "Uttar Pradesh",
                      "Uttarakhand",
                      "West Bengal",
                      "Andaman and Nicobar Islands",
                      "Chandigarh",
                      "Dadra and Nagar Haveli and Daman and Diu",
                      "Delhi",
                      "Jammu and Kashmir",
                      "Ladakh",
                      "Lakshadweep",
                      "Puducherry",
                    ],
                    onChange: handleStateChange,
                  },
                  {
                    name: "disttrict",
                    label: "District",
                    type: "select",
                    dynamic: district?.[0],
                  },
                  { name: "city", label: "City" },
                  {
                    name: "religion",
                    label: "Religion",
                    type: "select",
                    options: [
                      "Hindu",
                      "Muslim",
                      "Christian",
                      "Sikh",
                      "Buddhist",
                      "Jain",
                      "Other",
                    ],
                    onChange: handlereligionChange,
                  },
                  {
                    name: "caste",
                    label: "Caste",
                    type: "select",
                    dynamic: Array.isArray(caste[0]) ? caste[0] : caste,
                    searchable: true,
                  },
                  { name: "dob", label: "DOB", type: "date" },
                  { name: "age", label: "Age", type: "number" },
                  { name: "father_name", label: "Father's Name" },
                  { name: "mother_name", label: "Mother's Name" },
                  { name: "brother", label: "No. of Brothers", type: "number" },
                  {
                    name: "brother_marrige",
                    label: "Married Brothers",
                    type: "number",
                  },
                  { name: "sister", label: "No. of Sisters", type: "number" },
                  {
                    name: "sister_marrige",
                    label: "Married Sisters",
                    type: "number",
                  },
                  { name: "university", label: "University/School" },
                  { name: "course", label: "Course" },
                  { name: "job_title", label: "Job Title" },
                  {
                    name: "job_type",
                    label: "Job Type",
                    type: "select",
                    options: ["Government", "Private", "Unemployed"],
                  },
                  {
                    name: "marrige_status",
                    label: "Marriage Status",
                    type: "select",
                    options: ["Unmarried", "Married"],
                  },
                  { name: "salary", label: "Salary", type: "number" },
                  { name: "contact", label: "WhatsApp Number" },
                  { name: "instagram", label: "Instagram Link" },
                ].map((field, idx) => (
                  <Col key={field.name} xs={24} sm={12} md={12} lg={6}>
                    <Form.Item name={field.name} label={field.label}>
                      {field.type === "select" ? (
                        <Select
                          showSearch={field.searchable}
                          allowClear
                          placeholder={field.label}
                          onChange={field.onChange}
                          size="middle"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option?.children
                              ?.toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          {(field.dynamic || field.options || []).map(
                            (opt, i) => (
                              <Option key={i} value={opt}>
                                {opt}
                              </Option>
                            )
                          )}
                        </Select>
                      ) : field.type === "date" ? (
                        <Input type="date" size="middle" />
                      ) : (
                        <Input
                          type={field.type || "text"}
                          placeholder={field.label}
                          size="middle"
                        />
                      )}
                    </Form.Item>
                  </Col>
                ))}

                <Col span={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">
                      Save
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          )}
        </Card>
      </div>
    </div>
  );
}

export default User_Reg;
