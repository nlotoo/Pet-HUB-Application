import { Form, Input, Button, Card, } from 'antd';
import './loginPage.css'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-card'>


      <Card title="Login" className='inside-login-card'  style={{ width: 700 }} >

        <Form
          name="loginForm"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 6,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 10,
            }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>


  );
};

export default LoginForm;