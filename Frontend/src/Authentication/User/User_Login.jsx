// import React, { useState } from "react";
// import { Form, Button, Input, Card, message } from "antd";
// import { UserLogin, User_forget_password } from "../../Api/CoreApi";
// import { Link, useNavigate } from "react-router-dom";
// import { set } from "date-fns/fp";

// function User_Login() {
//   const id_navigate = localStorage.getItem('id_navigate');

//   const Navigate = useNavigate()
//   const [forget, setForget] = useState(1)

//   const submit = async (i) => {
//     const response = await UserLogin(i)
//     console.log(response, '******* response **********')

//     if (response?.token?.access) {
//       // ✅ Store token and role in localStorage
//       localStorage.setItem('access_token', response.token.access)
//       localStorage.setItem('refresh_token', response.token.refresh)
//       localStorage.setItem('role', response.role)
//       localStorage.setItem('user_id', response.user_id)
//       localStorage.setItem('ref', response.refer)

//       message.success('Login Successful')

//       if (id_navigate) {
//         Navigate(`/User_Data/${id_navigate}`);
//       } else {
//         Navigate('/Home_Page_Log')

//       }
//     } else {
//       message.error('Invalid Credentials')
//     }
//   }

//   const forget_password = async (i) => {
//     const response = await User_forget_password(i)
//     alert("Check your mail! 📩");
//     // console.log(response, "******* response ********");
//   };




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
//         paddingTop: "280px",
//       }}
//     >

//       <Card style={{
//         width: "600px",
//         padding: "30px",
//         marginTop: "-350px",
//         borderRadius: "15px",
//         background: "rgba(255, 255, 255, 0.85)",
//         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//       }}>

//         <div style={{ textAlign: "center" }}>
//           <h2>Login Form </h2>
//           <br />
//         </div>

//         {forget === 1 ? (
//           <Form onFinish={submit}>
//             <Form.Item
//               label="Username"
//               name="username"
//               rules={[{ required: true, message: "Please enter your username!" }]}
//             >
//               <Input style={{ width: "90%" }} />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[{ required: true, message: "Please enter your password!" }]}
//             >
//               <Input type="password" style={{ width: "90%" }} />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ display: "block", margin: "0 auto" }}
//               >
//                 Submit
//               </Button>
//             </Form.Item>
//             <Link><p style={{ margin: "0 auto", border: 'none', marginLeft: '90px', marginTop: '-70px' }}>Signup</p></Link>

//             <Link><p style={{ margin: "0 auto", border: 'none', marginLeft: '350px', marginTop: '-19px' }} onClick={() => setForget(2)}>forgrt password</p></Link>
//           </Form>
//         ) : (
//           <Form onFinish={forget_password}>
//             <Form.Item
//               label="email"
//               name="recipient"
//               rules={[{ required: true, message: "Please enter your email!" }]}
//             >
//               <Input style={{ width: "90%" }} />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ display: "block", margin: "0 auto" }}
//               >
//                 Send
//               </Button>
//             </Form.Item>
//           </Form>
//         )}
//       </Card>
//     </div>
//   );
// }

// export default User_Login;



import React, { useState } from "react";
import { Form, Button, Input, Card, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin, User_forget_password } from "../../Api/CoreApi";

const { Title, Text } = Typography;

function User_Login() {
  const id_navigate = localStorage.getItem("id_navigate");
  const navigate = useNavigate();
  const [forget, setForget] = useState(1);

  const submit = async (values) => {
    const response = await UserLogin(values);

    if (response?.token?.access) {
      localStorage.setItem("access_token", response.token.access);
      localStorage.setItem("refresh_token", response.token.refresh);
      localStorage.setItem("role", response.role);
      localStorage.setItem("user_id", response.user_id);
      localStorage.setItem("ref", response.refer);
      message.success("Login Successful");

      navigate(id_navigate ? `/User_Data/${id_navigate}` : "/Home_Page_Log");
    } else {
      message.error("Invalid Credentials");
    }
  };

  const forget_password = async (values) => {
    await User_forget_password(values);
    message.success("Check your mail 📩");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 500,
          padding: 24,
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>{forget === 1 ? "Login" : "Forgot Password"}</Title>
        </div>

        {forget === 1 ? (
          <Form layout="vertical" onFinish={submit}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please enter your username" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/Sign_Up">Don't have an account?</Link>
              <Text
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => setForget(2)}
              >
                Forgot password?
              </Text>
            </div>
          </Form>
        ) : (
          <Form layout="vertical" onFinish={forget_password}>
            <Form.Item
              label="Email"
              name="recipient"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Send Reset Link
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Button type="link" onClick={() => setForget(1)}>
                Back to Login
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}

export default User_Login;
