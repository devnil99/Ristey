

import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Table, message } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi";
import Staff_Reg from "../../Authentication/Staff/Staff_Reg";
function Staff_Tables() {
  const admin_id = localStorage.getItem('user_id')
  const Navigate = useNavigate();

  const [staff, setStaff] = useState([]);
  const [staff_form, setStaff_form] = useState(null);
  const [updateform, setUpdateform] = useState([]);

  console.log(staff, "****** staff ****");

  const get = async () => {
    const staff_response = await UserGet();
    const Staff_Filter = staff_response.filter(i => i.role === 'staff')
    setStaff(Staff_Filter);
  };

  useEffect(() => {
    get();
  }, []);


  const addstaff = async (value) => {
    const data = ({ ...value, "role": 'staff' })
    try {
      const response = await UserPost(data)
      const Staff_Filter = response.filter(i => i.role === 'staff')
      setStaff(Staff_Filter);
      // setStaff(response)
      console.log(value, "******* value *****");
      setStaff_form(null);
      message.success('success')
    } catch (error) {
      message.error('Failed');
    }
  };

  const update_pass = (i) => {
    console.log(i, "update pass");
    setUpdateform(i);
    setStaff_form("update_button");
  };

  const updatestaff = async (i) => {
    try {
      const id = i.id
      const response = await UserUpdate(id, i)
      const Staff_Filter = response.filter(i => i.role === 'staff')
      setStaff(Staff_Filter);
      setStaff_form(null);
      message.success('success')
    } catch (error) {
      message.error('Failed');
    }
  };

  const delete_staff = async (i) => {
    try {
      const id = i.id
      const response = await UserRemove(id)
      const Staff_Filter = response.filter(i => i.role === 'staff')
      setStaff(Staff_Filter)
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
        {staff_form === null && (
          <Button
            style={{ marginLeft: "90%", width: "100px" }}
            onClick={() => setStaff_form("add")}
          >
            Add Staff
          </Button>
        )}
        {staff_form === "add" && (
          // <Form style={{ display: "flex" }} onFinish={addstaff}>
          //   <Form.Item style={{ width: "400px" }} name="username">
          //     <Input placeholder="Username" />
          //   </Form.Item>
          //   <Form.Item style={{ width: "400px" }} name="password">
          //     <Input placeholder="password" />
          //   </Form.Item>
          //   <Form.Item style={{ width: "300px" }} name="balance">
          //     <Input type="number" placeholder="Balance" />
          //   </Form.Item>
          //   <Form.Item style={{ width: "300px" }} name="disttrict">
          //     <Input placeholder="Disttrict" />
          //   </Form.Item>
          //   <Form.Item>
          //     <Button
          //       style={{ width: "150px", marginLeft: "10px" }}
          //       htmlType="submit"
          //     >
          //       add
          //     </Button>
          //   </Form.Item>
          // </Form>
          <Staff_Reg />
        )}

        {staff_form === "update_button" && (
          <Form
            style={{ display: "flex" }}
            initialValues={updateform}
            onFinish={updatestaff}
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
                  <Button danger onClick={() => delete_staff(record)}>
                    Delete
                  </Button>
                  <Link to={`/Staff_Charts/${record.id}`}><Button danger>
                    details
                  </Button></Link>
                </>
              ),
            },
          ]}
          dataSource={staff}
          rowKey="id"
          bordered
          scroll={{ x: true }} // Makes it responsive
        />
      </div>
    </div>
  );
}

export default Staff_Tables;



// import React from 'react'

// function Staff_Tables() {
//   return (
//     <div>Staff_Tables</div>
//   )
// }

// export default Staff_Tables