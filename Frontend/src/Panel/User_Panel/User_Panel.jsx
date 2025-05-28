import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, message } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
  UserTotalRevenueGet,
} from "../../Api/CoreApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { FaUser,FaBars  } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Staff_Transactions from "../Staff_Panel/Staff_Transactions"
import { VscGraph } from "react-icons/vsc";
import User_Reg from "../../Authentication/User/User_Reg";
import Test from "../../Test";

function User_Panel() {
  const baseurl = 'http://127.0.0.1:8000/'
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const intid = localStorage.getItem('user_id')
  const int_id = String(intid)
  // const int_id = (id);
  // console.log( int_id, "********* int_id ********");

  const [staff, setStaff] = useState([]);
  const [cmonth_revenue, setCMonth_revenue] = useState([]);
  const [pop, setPop] = useState(null)
  const [userref, setUserRef] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(staff, '***** staff *****')


  const get = async () => {
    const staff_response = await UserGet();

    const filter_current_staff = staff_response.filter((i) => i.id === int_id && i.role === 'user');
    console.log(filter_current_staff, '***** filter_current_staff *****')

    setStaff(filter_current_staff);
    form.setFieldsValue(filter_current_staff[0]);

    const userref_response = await UserGet();
    const filter_ref_user = userref_response.filter(
      (i) => i.ref === filter_current_staff[0].refer);
    // console.log(filter_ref_user,'********* filter_ref_user ********')
    setUserRef(filter_ref_user);

    const UserTotalRevenueGet_response1 = await UserTotalRevenueGet();
    const UserTotalRevenueGet_response = UserTotalRevenueGet_response1.filter(i => i.user_id === int_id)
    console.log(UserTotalRevenueGet_response, '******* UserTotalRevenueGet_response ******')
    const filteredUsers_Jan = UserTotalRevenueGet_response.filter(
      (i) => i.month === "01"
    );
    const total_amount_1 = filteredUsers_Jan.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jan")
        ? prev.map(item =>
          item.month === "Jan" ? { month: "Jan", amount: total_amount_1 } : item
        )
        : [...prev, { month: "Jan", amount: total_amount_1 }]
    );


    const filteredUsers_feb = UserTotalRevenueGet_response.filter(
      (i) => i.month === "02"
    );
    const total_amount_2 = filteredUsers_feb.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Feb")
        ? prev.map(item =>
          item.month === "Feb" ? { month: "Feb", amount: total_amount_2 } : item
        )
        : [...prev, { month: "Feb", amount: total_amount_2 }]
    );

    const filteredUsers_march = UserTotalRevenueGet_response.filter(
      (i) => i.month === "03"
    );
    const total_amount_March = filteredUsers_march.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "March")
        ? prev.map(item =>
          item.month === "March" ? { month: "March", amount: total_amount_March } : item
        )
        : [...prev, { month: "March", amount: total_amount_March }]
    );

    const filteredUsers_april = UserTotalRevenueGet_response.filter(
      (i) => i.month === "04"
    );
    const total_amount_april = filteredUsers_april.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "April")
        ? prev.map(item =>
          item.month === "April" ? { month: "April", amount: total_amount_april } : item
        )
        : [...prev, { month: "April", amount: total_amount_april }]
    );


    const filteredUsers_may = UserTotalRevenueGet_response.filter(
      (i) => i.month === "05"
    );
    const total_amount = filteredUsers_may.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "May")
        ? prev.map(item =>
          item.month === "May" ? { month: "May", amount: total_amount } : item
        )
        : [...prev, { month: "May", amount: total_amount }]
    );


    const filteredUsers_jun = UserTotalRevenueGet_response.filter(
      (i) => i.month === "06"
    );
    const total_amount_06 = filteredUsers_jun.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jun")
        ? prev.map(item =>
          item.month === "Jun" ? { month: "Jun", amount: total_amount_06 } : item
        )
        : [...prev, { month: "Jun", amount: total_amount_06 }]
    );


    const filteredUsers_Jully = UserTotalRevenueGet_response.filter(
      (i) => i.month === "07"
    );
    const total_amount_07 = filteredUsers_Jully.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jully")
        ? prev.map(item =>
          item.month === "Jully" ? { month: "Jully", amount: total_amount_07 } : item
        )
        : [...prev, { month: "Jully", amount: total_amount_07 }]
    );




    const filteredUsers_Aug = UserTotalRevenueGet_response.filter(
      (i) => i.month === "08"
    );
    const total_amount_08 = filteredUsers_Aug.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Aug")
        ? prev.map(item =>
          item.month === "Aug" ? { month: "Aug", amount: total_amount_08 } : item
        )
        : [...prev, { month: "Aug", amount: total_amount_08 }]
    );


    const filteredUsers_Sept = UserTotalRevenueGet_response.filter(
      (i) => i.month === "09"
    );
    const total_amount_09 = filteredUsers_Sept.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Sept")
        ? prev.map(item =>
          item.month === "Sept" ? { month: "Sept", amount: total_amount_09 } : item
        )
        : [...prev, { month: "Sept", amount: total_amount_09 }]
    );


    const filteredUsers_Oct = UserTotalRevenueGet_response.filter(
      (i) => i.month === "10"
    );
    const total_amount_10 = filteredUsers_Oct.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Oct")
        ? prev.map(item =>
          item.month === "Oct" ? { month: "Oct", amount: total_amount_10 } : item
        )
        : [...prev, { month: "Oct", amount: total_amount_10 }]
    );

    const filteredUsers_Nov = UserTotalRevenueGet_response.filter(
      (i) => i.month === "11"
    );
    const total_amount_11 = filteredUsers_Nov.map(i => i.user_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Nov")
        ? prev.map(item =>
          item.month === "Nov" ? { month: "Nov", amount: total_amount_11 } : item
        )
        : [...prev, { month: "Nov", amount: total_amount_11 }]
    );

    const filteredUsers_Dec = UserTotalRevenueGet_response.filter(
      (i) => i.month === "12"
    );
    const total_amount_12 = filteredUsers_Dec.map(i => i.user_amount).reduce((total, current) => total + current, 0);
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
  console.log(current_month, '****** todayMonth ******')

  useEffect(() => {
    get();
  }, []);

  const updatestaff = async (i) => {
    try {
      const response = await UserUpdate(int_id, i);
      if (response) {  // Ensure response is valid
        const staff_filter = response.filter(i => i.id === int_id)
        setStaff(staff_filter);
        message.success('Success');
      } else {
        message.error('Update failed!'); // Handle failure case
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      message.error('Something went wrong!');
    }
  };

  const log_out = () => {
    localStorage.removeItem('user_id')
    Navigate('/User_Login')
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const btnStyle = {
  width: '150px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  // backgroundColor: '#076E94',
  color: 'black',
  padding: '10px 15px',
  borderRadius: '6px',
  fontSize: '14px'
};

const cardStyle = {
  width: '250px',
  height: '150px',
  backgroundColor: 'white',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer'
};

const iconStyle = {
  fontSize: '30px',
  color: '#076E94',
  marginBottom: '10px'
};

const countStyle = {
  fontSize: '20px',
  margin: 0,
  color: '#333'
};


  return (
  <div>
  {/* Top Navbar */}
  <div style={{
    width: '100%',
    height: '50px',
    backgroundColor: 'rgba(7, 110, 148,1)',
    position: 'fixed',
    zIndex: '999',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      {/* Toggle Button */}
      <Button onClick={toggleSidebar} style={{ background: 'white', color: '#076E94' }}>
        ☰
      </Button>
      <Link to='/Home_Page_wLog'>
        <p style={{ fontSize: '24px', color: 'white', margin: 0 }}>Ristey</p>
      </Link>
    </div>

    {intid ? (
      <Link to='/User_Panel'>
        <p style={{ fontSize: '15px', color: 'white' }}>Profile</p>
      </Link>
    ) : (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to='/User_Reg/885695'><p style={{ fontSize: '15px', color: 'white' }}>Sign Up</p></Link>
        <Link to='/User_Login'><p style={{ fontSize: '15px', color: 'white' }}>Login</p></Link>
      </div>
    )}
  </div>

  {/* Sidebar */}
  <div style={{
    width: sidebarOpen ? "180px" : "50px",
    height: '100vh',
    backgroundColor: 'white',
    position: 'fixed',
    top: '50px',
    left: 0,
    overflowY: 'auto',
    transition: 'width 0.3s ease',
    padding: '10px',
    zIndex: 998
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Link to='/User_Panel'><Button style={btnStyle}>{sidebarOpen ? "Dashboard" : "D"}</Button></Link>
      <Link to='/User_Added_User'><Button style={btnStyle}>{sidebarOpen ? "User" : "U"}</Button></Link>
      <Link to='/User_Recharge'><Button style={btnStyle}>{sidebarOpen ? "Recharge" : "R"}</Button></Link>
      <Link to='/User_Transaction_User'><Button style={btnStyle}>{sidebarOpen ? "Transaction" : "T"}</Button></Link>
      <Link to='/User_Withdrawal_User'><Button style={btnStyle}>{sidebarOpen ? "Withdrawal" : "W"}</Button></Link>
      <Button style={btnStyle} onClick={log_out}>{sidebarOpen ? "Log Out" : "L"}</Button>
    </div>
  </div>

  {/* Main Content */}
  <div style={{
    marginLeft: sidebarOpen ? '200px' : '70px',
    paddingTop: '70px',
    paddingRight: '20px',
    display: "flex",
    flexWrap: 'wrap',
    gap: '20px',
    transition: 'margin 0.3s ease'
  }}>
    {/* Profile Box */}
    <div style={{
      width: "300px",
      minHeight: "500px",
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: "1px 0.5px 4px gray",
      padding: '10px'
    }}>
      <div style={{ textAlign: "center" }}>
        {staff.map(i => (
          <img key={i.id}
            style={{
              border: '2px solid',
              width: '176px',
              height: '147px',
              borderRadius: '18px'
            }}
            src={`${baseurl}${i.pic}`}
            alt="Profile"
          />
        ))}
      </div>
      <br />
      <Form form={form} onFinish={updatestaff} style={{ marginLeft: '10px' }}>
        <Form.Item name="username" label='Name'>
          <Input />
        </Form.Item>
        <Form.Item name="password" label='Password'>
          <Input />
        </Form.Item>
        <Form.Item name="balance" label='Balance'>
          <Input readOnly />
        </Form.Item>
        <div style={{ display: "flex", columnGap: "10px", justifyContent: 'center' }}>
          <Form.Item><Button htmlType="submit">Save</Button></Form.Item>
          <Form.Item><Link to='/User_Profile_User'><Button>Profile</Button></Link></Form.Item>
        </div>
      </Form>
    </div>

    {/* Cards Section */}
    <Link to='/Staff_Added_User'>
      <div style={cardStyle}>
        <p style={iconStyle}><FaUser /></p>
        <p style={countStyle}>{userref.length}</p>
      </div>
    </Link>

    <div style={cardStyle}>
      <p style={iconStyle}><FaRupeeSign /></p>
      <p style={countStyle}>{current_month[0]?.amount || "0"}</p>
      <p style={countStyle}>{current_month[0]?.month || ""}</p>
    </div>

    <div
      style={cardStyle}
      onClick={() => setPop(pop === null ? 'pop' : null)}
    >
      <p style={iconStyle}>{pop === null ? <GrTransaction /> : <VscGraph />}</p>
    </div>
  </div>

  {/* Chart Section */}
  {pop === null && (
    <div style={{ width: '100%', marginLeft: sidebarOpen ? '200px' : '70px', padding: '20px' }}>
      <ResponsiveContainer width="100%" height={300}>
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
    </div>
  )}
</div>


  );
}


export default User_Panel