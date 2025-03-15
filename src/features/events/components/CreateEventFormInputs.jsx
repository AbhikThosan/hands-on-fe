import React from "react";
import { Form, Input, DatePicker } from "antd";
import { CREATW_EVENT_FORM_INPUTS } from "../constant/createEventForm.const";

const CreateEventFormInputs = () => {
  return (
    <>
      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.TITLE}
        label="Title"
        rules={[{ required: true, message: "Please enter the event title" }]}
      >
        <Input placeholder="Event Title" />
      </Form.Item>

      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.DESCRIPTION}
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea rows={4} placeholder="Event Description" />
      </Form.Item>

      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.DATE}
        label="Date"
        rules={[{ required: true, message: "Please select a date" }]}
      >
        <DatePicker className="w-full" />
      </Form.Item>

      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.TIME}
        label="Time"
        rules={[{ required: true, message: "Please select a time" }]}
      >
        <DatePicker.TimePicker className="w-full" format="HH:mm:ss" />
      </Form.Item>

      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.LOCATION}
        label="Location"
        rules={[{ required: true, message: "Please enter the location" }]}
      >
        <Input placeholder="Event Location" />
      </Form.Item>

      <Form.Item
        name={CREATW_EVENT_FORM_INPUTS.CATEGORY}
        label="Category"
        rules={[{ required: true, message: "Please enter a category" }]}
      >
        <Input placeholder="Event Category" />
      </Form.Item>
    </>
  );
};

export default CreateEventFormInputs;
