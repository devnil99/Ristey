import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, Select, message } from "antd";
import { UserGet, UserPost, UserUpdate, UserRemove } from "../../Api/CoreApi";
import User_Reg from "../../Authentication/User/User_Reg";
import "../User_Panel/User_Added.css";
const { Option } = Select;

function User_Added_User() {
  const Navigate = useNavigate();

  const [user, setuser] = useState([]);
  const [staff, setStaff] = useState([]);
  const [user_form, setuser_form] = useState(null);
  const [updateform, setUpdateform] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const id = localStorage.getItem("user_id");
  const int_id = String(id);

  console.log(staff, "****** id ****");

  // const id = ((staffid))
  const get = async () => {
    const staff_response = await UserGet();
    const current_staff = staff_response.filter((i) => i.id === id);
    setStaff(current_staff);
    // console.log(current_staff, "****** current_staff ****");
    const userdata = staff_response.filter(
      (i) => i.ref === current_staff[0].refer
    );
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
    localStorage.removeItem("user_id");
    Navigate("/User_Login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      {/* Top Navbar */}
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

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "50px",
          width: "95%", // makes the container adapt to screen width
          maxWidth: "1200px", // limits width on larger screens
        }}
      >
        {user_form === null && (
          <Button
            style={{
              float: "right",
              marginBottom: "20px",
              width: "120px",
              minWidth: "100px",
              marginTop:"20px"
            }}
            onClick={() => setuser_form("add")}
          >
            Add user
          </Button>
        )}

        {user_form === "add" && <User_Reg />}

        <div style={{ clear: "both" }}></div>

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
          ]}
          dataSource={user}
          rowKey="id"
          bordered
          scroll={{ x: true }} // Enables horizontal scroll if needed on smaller screens
          style={{
            marginTop: "30px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default User_Added_User;
