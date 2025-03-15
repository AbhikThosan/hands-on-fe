import React from "react";
import { Input, Select, DatePicker } from "antd";
import moment from "moment";

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
      <DatePicker
        onChange={(date, dateString) => onFilterChange("date", dateString)}
        value={filters.date ? moment(filters.date) : null}
        className="w-1/4"
      />
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
