import { Fragment } from "react";
import { FieldAttributes } from "formik";

const TextInput = ({
  className,
  field,
  form: { touched, errors },
  ...props
}: {
  className: string;
  field: FieldAttributes<any>;
  form: any;
}) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Fragment>
      <input
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        className={className}
        {...props}
      />

      {hasError && (
        <div className="text-danger text-xs mt-2">{errors[field.name]}</div>
      )}
    </Fragment>
  );
};

export default TextInput;
