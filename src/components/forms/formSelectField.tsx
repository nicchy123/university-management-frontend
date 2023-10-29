"use client";
import {  Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
type selectField = {
  label: string;
  value: string;
};
type SelectFieldOptionsType = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  options: selectField[];
  label?: string;
  defaultValue?: selectField;
};

const FormSelectField = ({
  name,
  label,
  options,
  size,
    placeholder
}: SelectFieldOptionsType) => {
  const { control } = useFormContext();

  return (
    <>
      <p style={{ marginBottom: "5px" }}> {label ? label : null}</p>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            value={value}
            placeholder={placeholder}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
