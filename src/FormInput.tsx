import React from "react";
import { ReactNode } from "react";

interface FormInputProps {
  children: ReactNode;
}

export const FormInput = (props: FormInputProps) => {
  return <input data-formel-id="form-input" />;
};
