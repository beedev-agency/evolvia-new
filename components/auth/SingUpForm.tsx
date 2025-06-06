"use client";

import { Formik, Form, FormikValues } from "formik";
import { motion } from "framer-motion";

import { InputField, Button } from "@/components";
import { signup } from "@/app/auth/sign-up/actions";

export const SignUpForm = () => {
  const handleSubmit = async (values: FormikValues, { setSubmitting }: any) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      await signup(formData);
    } catch (error) {
      console.error("Signup failed", error);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <h2 className="text-5xl text-primary uppercase font-semibold  mb-10">
              Register you Account
            </h2>
            <InputField type="email" name="email" label="Email" />
            <InputField type="password" name="password" label="Password" />
            <div className="flex justify-end mt-10 w-full gap-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  variant="secondary"
                  text="Register"
                  className="!text-base !md:text-xl !py-1 md:py-4 !rounded-md"
                />
              </motion.div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
