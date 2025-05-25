
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Select, Row, Col, Image, message, Upload } from "antd";
import {
  FaFacebook,
  FaIndianRupeeSign,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { UserGet, UserUpdate, UserDataGet, UserDataUpdate, UserImagesGet, UserImagesUpdate } from "../../Api/CoreApi";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import user_image from "../../Assets/wedding1.jpg";
import { SiGmail } from "react-icons/si";
import { UploadOutlined } from "@ant-design/icons";

function User_Profile_User() {
  const Navigate = useNavigate()
  const [form] = Form.useForm();

  const baseurl = "http://127.0.0.1:8000/";
  const id = localStorage.getItem('user_id')
  // const id = useParams();
  const int_id = (String(id));
  // console.log(int_id,'**** int_id')

  const [activeTab, setActiveTab] = useState(null);
  const [file, setFile] = useState(null); // Store file object
  console.log(file, '******** file *********')

  const [User, setUser] = useState([]);
  const [obj, setObj] = useState([]);
  const [image, setImage] = useState([]);
  console.log(User, "******* User ********");

  const get_user = async () => {
    const response = await UserGet();
    const filter = response.filter((i) => i.id === int_id);
    setUser(filter);
    // console.log(filter, '****** filter *****')
    setObj(filter[0]);
    const response1 = await UserDataGet();
    const filter_data = response1.filter((i) => i.User_id === int_id);
    console.log(filter_data, '******* filter_data ******')

    const user_name = filter.map(i => i.username).join(", ")
    const user_password = filter.map(i => i.password).join(", ")
    const user_balance = filter.map(i => i.balance).join(", ")

    const data_id = filter_data.map(i => i.User_id).join(", ")

    // const merged = { ...filter, ...filter_data };
    // const user_combine_get = { "username": user_name, "password": user_password }

    const add = { ...filter_data[0], "User_id": data_id, "username": user_name, "password": user_password, "balance": user_balance }
    form.setFieldsValue(add);

    console.log(add, '******* data_id ******')


  };

  const get_user_image = async () => {
    const response = await UserImagesGet();
    const filter = response.filter((i) => i.user_id === int_id);
    console.log(filter, "***** filter *****");
    setImage(filter);
  };
  useEffect(() => {
    get_user();
    get_user_image();
  }, []);

  const submit = async (value) => {
    const response = await UserUpdate(id, value)
    const response1 = await UserDataUpdate(id, value)
    message.success("Success")
    get_user();
    // console.log(value, "**** value ******");
  };

  const Login_update = async (value) => {
    const response = await UserUpdate(id, value)
    message.success("Success")
    get_user();
  }

  const img_update = async (value) => {
    const formData = new FormData();

    Object.entries(value).forEach(([key, val]) => {
      formData.append(key, val);
    });

    const response = await UserUpdate(id, formData)
    setImage(response)
    // console.log(response, '********** formData *************')
    message.success("Success")
    get_user();
  }

  const log_out = () => {
    localStorage.removeItem('user_id')
    Navigate('/User_Login')
  }

  // useEffect(() => {
  //   img_update()
  // }, [file])

  return (
    <div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex',marginTop:'-10px' }}>
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
      <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '40px' }}>
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
      {User.map((i) => (
        <Card
          style={{ marginLeft: "400px", width: "1000px", marginTop: "10px" }}
        >
          {/* <img
            style={{ height: "280px", width: "100%" }}
            src="https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg"
          /> */}

          <Image style={{ height: "280px", width: "940px" }} src={user_image} />

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

          <Form>
            <Form.Item style={{ marginLeft: '250px', marginTop: '-20px', }}>
              <Upload
                beforeUpload={(file) => {
                  img_update({ pic: file }); // ✅ Send the actual file
                  return false; // Prevent auto upload
                }}
                showUploadList={false}
              >
                <Button style={{ width: '50px' }} icon={<UploadOutlined style={{ fontSize: '22px' }} />}></Button>
              </Upload>
            </Form.Item>


            {/* <Form.Item label="Profile Picture" required>
              <Upload
                beforeUpload={(file) => {
                  setFile({ pic: file.name });
                  // form.setFieldsValue({ pic: file.name }); // Set filename in input
                  return false; // Prevent automatic upload
                }}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload> */}

            {/* 👉 This input holds the filename, with name="pic" */}
            {/* <Form.Item name="pic" noStyle>
                <Input
                  style={{ marginTop: 8 }}
                  disabled
                  placeholder="No file selected"
                />
              </Form.Item> */}
            {/* </Form.Item> */}
          </Form>

          <h2
            style={{
              marginTop: "-110px",
              marginLeft: "340px",
              fontSize: "30px",
              // fontStyle: "italic",
            }}
          >
            {i.first_name}
            <br />
            {/* <h4 style={{ marginTop: "10px", fontWeight: "normal", fontSize: "15px" }}>
              Age: 23, 5ft 7 inch - 172 cm, Software Developer, Raipur, India
            </h4> */}
          </h2>
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
              href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/${i.id}`)}`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`http://localhost:3000/${i.id}`)}`}
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
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`http://localhost:3000/${i.id}`)}&text=Check%20this%20out!`}
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

          <Card style={{ marginTop: "40px" }}>
            <div
              style={{ columnGap: "20px", display: "flex", marginTop: "-25px" }}
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
                  onClick={() => setActiveTab("Login_Details")}
                >
                  Login Details
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
                  Address Detail
                </Button>
              </p>
              {/* <p>
                <Button
                  style={{ width: "100px", height: "40px", fontSize: "18px" }}
                  onClick={() => setActiveTab("kundli")}
                >
                  Kundli
                </Button>
              </p> */}
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
                  <div key={index} style={{ width: "calc(25% - 8px)" }}>
                    <p>
                      <img
                        style={{
                          height: "180px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={`${baseurl}${i.images}`}
                        alt="Image"
                      />
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* profile :---------- */}

            {activeTab === "profile" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={submit} form={form} initialValues={form} layout="vertical">
                  <Row gutter={24}>
                    {/* Left Column */}
                    <Col xs={24} sm={12}>
                      {/* Name */}
                      <Form.Item label="Full Name" name="firstname">
                        <Input />
                      </Form.Item>





                      <Form.Item name="dob">
                        <Input type="date" />
                      </Form.Item>

                      <Form.Item label="Age" name="age">
                        <Input type="number" min="18" max="100" />
                      </Form.Item>

                      {/* Gender */}
                      <Form.Item label="Gender" name="gender">
                        <Input />
                      </Form.Item>

                      {/* Caste */}
                      <Form.Item label="Caste" name="caste">
                        <Input />
                      </Form.Item>

                      {/* Religion */}
                      <Form.Item label="Religion" name="religion">
                        <Input />

                        {/* <Select>
                          <Select.Option value="hindu">Hindu</Select.Option>
                          <Select.Option value="muslim">Muslim</Select.Option>
                          <Select.Option value="christian">
                            Christian
                          </Select.Option>
                          <Select.Option value="sikh">Sikh</Select.Option>
                          <Select.Option value="jain">Jain</Select.Option>
                          <Select.Option value="buddhist">
                            Buddhist
                          </Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select> */}
                      </Form.Item>

                      {/* Marital Status */}
                      <Form.Item label="Marrige Status" name="marrige_status">
                        <Select placeholder="marrige_status">
                          <Select.Option value="Unmarried">Unmarried</Select.Option>
                          <Select.Option value="Married">Married</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item label="Contact Number" name="contact">
                        <Input type="tel" maxLength={10} />
                      </Form.Item>

                      <Form.Item label="Email Address" name="email">
                        <Input type="email" />
                      </Form.Item>

                      <Form.Item label="Job Title" name="job_title">
                        <Input />
                      </Form.Item>

                      <Form.Item name="job_type" label="Job Type">
                        <Select placeholder="Select Job Type">
                          <Select.Option value="government">Government</Select.Option>
                          <Select.Option value="private">Private</Select.Option>
                          <Select.Option value="unemployed">Unemployed</Select.Option>
                        </Select>
                      </Form.Item>


                      <Form.Item name="salary" label='Salary'>
                        <Input type="number" placeholder='Salary' />
                      </Form.Item>

                    </Col>
                  </Row>

                  {/* Submit Button */}
                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}


            {activeTab === "Login_Details" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={Login_update} form={form} initialValues={form} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Username" name="username">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Password" name="password">
                        <Input />
                      </Form.Item>
                    </Col>

                    {/* <Col xs={24} sm={12}>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Gender" name="gender">
                        <Select>
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item label="Time Zone" name="time_zone">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Ayanamsa" name="ayanamsa">
                        <Select>
                          <Select.Option value="lahiri">Lahiri</Select.Option>
                          <Select.Option value="raman">Raman</Select.Option>
                          <Select.Option value="kp">KP</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item label="Full Address" name="full_address">
                        <Input />
                      </Form.Item>
                    </Col> */}
                  </Row>

                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}


            {/* family :---------- */}

            {activeTab === "family" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={submit} form={form} initialValues={form} layout="vertical">
                  <Row gutter={24}>
                    {/* Left Column */}
                    <Col xs={24} sm={12}>
                      {/* Mother's Name */}
                      <Form.Item label="Mother's Name" name="mother_name">
                        <Input />
                      </Form.Item>


                      {/* Father's Name */}
                      <Form.Item label="Father's Name" name="father_name">
                        <Input />
                      </Form.Item>
                    </Col>

                    {/* Right Column */}
                    <Col xs={24} sm={12}>
                      {/* Number of Brothers */}
                      <Form.Item
                        label="Number of Brothers"
                        name="brother"
                      >
                        <Input type="number" min="0" />
                      </Form.Item>

                      <Form.Item
                        label="Number of Married Brothers"
                        name="brother_marrige"
                      >
                        <Input type="number" min="0" />
                      </Form.Item>

                      {/* Number of Sisters */}
                      <Form.Item
                        label="Number of Sisters"
                        name="sister"
                      >
                        <Input type="number" min="0" />
                      </Form.Item>

                      <Form.Item
                        label="Number of Married Sisters"
                        name="sister_marrige"
                      >
                        <Input type="number" min="0" />
                      </Form.Item>

                      {/* Family Income */}

                    </Col>
                  </Row>

                  {/* Submit Button */}
                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {/* address :---------- */}
            {/* {activeTab === "address" && (
              <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <Form onFinish={submit} initialValues={obj}>
                  <Form.Item
                    label="City/Village"
                    name="city"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].city}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <br></br>
                  <Form.Item
                    label="disttrict"
                    name="disttrict"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].disttrict}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <br></br>

                  <Form.Item
                    label="state"
                    name="state"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].state}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <br></br>

                  <Form.Item
                    label="country"
                    name="country"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].country}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <br></br>

                  <Form.Item
                    label="full_address"
                    name="full_address"
                    style={{ width: "500px", height: "5px" }}
                    // initialValue={User[0].full_address}
                  >
                    <Input style={{}} />
                  </Form.Item>
                  <br />
                  <Button htmlType="submit" style={{ marginLeft: "35%" }}>
                    Save
                  </Button>
                </Form>
              </div>
            )} */}

            {activeTab === "address" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={submit} form={form} initialValues={form} layout="vertical">
                  <Row gutter={24}>
                    {/* Left Column */}
                    <Col xs={24} sm={12}>
                      {/* House/Flat Number */}
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>

                      {/* Street Address */}
                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>

                      {/* District */}
                      <Form.Item label="District" name="disttrict">
                        <Input />
                      </Form.Item>

                      {/* State */}
                      <Form.Item label="City" name="city">
                        <Input />
                      </Form.Item>
                    </Col>

                    {/* Right Column */}
                    {/* <Col xs={24} sm={12}>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Pincode / ZIP Code" name="pincode">
                        <Input type="number" />
                      </Form.Item>

                      <Form.Item label="Landmark (Optional)" name="landmark">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Full Address" name="full_address">
                        <Input.TextArea rows={2} />
                      </Form.Item>
                    </Col> */}
                  </Row>

                  {/* Submit Button */}
                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {/* Kundi :---------- */}
            {/* {activeTab === "kundli" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Full Name" name="name">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Date of Birth" name="date_of_birth">
                        <Input type="date" />
                      </Form.Item>

                      <Form.Item label="Time of Birth" name="time_of_birth">
                        <Input type="time" />
                      </Form.Item>

                      <Form.Item label="Place of Birth" name="place_of_birth">
                        <Input />
                      </Form.Item>

                      <Form.Item label="District" name="district">
                        <Input />
                      </Form.Item>

                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Gender" name="gender">
                        <Select>
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item label="Time Zone" name="time_zone">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Ayanamsa" name="ayanamsa">
                        <Select>
                          <Select.Option value="lahiri">Lahiri</Select.Option>
                          <Select.Option value="raman">Raman</Select.Option>
                          <Select.Option value="kp">KP</Select.Option>
                        </Select>
                      </Form.Item>

                      <Form.Item label="Full Address" name="full_address">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )} */}

            {/* education :---------- */}

            {activeTab === "education" && (
              <div
                style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}
              >
                <Form onFinish={submit} form={form} initialValues={form} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      {/* Highest Qualification */}
                      <Form.Item
                        label="University/Collage/School"
                        name="university"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item label="Course / Qualifications" name="course">
                        <Input />
                      </Form.Item>


                      {/* <Form.Item
                        label="University/Board Name"
                        name="university_board"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item label="Passing Year" name="passing_year">
                        <Input type="number" min="1900" max="2025" />
                      </Form.Item> */}
                    </Col>

                    {/* <Col xs={24} sm={12}>
              
                      <Form.Item label="District" name="district">
                        <Input />
                      </Form.Item>

                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>

                      <Form.Item label="Full Address" name="full_address">
                        <Input />
                      </Form.Item>
                    </Col> */}

                  </Row>

                  <Row>
                    <Col
                      span={24}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}
          </Card>
        </Card>
      ))}
    </div>
  );
}

export default User_Profile_User;