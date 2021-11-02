import Head from "next/head";
import Footer from "../../components/login/footer";

import { Input, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Formik, Field, Form } from "formik";

const Register = () => {
  const router = useRouter();

  return (
    <div
      className="
        transition duration-300
        bg-white
        sm:font-sans sm:bg-blue-500 
        sm:w-screen h-screen sm:py-20
        flex items-center justify-center
      "
    >
      <Head>
        <title>Notes - Register</title>
      </Head>
      <Box height="550px">
        <div
          className="
          bg-white text-center
          max-w-sm h-full mx-auto rounded-3xl p-14 pt-10"
        >
          <h1 className="text-4xl font-semibold text-gray-900">
            Register Form
          </h1>
          <p className="text-gray-400 text-xs mt-3">
            Register your username & password
          </p>
          <Formik
            initialValues={{
              name: "",
              username: "",
              password: "",
              city: "",
            }}
          >
            {({ values }) => (
              <Form className="flex flex-col gap-3 mt-8">
                <Field
                  name="name"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Name"
                  size="md"
                  as={Input}
                />
                <Field
                  name="username"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Username"
                  size="md"
                  as={Input}
                />
                <Field
                  name="password"
                  type="password"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Password"
                  size="md"
                  as={Input}
                />
                <Field
                  name="city"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="City"
                  size="md"
                  as={Input}
                />
                <Button type="submit" colorScheme="blue">
                  Login
                </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
          <p className="text-gray-400 text-sm mt-10">
            Already have an account?
            <b
              onClick={() => router.push("/login")}
              className="cursor-pointer hover:text-gray-600 transition duration-300"
            >
              {" "}
              Login
            </b>
            .
          </p>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Register;
