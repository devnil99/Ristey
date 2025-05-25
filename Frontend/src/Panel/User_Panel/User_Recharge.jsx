// import React from 'react'
// import { Button } from 'antd'

// function User_Recharge() {
//   return (
//     <div>
//       <div style={{display:'flex',columnGap:'0px'}}>
//         <div style={{ border: '2px solid', width: '350px', marginLeft: '10%',borderRadius:'6px' }}>
//           <p style={{border: '2px solid',height:'100px',fontSize:'18px'}}>Silver</p>
//           <p style={{color:'black',fontSize:'16px'}}>* 4 Member</p>
//           <p style={{color:'black',fontSize:'16px'}}>* 24*7 Support</p>
//           <p style={{textAlign:'center'}}>
//             <Button style={{width:'80%'}}>Subscribe</Button>
//           </p>
//         </div>
//         <div style={{ border: '2px solid', width: '350px', marginLeft: '5%',borderRadius:'6px' }}>
//           <p>Gold</p>
//         </div>
//         <div style={{ border: '2px solid', width: '350px', marginLeft: '5%',borderRadius:'6px' }}>
//           <p>Diamond</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default User_Recharge


import React, { useEffect, useState } from "react";
import { Button, message } from 'antd'
import { UserGet, UserUpdate, UserTransactionsPost } from "../../Api/CoreApi";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  // Button,
  Grid,
  Divider,
} from '@mui/material';

const User_Recharge = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const user_id = localStorage.getItem("user_id");
  const plans = [
    {
      title: 'Silver',
      price: 200,
      features: [
        'Unlimited profile access',
        'View 8 profile contact details',
        '24/7 customer care support',
        '100% real and live Profile',
        'Profile Matches Features',
        'Email Matches Updates',
      ],
    },
    {
      title: 'Gold',
      price: 500,
      features: [
        'Unlimited profile access',
        'View 20 profile contact details',
        '24/7 customer care support',
        '100% real and live Profile',
        'Profile Matches Features',
        'Email Matches Updates',
      ],
    },
    {
      title: 'Platinum',
      price: 1000,
      features: [
        'Unlimited profile access',
        'View 40 profile contact details',
        '24/7 customer care support',
        '100% real and live Profile',
        'Profile Matches Features',
        'Email Matches Updates',
      ],
    },
  ];
  // Fetch user info
  const fetchUser = async () => {
    const allUsers = await UserGet();
    const currentUser = allUsers.find(u => u.id === user_id);
    setUser(currentUser);
  };

  // Add Razorpay script
  useEffect(() => {
    fetchUser();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleVerify = async (paymentData, amount) => {
    const res = await fetch("http://127.0.0.1:8000/verify-payment/", {
      method: "POST",
      body: new URLSearchParams(paymentData),
    });
    const result = await res.json();

    if (result.status === 'Payment verified') {
      const updatedBalance = parseInt(user.balance) + parseInt(amount);
      await UserUpdate(user_id, { balance: updatedBalance });
      await UserTransactionsPost({ user_id: user_id, amount, type: 'Recharge', status: 'done' });
      message.success("Recharge successful!");
    } else {
      alert("Payment verification failed.");
    }
  };

  const makePayment = async (amount) => {
    const res = await fetch("http://127.0.0.1:8000/create-order/", {
      method: "POST",
      body: new URLSearchParams({ amount }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const order = await res.json();

    if (!order.id) return alert("Error creating order!");

    const options = {
      key: "rzp_test_NxUdo9RFPdEr8W",
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "Recharge",
      description: "Balance Top-up",
      handler: (response) => handleVerify(response, amount),
      prefill: {
        name: user?.username,
        email: user?.email,
        contact: user?.contact,
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const log_out = () => {
    localStorage.removeItem("user_id");
    navigate("/User_Login");
  };

  return (
    <div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
        </Link>

        {user_id ? (
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
      {/* <Button
        style={{
          width: '10%',
        }}
        onClick={handlePayment}
      >
        Pay ₹{amount}
      </Button> */}
      <Box
        sx={{
          padding: { xs: 3, sm: 6 },
          textAlign: 'center',
          maxWidth: 1200,
          margin: 'auto',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 5, color: '#222' }}
        >
          Membership Plans
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <Card
                sx={{
                  minHeight: 380,
                  maxWidth: '100%',
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 4,
                  boxShadow:
                    index === 1
                      ? '0 8px 20px rgba(255, 193, 7, 0.4)' // Gold glow for the middle plan
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)'
                      : index === 1
                        ? 'linear-gradient(135deg, #fff8e1 0%, #ffe082 100%)'
                        : 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow:
                      '0 12px 30px rgba(0, 0, 0, 0.25)',
                  },
                }}
              >
                <CardContent
                  sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={index === 1 ? 'warning.main' : 'text.primary'}
                    sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
                  >
                    {plan.title}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="primary"
                    sx={{ letterSpacing: 2 }}
                  >
                    {plan.price.toLocaleString()} ₹
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ ml: 1, fontWeight: 'normal' }}
                    >
                    </Typography>
                  </Typography>

                  <Divider sx={{ borderColor: 'divider' }} />

                  <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                    {plan.features.map((feature, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
                      >
                        {/* You can add an icon here */}
                        • {feature}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant={index === 1 ? 'contained' : 'outlined'}
                    color={index === 1 ? 'warning' : 'primary'}
                    fullWidth
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '1rem',
                      mt: 2,
                      boxShadow: index === 1 ? '0 4px 15px rgba(255, 193, 7, 0.4)' : 'none',
                      '&:hover': {
                        boxShadow: index === 1 ? '0 6px 20px rgba(255, 193, 7, 0.6)' : 'none',
                      },
                    }}
                    onClick={() => makePayment(plan.price)}
                  >


                    Pay Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>

  )

};

export default User_Recharge;


