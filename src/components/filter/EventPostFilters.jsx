import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const EventPostFilters = ({
  filters,
  limit,
  onFilterChange,
  onLimitChange,
  labels,
}) => {
  return (
    <div className="flex gap-4 mb-4">
      <Input
        placeholder={labels.category}
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
        className="w-1/4"
      />
      <Input
        placeholder={labels.location}
        value={filters.location}
        onChange={(e) => onFilterChange("location", e.target.value)}
        className="w-1/4"
      />
      {labels.urgency_level && (
        <Select
          placeholder={labels.urgency_level}
          value={filters.urgency_level || undefined}
          onChange={(value) => onFilterChange("urgency_level", value)}
          className="w-1/4"
          allowClear
        >
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="urgent">Urgent</Option>
        </Select>
      )}
      {labels.status && (
        <Select
          placeholder={labels.status}
          value={filters.status || undefined}
          onChange={(value) => onFilterChange("status", value)}
          className="w-1/4"
          allowClear
        >
          <Option value="open">Open</Option>
          <Option value="closed">Closed</Option>
        </Select>
      )}
      <Select
        value={filters.all ? "all" : limit.toString()}
        onChange={(value) => {
          if (value === "all") {
            onFilterChange("all", true);
          } else {
            onFilterChange("all", false);
            onLimitChange(Number(value));
          }
        }}
        className="w-1/4"
      >
        <Option value="5">5 per page</Option>
        <Option value="10">10 per page</Option>
        <Option value="15">15 per page</Option>
        <Option value="all">All</Option>
      </Select>
    </div>
  );
};

export default EventPostFilters;
