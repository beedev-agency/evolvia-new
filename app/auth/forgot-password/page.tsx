"use client";

import { Formik, Form, FormikValues } from "formik";
import { motion } from "framer-motion";
import { Metadata } from "next";

import { InputField, Button } from "@/components";
import { signup } from "@/app/auth/sign-up/actions";

export const metadata: Metadata = {
  title: "Reset Password | Your Site Name",
  description: "Reset your password securely. Enter your email address to receive password reset instructions.",
  robots: "noindex, nofollow", // Since this is a private page
  openGraph: {
    title: "Reset Password | Your Site Name",
    description: "Reset your password securely. Enter your email address to receive password reset instructions.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Reset Password | Your Site Name",
    description: "Reset your password securely. Enter your email address to receive password reset instructions.",
  }
};

export default function ForgotPasswordPage() {
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
    <main className="container mx-auto px-4 py-8">
      <article>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-4 max-w-md mx-auto" aria-label="Reset password form">
              <header>
                <h1 className="text-5xl text-primary uppercase font-semibold mb-4">
                  Reset your password
                </h1>
                <p className="text-gray-600 mb-6">
                  Enter your email address below and we'll send you instructions to reset your password.
                </p>
              </header>
              
              <section>
                <InputField 
                  type="email" 
                  name="email" 
                  label="Email" 
                  required
                  aria-required="true"
                />
              </section>

              <footer className="flex justify-end mt-10 w-full gap-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    variant="secondary"
                    text="Reset Password"
                    className="!text-base !md:text-xl !py-1 md:py-4 !rounded-md"
                    aria-label="Submit password reset request"
                  />
                </motion.div>
              </footer>
            </Form>
          )}
        </Formik>
      </article>
    </main>
  );
}
