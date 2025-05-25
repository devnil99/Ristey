import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { PostChargesGet, PostChargesUpdate } from '../../Api/CoreApi'

function Post_Commission() {
    const Navigate = useNavigate();

    const admin_id = localStorage.getItem('user_id')
    const [charges, setCharges] = useState([])
    const [form] = Form.useForm();
    console.log(charges, '***** charges ****')

    const get = async () => {
        const response = await PostChargesGet()
        setCharges(response)
        form.setFieldsValue(response[0]);
    }

    useEffect(() => {
        get()
    }, [])

    const update = async (value) => {
        try {
            const response = await PostChargesUpdate(value.id, value);
            setCharges(response);
            message.success("Post charges updated successfully!"); // Message triggered here
        } catch (error) {
            message.error("Failed to update post charges!");
        }

    }

    const log_out = () => {
        localStorage.removeItem('Staff')
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
            <div style={{ paddingTop: '100px' }}>
                <div style={{ marginLeft: '400px', width: '830px', height: '350px', paddingLeft: '150px', paddingTop: '40px', borderRadius: '10px', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)", backgroundColor: 'white' }}>
                    <Form form={form} onFinish={update} style={{ height: '240px', width: '550px', marginTop: '10px', paddingTop: '25px', paddingLeft: '30px', borderRadius: '10px', boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)", backgroundColor: 'white' }}>
                        <Form.Item name='id' label='id'>
                            <Input style={{ marginLeft: '95px', width: '300px' }} readOnly />
                        </Form.Item>
                        <Form.Item name='post_charges' label='post_charges'>
                            <Input style={{ marginLeft: '23px', width: '300px' }} />
                        </Form.Item>
                        <Form.Item name='staff_commission' label='staff_commission'>
                            <Input style={{ width: '300px' }} />
                        </Form.Item>
                        <Form.Item style={{ marginLeft: '240px' }}>
                            <Button htmlType='submit'>Save</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Post_Commission