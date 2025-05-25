import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Table, Select, message } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi";
import User_Reg from "../../Authentication/User/User_Reg";

const { Option } = Select;

function User_Tables() {
  const admin_id = localStorage.getItem('user_id')
  const Navigate = useNavigate();
  const [user, setuser] = useState([]);
  const [user_form, setuser_form] = useState(null);
  const [updateform, setUpdateform] = useState([]);

  // console.log(user, "****** user ****");

  const get = async () => {
    const response = await UserGet();
    const User_Filter = response.filter(i => i.role === 'user')
    setuser(User_Filter);
  };

  useEffect(() => {
    get();
  }, []);

  const adduser = async (value) => {
    try {
      const response = await UserPost(value)
      const User_Filter = response.filter(i => i.role === 'user')
      setuser(User_Filter);
      setuser_form(null);
      message.success('success')
    } catch (error) {
      message.error('Failed');
    }
  };

  const update_pass = (i) => {
    console.log(i, "update pass");
    setUpdateform(i);
    setuser_form("update_button");
  };

  const updateuser = async (i) => {
    try {
      const id = i.id
      const response = await UserUpdate(id, i)
      const User_Filter = response.filter(i => i.role === 'user')
      setuser(User_Filter);
      setuser_form(null);
      message.success('success')
    } catch (error) {
      message.error('Failed');
    }
  };

  const delete_user = async (i) => {
    try {
      const id = i.id
      const response = await UserRemove(id)
      const User_Filter = response.filter(i => i.role === 'user')
      setuser(User_Filter)
      message.success('success')
    } catch (error) {
      message.error('Failed');
    }
  };

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
          <User_Reg />
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

        )}

        {user_form === "update_button" && (
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
        )}

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
            {
              title: "Actions",
              key: "actions",
              render: (
                _,
                record // Corrected to pass row data
              ) => (
                <>
                  <Button
                    style={{ marginRight: 8 }}
                    onClick={() => update_pass(record)}
                  >
                    Update
                  </Button>
                  <Button danger onClick={() => delete_user(record)}>
                    Delete
                  </Button>
                  <Link to={`/User_Charts/${record.id}`}><Button danger>
                    details
                  </Button></Link>
                </>
              ),
            },
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

export default User_Tables