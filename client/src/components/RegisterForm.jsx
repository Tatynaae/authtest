import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const res = await axios.post('http://localhost:3000/user', values);
      message.success('Successful registration');
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (e) {
      const errorMsg = e.response?.data?.error || 'Login error';
      form.setFields([
        {
          name: 'email',
          errors: [errorMsg],
        },
        {
          name: 'password',
          errors: [errorMsg],
        },
      ]);
    }
  };

  return (
   <div className='container'>
        <Form 
            form={form}
            name="register" 
            onFinish={onFinish} 
            layout="vertical"
            style={{ maxWidth: '400px', margin: '0 auto' }}
        >
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">Register</Button>
        </Form>
        <nav>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </nav>
    </div>
  );
};

export default RegisterForm;
