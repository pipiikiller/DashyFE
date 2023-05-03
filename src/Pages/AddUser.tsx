import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Selector } from "../Components/Selector";

// const layout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 24 },
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export function AddUserPage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const onFinish = (values: any) => {
    const data = {
      ...values,
      dob: `${day}/${month}/${year}`,
    };

    console.log(data);
  };

  const handleDayChange = (value: string) => {
    console.log(`Handle Day Change ${value}`);
    setDay(value);
  };

  const handleMonthChange = (value: string) => {
    console.log(`Handle Month Change ${value}`);
    setMonth(value);
  };

  const handleYearChange = (value: string) => {
    console.log(`Handle Year Change ${value}`);
    setYear(value);
  };

  return (
    <div
      style={{
        paddingTop: 30,
        // paddingLeft: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        // {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 400 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "firstName"]}
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "lastName"]}
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "dob"]} label="DOB">
          <Input.Group compact>
            <Selector
              type="day"
              name={["user", "day"]}
              rules={[{ required: true }]}
              onChange={handleDayChange}
            />
            <Selector
              type="month"
              name={["user", "month"]}
              rules={[{ required: true }]}
              onChange={handleMonthChange}
            />
            <Selector
              type="year"
              name={["user", "year"]}
              rules={[{ required: true }]}
              onChange={handleYearChange}
            />
          </Input.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
