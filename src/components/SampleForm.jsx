import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { FormGroup } from "./FormGroup";
import Select from "react-select";

export function SampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: {
      required: { value: true, message: "Country is required" },
    },
  });

  console.log(errors);

  const COUNTRY_OPTIONS = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "Mexico", value: "MX" },
  ];

  function onSubmit(data) {
    console.log(data);
    alert("Success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <FormGroup errorMsg={errors?.email?.message}>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          {...register("email", {
            required: { value: true, message: "Email is required" },
            validate: (value) => {
              if (!value.endsWith("@gkwebs.dev")) {
                return "Must end with @gkwebs.dev";
              }
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMsg={errors?.password?.message}>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: true,
              message: "Length should be atleast 10 chars",
            },
            validate: {
              hasLowerCase: (value) => {
                if (!value.match(/[a-z]/)) {
                  return "Must include atleast 1 lowercase alphabet";
                }
              },
              hasUpperCase: (value) => {
                if (!value.match(/[A-Z]/)) {
                  return "Must include atleast 1 upper alphabet";
                }
              },
              hasNumber: (value) => {
                if (!value.match(/[0-9]/)) {
                  return "Must include atleast 1 number";
                }
              },
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMsg={errors?.country?.message}>
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <Select
          isClearable
          classNamePrefix={"select"}
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>
      <div className="mb-3">
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
  );
}
