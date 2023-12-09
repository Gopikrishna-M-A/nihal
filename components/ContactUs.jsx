'use client';
import { Button, Form, Input, message } from "antd";
const { TextArea } = Input;





const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log("Success:", values);
    message.success('Message sent successfully');
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    message.error('Message failed to send');
  };
  
  const onChange = (e) => {
  };


  return (
    <div className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="sec-title">Contact Us</div>

        <Form
          form={form}
          size='large'
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
            <Input placeholder='Your Name'/>
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
            <Input placeholder='Email'/>
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
            <TextArea  maxLength={100} onChange={onChange} placeholder="Message" />

          </Form.Item>


          <Form.Item
          >
            <Button className="submit-btn" block type="primary" htmlType="submit">
              SEND
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
