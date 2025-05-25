import React from 'react'
import { Form, Button, Input, Card, message } from 'antd'
import { UserLogin } from '../../Api/CoreApi'
import { useNavigate } from 'react-router-dom'

function Staff_Login() {
  const Navigate = useNavigate()
  const submit = async (i) => {
    const response = await UserLogin(i)
    if (response.msg === 'Login Successful') {
      localStorage.setItem('access_token', response.token.access)
      localStorage.setItem('refresh_token', response.token.refresh)
      localStorage.setItem('role', response.role)
      localStorage.setItem('user_id', response.user_id)
      message.success('success')
      Navigate('/Staff_Panel')
    } else {
      message.error('try again')
    }
    // Store actual username

    // console.log(response.msg, '******* i ********')
  }

  return (
    <div style={{ height: '748px', width: '100%', paddingTop: '10%' }}>
      <Card style={{ width: '40%', marginLeft: '35%' }}>
        <Form onFinish={submit}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
            <Input style={{ width: '90%' }} />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
            <Input type="password" style={{ width: '90%' }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ display: 'block', margin: '0 auto' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Staff_Login