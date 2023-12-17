"use client";
import { Button, Form, Input, message } from "antd";
const { TextArea } = Input;

const FormComponent = () => {
  const [form] = Form.useForm();

  const onFinish = async(values) => {
    const message = `New contact form submission:
    Username: ${values.username}
    Email: ${values.email}
    Message: ${values.message}`;
    
    try {
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        message.success("Message sent successfully");
        console.log('Message sent successfully');
      } else {
        message.error('Error sending message');
      }
    } catch (error) {
      console.error(error);
    }
    form.resetFields();
  };


  const onFinishFailed = (errorInfo) => {
    message.error("Message failed to send");
  };

  const onChange = (e) => {};

  return (
    <Form
      form={form}
      size="large"
      name="basic"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: "500px",
        width: "100%",
        margin: "auto",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="message"
        rules={[
          {
            required: true,
            message: "Please input your message",
          },
        ]}
      >
        <TextArea maxLength={100} onChange={onChange} placeholder="Message" />
      </Form.Item>

      <Form.Item>
        <Button className="submit-btn" block type="primary" htmlType="submit">
          SEND
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
