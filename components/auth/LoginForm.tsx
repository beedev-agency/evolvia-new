"use client";

import { Formik, Form, FormikValues } from "formik";
import { motion } from "framer-motion";
import Link from "next/link";

import { InputField, Button } from "@/components";
import { login } from "@/app/auth/login/actions";

export const LoginForm = () => {
  const handleSubmit = async (values: FormikValues, { setSubmitting }: any) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      await login(formData);
    } catch (error) {
      console.error("Signup failed", error);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="flex flex-col gap-4">
          <h2 className="text-5xl text-primary uppercase font-semibold whitespace-nowrap mb-10">
            Login
          </h2>
          <InputField type="email" name="email" label="Email" />
          <InputField type="password" name="password" label="Password" />
          <div >
            <div className="mt-2 text-sm md:text-sm">
              Don't have an account? {" "}
              <Link href="/auth/sign-up" className="text-secondary font-bold">
                Sing up
              </Link>
            </div>
            <div className="mt-2 text-sm md:text-sm">
              Forgot your password? {" "}
              <Link href="/auth/forgot-password" className="text-secondary font-black">
                Reset it
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-10 w-full gap-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                variant="secondary"
                text="Login"
                className="!text-base !md:text-xl !py-1 md:py-4 !rounded-md"
              />
            </motion.div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
