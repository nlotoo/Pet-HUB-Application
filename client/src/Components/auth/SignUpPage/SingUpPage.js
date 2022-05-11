import { Form, Input, Button, Card, } from 'antd';
import './signUpPage.css'

const SingUpPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='sign-up-card'>


            <Card title="Sign up" className='inside-sign-up-card' style={{ width: 700 }} >

                <Form
                    name="Sign up"
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
                        name="Username"
                        rules={[
                            {
                                min: 4,
                                required: true,
                                messageWarning: 'Please input your username!',
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
                                min: 6,
                                required: true,
                                message: 'Your password  must be at least 6 characters!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Confirm password"
                        name="rePassword"
                        dependencies={['password']}
                        rules={[
                            {
                                min: 6,
                                required: true,
                                message: false,
                                // message: 'Please input your comfirm password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),

                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="User email"
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input your corecly email'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone number"
                        name="phoneNumber"
                        rules={[{
                            required: true,
                            message: "Please input your phone number"
                        }]}
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 10,
                        }}>
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    )
}

export default SingUpPage