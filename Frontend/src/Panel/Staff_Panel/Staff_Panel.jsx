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
  StaffTotalRevenueGet,
} from "../../Api/CoreApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { FaUser } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Staff_Transactions from "../Staff_Panel/Staff_Transactions"
import { VscGraph } from "react-icons/vsc";
import User_Reg from "../../Authentication/User/User_Reg";


function Staff_Panel() {
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
  console.log(staff, '***** staff *****')


  const get = async () => {
    const staff_response = await UserGet();

    const filter_current_staff = staff_response.filter((i) => i.id === int_id && i.role === 'staff');
    console.log(staff_response, '***** filter_current_staff *****')

    setStaff(filter_current_staff);
    form.setFieldsValue(filter_current_staff[0]);

    const userref_response = await UserGet();
    const filter_ref_user = userref_response.filter(
      (i) => i.ref === filter_current_staff[0].refer);
    // console.log(filter_ref_user,'********* filter_ref_user ********')
    setUserRef(filter_ref_user);

    const StaffTotalRevenueGet_response1 = await StaffTotalRevenueGet();
    const StaffTotalRevenueGet_response = StaffTotalRevenueGet_response1.filter(i => i.staff_id === int_id)

    const filteredUsers_Jan = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "01"
    );
    const total_amount_1 = filteredUsers_Jan.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jan")
        ? prev.map(item =>
          item.month === "Jan" ? { month: "Jan", amount: total_amount_1 } : item
        )
        : [...prev, { month: "Jan", amount: total_amount_1 }]
    );


    const filteredUsers_feb = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "02"
    );
    const total_amount_2 = filteredUsers_feb.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Feb")
        ? prev.map(item =>
          item.month === "Feb" ? { month: "Feb", amount: total_amount_2 } : item
        )
        : [...prev, { month: "Feb", amount: total_amount_2 }]
    );

    const filteredUsers_march = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "03"
    );
    const total_amount_March = filteredUsers_march.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "March")
        ? prev.map(item =>
          item.month === "March" ? { month: "March", amount: total_amount_March } : item
        )
        : [...prev, { month: "March", amount: total_amount_March }]
    );

    const filteredUsers_april = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "04"
    );
    const total_amount_april = filteredUsers_april.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "April")
        ? prev.map(item =>
          item.month === "April" ? { month: "April", amount: total_amount_april } : item
        )
        : [...prev, { month: "April", amount: total_amount_april }]
    );


    const filteredUsers_may = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "05"
    );
    const total_amount = filteredUsers_may.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "May")
        ? prev.map(item =>
          item.month === "May" ? { month: "May", amount: total_amount } : item
        )
        : [...prev, { month: "May", amount: total_amount }]
    );


    const filteredUsers_jun = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "06"
    );
    const total_amount_06 = filteredUsers_jun.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jun")
        ? prev.map(item =>
          item.month === "Jun" ? { month: "Jun", amount: total_amount_06 } : item
        )
        : [...prev, { month: "Jun", amount: total_amount_06 }]
    );


    const filteredUsers_Jully = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "07"
    );
    const total_amount_07 = filteredUsers_Jully.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jully")
        ? prev.map(item =>
          item.month === "Jully" ? { month: "Jully", amount: total_amount_07 } : item
        )
        : [...prev, { month: "Jully", amount: total_amount_07 }]
    );




    const filteredUsers_Aug = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "08"
    );
    const total_amount_08 = filteredUsers_Aug.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Aug")
        ? prev.map(item =>
          item.month === "Aug" ? { month: "Aug", amount: total_amount_08 } : item
        )
        : [...prev, { month: "Aug", amount: total_amount_08 }]
    );


    const filteredUsers_Sept = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "09"
    );
    const total_amount_09 = filteredUsers_Sept.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Sept")
        ? prev.map(item =>
          item.month === "Sept" ? { month: "Sept", amount: total_amount_09 } : item
        )
        : [...prev, { month: "Sept", amount: total_amount_09 }]
    );


    const filteredUsers_Oct = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "10"
    );
    const total_amount_10 = filteredUsers_Oct.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Oct")
        ? prev.map(item =>
          item.month === "Oct" ? { month: "Oct", amount: total_amount_10 } : item
        )
        : [...prev, { month: "Oct", amount: total_amount_10 }]
    );

    const filteredUsers_Nov = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "11"
    );
    const total_amount_11 = filteredUsers_Nov.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Nov")
        ? prev.map(item =>
          item.month === "Nov" ? { month: "Nov", amount: total_amount_11 } : item
        )
        : [...prev, { month: "Nov", amount: total_amount_11 }]
    );

    const filteredUsers_Dec = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "12"
    );
    const total_amount_12 = filteredUsers_Dec.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
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
    Navigate('/Staff_Login')
  }


  return (
    <div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
        </Link>

        {intid ? (
          <Link to='/Staff_Panel'>
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
        <Link to='/Staff_Panel'>
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
        <Link to='/Staff_Added_User'>
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
        <Link to='/Staff_Transactions'>
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
        <Link to='/Staff_Withdrawals'>
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
      <div style={{ display: "flex", marginLeft: '200px', paddingTop: '70px' }}>
        <div style={{ width: "300px", height: "500px", borderRadius: '10px', backgroundColor: 'white', boxShadow: "1px 0.5px 4px gray" }}>
          <div>
            <div
              style={{
                // border: "2px solid",
                width: "60%",
                textAlign: "center",
                marginLeft: "20%",
                height: "150px",
                borderRadius: "20px",
                marginTop: '10px'
              }}
            >
              {/* <p style={{ textAlign: 'center', fontSize: '120px' }}><FaUser /></p> */}
              <p style={{ textAlign: 'center', fontSize: '120px' }}>{staff.map(i => (
                <img style={{ border: '2px solid', width: '176px', height: '147px', marginLeft: '-3px', marginTop: '-3px', borderRadius: '18px' }} src={`${baseurl}${i.pic}`} />
              ))}</p>
              {/* {staff.map(i => (
                <img style={{ textAlign: 'center', fontSize: '50px' }} src={`${baseurl}${i.pic}`} />
              ))} */}

            </div><br />
            <Form form={form} onFinish={updatestaff} style={{ marginLeft: '10px' }}>
              <Form.Item style={{ marginTop: "10px" }} name="username" label='Name'>
                <Input style={{ border: "none", marginLeft: '23px', width: '210px' }} />
              </Form.Item>
              <Form.Item style={{ marginTop: "-20px" }} name="password" label='Password'>
                <Input style={{ border: "none", marginLeft: '-1px', width: '210px' }} />
              </Form.Item>
              <Form.Item style={{ marginTop: "-20px" }} name="balance" label='Balance'>
                <Input style={{ border: "none", marginLeft: '12px', width: '210px' }} readOnly />
              </Form.Item>
              {/* <Form.Item style={{ marginTop: "-20px" }} name="disttrict" label='Disttrict'>
                <Input style={{ border: "none", marginLeft: '16px', width: '210px' }} />
              </Form.Item> */}
              <div
                style={{
                  display: "flex",
                  columnGap: "30px",
                  marginLeft: "38%",

                }}
              >
                <Form.Item>
                  <Button htmlType="submit">Save</Button>
                </Form.Item>
              </div>
              {/* <p style={{fontSize:'22px',marginTop:'30px',marginLeft:'10px',color:'black'}}>Name : {i.username}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Balance : {i.balance}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Disttrict : {i.disttrict}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>password : {i.password}</p> */}
            </Form>
          </div>
        </div>
        <Link to='/Staff_Added_User'><div
          style={{
            // border: "2px solid",
            width: "280px",
            height: "170px",
            marginLeft: "50px",
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: "1px 0.5px 4px gray"
          }}
        >
          <p style={{ textAlign: 'center', fontSize: '40px' }}><FaUser /></p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{userref.length}</p>
        </div></Link>
        <div
          style={{
            // border: "2px solid",
            width: "280px",
            height: "170px",
            marginLeft: "50px",
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: "1px 0.5px 4px gray"
          }}
        >
          <p style={{ textAlign: 'center', fontSize: '40px' }}><FaRupeeSign /></p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{current_month[0]?.amount || ""}</p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{current_month[0]?.month || ""}</p>
        </div>
        {pop === null && (
          <div
            style={{
              // border: "2px solid",
              width: "280px",
              height: "170px",
              marginLeft: "50px",
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: "1px 0.5px 4px gray"
            }}
            onClick={() => setPop('pop')}
          >
            <p style={{ textAlign: 'center', fontSize: '40px', marginTop: '50px' }}><GrTransaction /></p>
          </div>
        )}

        {pop === 'pop' && (
          <div
            style={{
              // border: "2px solid",
              width: "280px",
              height: "170px",
              marginLeft: "50px",
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: "1px 0.5px 4px gray"
            }}
            onClick={() => setPop(null)}
          >
            <p style={{ textAlign: 'center', fontSize: '40px', marginTop: '50px' }}><VscGraph /></p>
          </div>
        )}

      </div>
      {pop === null && (
        <ResponsiveContainer width="68%" height={300} style={{ marginTop: '-250px', marginLeft: '500px' }}>
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
      )}
      {/* {pop === 'pop' && (
        <p style={{ marginTop: '-300px', marginLeft: '520px' }}><Staff_Transactions /></p>
      )} */}
    </div>
  );
}

export default Staff_Panel


// import React from 'react'

// function Staff_Panel() {
//   return (
//     <div>Staff_Panel</div>
//   )
// }

// export default Staff_Panel