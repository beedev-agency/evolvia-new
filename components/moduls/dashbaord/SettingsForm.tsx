"use client";

import { Formik, Form, FormikValues } from "formik";
import { useCallback, useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { toast } from "react-toastify";

import { createClient } from "@/utils/supabase/client";
import { InputField, Button } from "@/components";

export const SettingsForm = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    if (user?.id) {
      getProfile();
    }
  }, [user, getProfile]);

  const updateProfile = async (values: FormikValues) => {
    if (user?.id) {
      try {
        setLoading(true);

        const { error } = await supabase.from("profiles").upsert({
          id: user?.id as string,
          full_name: values.fullname,
          username: values.username,
          updated_at: new Date().toISOString(),
        });
        if (error) throw error;
        toast.success("Profile updated");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: user?.email || "",
        full_name: fullname || "",
        username: username || "",
        website: website || "",
      }}
      // validationSchema={Yup.object().shape({
      //   full_name: Yup.string().required('Full name is required')
      // })}
      onSubmit={updateProfile}
      enableReinitialize
    >
      {({ values, initialValues, isSubmitting }) => (
        <Form>
          <div className="my-8">
            <h2 className="text-xl mb-4">Login Information</h2>
            <div className="flex flex-col w-full h-auto bg-light-gray  rounded-[10px] mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    inputClass="bg-white"
                    disabled={true}
                  />
                </div>
                <div>
                  <InputField
                    name="full_name"
                    label="Full Name"
                    alert="* This name is being used for certificates and reporting"
                    inputClass="bg-white"
                  />
                </div>
                <div>
                  <InputField
                    name="username"
                    label="Username"
                    alert="* This name is being used for certificates and reporting"
                    inputClass="bg-white"
                  />
                </div>
              </div>
              <div className="flex row justify-end mt-3">
                <Button variant="secondary" text="Save" type="submit" />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
