import React from "react";

import { Form, Button } from "antd";

import { useCreateEventMutation } from "../api/createEventApi";
import CreateEventFormInputs from "./CreateEventFormInputs";
import toast from "react-hot-toast";

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
      toast.success("Event created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      const errorMessage = error.data?.message || "Unknown error";
      toast.error(`Failed to create event: ${errorMessage}`);
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
