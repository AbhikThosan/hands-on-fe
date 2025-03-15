import React from "react";

import { Form, Button, message } from "antd";

import { useCreateEventMutation } from "../api/createEventApi";
import CreateEventFormInputs from "./CreateEventFormInputs";

function CreateEventForm({ onClose }) {
  const [form] = Form.useForm();
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const onFinish = async (values) => {
    try {
      const eventData = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("YYYY-MM-DDTHH:mm:ssZ"),
        category: capitalizeWords(values.category),
      };
      await createEvent(eventData).unwrap();
      message.success("Event created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error(
        "Failed to create event: " + (error.data?.message || "Unknown error")
      );
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <CreateEventFormInputs />

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateEventForm;
