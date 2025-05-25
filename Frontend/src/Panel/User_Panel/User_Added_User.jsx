import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, Select, message } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi";
import User_Reg from "../../Authentication/User/User_Reg";
const { Option } = Select;

function User_Added_User() {
  const Navigate = useNavigate();

  const [user, setuser] = useState([]);
  const [staff, setStaff] = useState([])
  const [user_form, setuser_form] = useState(null);
  const [updateform, setUpdateform] = useState([]);

  const id = localStorage.getItem('user_id')
  console.log(staff, "****** id ****");

  // const id = ((staffid))
  const get = async () => {
    const staff_response = await UserGet();
    const current_staff = staff_response.filter(i => i.id === id)
    setStaff(current_staff)
    // console.log(current_staff, "****** current_staff ****");
    const userdata = staff_response.filter(i => i.ref === current_staff[0].refer)
    // console.log(userdata, '****** user_response ********')
    setuser(userdata);
  };

  useEffect(() => {
    get();
  }, []);

  // const adduser = async (value) => {
  //   try {
  //     const response = await UserPost(value)
  //     const userdata = response.filter(i => i.ref === staff[0].refer)
  //     setuser(userdata)
  //     // console.log(value, "******* value *****");
  //     setuser_form(null);
  //     message.success('success')
  //   } catch (error) {
  //     message.error('Failed');
  //   }
  // };

  //   const update_pass = (i) => {
  //     console.log(i, "update pass");
  //     setUpdateform(i);
  //     setuser_form("update_button");
  //   };
  //   const updateuser = async (i) => {
  //     try {
  //       const id = i.id
  //       const response = await UserUpdate(id, i)
  //       const userdata = response.filter(i => i.ref === staff[0].refer)
  //       setuser(userdata)
  //       setuser_form(null);
  //       message.success('success')
  //     } catch (error) {
  //       message.error('Failed');
  //     }
  //   };

  //   const delete_user = async (i) => {
  //     try {
  //       const id = i.id
  //       const response = await UserRemove(id)
  //       setuser(response)
  //       message.success('success')
  //     } catch (error) {
  //       message.error('Failed');
  //     }
  //   };

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

      <div style={{ marginLeft: '200px', paddingTop: '50px' }}>
        {user_form === null && (
          <Button
            style={{ marginLeft: "90%", width: "100px" }}
            onClick={() => setuser_form("add")}
          >
            Add user
          </Button>
        )}
        {user_form === "add" && (
          // <Form onFinish={adduser}>
          //   <div style={{ display: "flex" }} >
          //     <Form.Item style={{ width: "400px" }} name="username">
          //       <Input placeholder="Username" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "400px" }} name="caste">
          //       <Input placeholder="caste" />
          //     </Form.Item>
          //     <Form.Item
          //       name="gender"
          //       style={{ width: "300px" }}
          //       rules={[{ required: true, message: "Please select gender" }]}
          //     >
          //       <Select placeholder="Select Gender">
          //         <Option value="Male">Male</Option>
          //         <Option value="Female">Female</Option>
          //         <Option value="Other">Other</Option>
          //       </Select>
          //     </Form.Item>

          //     <Form.Item style={{ width: "300px" }} name="dob">
          //       <Input type="date" placeholder="dob" />
          //     </Form.Item>
          //     <Form.Item
          //       name="religion"
          //       style={{ width: "300px" }}
          //       rules={[{ required: true, message: "Please select religion" }]}
          //     >
          //       <Select placeholder="Select Religion">
          //         <Option value="Hindu">Hindu</Option>
          //         <Option value="Muslim">Muslim</Option>
          //         <Option value="Christian">Christian</Option>
          //         <Option value="Sikh">Sikh</Option>
          //         <Option value="Buddhist">Buddhist</Option>
          //         <Option value="Jain">Jain</Option>
          //         <Option value="Other">Other</Option>
          //       </Select>
          //     </Form.Item>
          //   </div>
          //   <div style={{ display: "flex", marginTop: '-18px' }} >
          //     <Form.Item style={{ width: "300px" }} name="age">
          //       <Input type="number" placeholder="age" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "400px" }} name="contact">
          //       <Input type="number" placeholder="contact" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "400px" }} name="password">
          //       <Input placeholder="password" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="aadhar">
          //       <Input type="number" placeholder="aadhar" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="email">
          //       <Input type="email" placeholder="email" />
          //     </Form.Item>
          //   </div>
          //   <div style={{ display: "flex", marginTop: '-18px' }} >
          //     <Form.Item style={{ width: "400px" }} name="state">
          //       <Input placeholder="state" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "400px" }} name="city">
          //       <Input placeholder="city" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="country">
          //       <Input placeholder="country" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="disttrict">
          //       <Input placeholder="Disttrict" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "400px" }} name="address">
          //       <Input placeholder="address" />
          //     </Form.Item>
          //   </div>
          //   <div style={{ display: "flex", marginTop: '-18px' }} >
          //     <Form.Item style={{ width: "400px" }} name="university">
          //       <Input placeholder="university" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="course">
          //       <Input placeholder="course" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="job_title">
          //       <Input placeholder="job_title" />
          //     </Form.Item>
          //     <Form.Item
          //       name="job_type"
          //       style={{ width: "400px" }}
          //       rules={[{ required: true, message: "Please select job type" }]}
          //     >
          //       <Select placeholder="Select Job Type">
          //         <Option value="Full-Time">Govt</Option>
          //         <Option value="Part-Time">Semi Govt</Option>
          //         <Option value="Part-Time">Pvt</Option>
          //       </Select>
          //     </Form.Item>
          //   </div>
          //   <div style={{ display: "flex", marginTop: '-18px' }} >
          //     <Form.Item style={{ width: "400px" }} name="salary">
          //       <Input type="number" placeholder="salary" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="father_name">
          //       <Input placeholder="father_name" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="mother_name">
          //       <Input placeholder="mother_name" />
          //     </Form.Item>

          //     <Form.Item style={{ width: "400px" }} name="brother">
          //       <Input type="number" placeholder="brother" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="brother_marrige">
          //       <Input type="number" placeholder="brother_marrige" />
          //     </Form.Item>
          //   </div>
          //   <div style={{ display: "flex", marginTop: '-18px' }} >
          //     <Form.Item style={{ width: "300px" }} name="sister">
          //       <Input type="number" placeholder="sister" />
          //     </Form.Item>
          //     <Form.Item style={{ width: "300px" }} name="sister_marrige">
          //       <Input type="number" placeholder="sister_marrige" />
          //     </Form.Item>
          //     <Form.Item>
          //       <Button
          //         style={{ width: "150px", marginLeft: "10px" }}
          //         htmlType="submit"
          //       >
          //         add
          //       </Button>
          //     </Form.Item>
          //   </div>
          // </Form>
          <User_Reg />
        )}

        {/* {user_form === "update_button" && (
          <Form
            style={{ display: "flex" }}
            initialValues={updateform}
            onFinish={updateuser}
          >
            <Form.Item style={{ width: "400px" }} name="id">
              <Input placeholder="Id" readOnly />
            </Form.Item>
            <Form.Item style={{ width: "400px" }} name="username">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item style={{ width: "400px" }} name="password">
              <Input placeholder="password" />
            </Form.Item>
            <Form.Item style={{ width: "300px" }} name="balance">
              <Input placeholder="Balance" />
            </Form.Item>
            <Form.Item style={{ width: "300px" }} name="disttrict">
              <Input placeholder="Disttrict" />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ width: "150px", marginLeft: "10px" }}
                htmlType="submit"
              >
                update
              </Button>
            </Form.Item>
          </Form>
        )} */}

        <Table
          columns={[
            { title: "ID", dataIndex: "id", key: "id" },
            { title: "Username", dataIndex: "username", key: "username" },
            { title: "Password", dataIndex: "password", key: "password" },
            { title: "Balance", dataIndex: "balance", key: "balance" },
            {
              title: "District",
              dataIndex: "disttrict",
              key: "disttrict",
            },
            // {
            //   title: "Actions",
            //   key: "actions",
            //   render: (
            //     _,
            //     record // Corrected to pass row data
            //   ) => (
            //     <>
            //       <Button
            //         style={{ marginRight: 8 }}
            //         onClick={() => update_pass(record)}
            //       >
            //         Update
            //       </Button>
            //       <Button danger onClick={() => delete_user(record)}>
            //         Delete
            //       </Button>
            //       {/* <Link to={`/User_Charts/${record.id}`}><Button danger>
            //         details
            //       </Button></Link> */}
            //     </>
            //   ),
            // },
          ]}
          dataSource={user}
          rowKey="id"
          bordered
          scroll={{ x: true }} // Makes it responsive
        />
      </div>
    </div>
  );
}

export default User_Added_User



// import React from 'react'

// function Staff_Added_User() {
//   return (
//     <div>Staff_Added_User</div>
//   )
// }

// export default Staff_Added_User