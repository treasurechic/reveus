"use client";
import { Fragment } from "react";
import { FieldAttributes } from "formik";
import { Checkbox, Label } from "flowbite-react";

const CustomCheckbox = ({
  className,
  field,
  form: { touched, errors },
  label,
  labelClassname,
}: {
  className: string;
  field: FieldAttributes<any>;
  form: any;
  label: string;
  labelClassname: string;
}) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Fragment>
      <div className="flex items-center gap-2">
        <Checkbox
          id={field.id}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={`w-[1.6rem] h-[1.6rem] ${className}`}
          
        />
        <Label htmlFor={field.id}
          className={`text-xl font-bold text-white ${labelClassname}`}
        >
          {label}
        </Label>
      </div>
      {hasError && (
        <div className="text-danger text-xs">{errors[field.name]}</div>
      )}
    </Fragment>
  );
};

export default CustomCheckbox;
