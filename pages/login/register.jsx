import React, { useState } from "react";

import Head from "next/head";
import Footer from "../../components/login/footer";

import {
  Input,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import API from "../../api";

const Register = () => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(true);

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
      <Modal closeOnOverlayClick={false} isOpen={modal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalStatus ? <>Account Created</> : <>Oops, Something wrong</>}
          </ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            {modalStatus ? (
              <Button onClick={() => router.push("/login")} colorScheme="blue">
                Login
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => router.push("/login")}
                  colorScheme="blue"
                  variant="ghost"
                  marginRight="4"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setSubmit(false);
                    setModal(false);
                  }}
                  colorScheme="blue"
                >
                  Try Again
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            onSubmit={(data, { setSubmitting }) => {
              setSubmit(true);
              setTimeout(() => {
                const payload = new FormData();
                payload.append("name", data.name);
                payload.append("username", data.username);
                payload.append("password", data.password);
                payload.append("city", data.city);
                API.postRegistration(data)
                  .then(() => {
                    setModal(true);
                    setModalStatus(true);
                    setModalMessage("Registered");
                  })
                  .catch((err) => {
                    setModal(true);
                    setModalStatus(false);
                    setModalMessage(err.response.data.message);
                  });
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(true),
              username: Yup.string().required(true),
              password: Yup.string().required(true),
              city: Yup.string().required(true),
            })}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3 mt-8">
                <Field
                  isInvalid={errors.name && touched.name}
                  name="name"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Name"
                  size="md"
                  as={Input}
                />
                <Field
                  isInvalid={errors.username && touched.username}
                  name="username"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Username"
                  size="md"
                  as={Input}
                />
                <Field
                  isInvalid={errors.password && touched.password}
                  name="password"
                  type="password"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="Password"
                  size="md"
                  as={Input}
                />
                <Field
                  isInvalid={errors.city && touched.city}
                  name="city"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeholder="City"
                  size="md"
                  as={Input}
                />
                <Button
                  loadingText="Loading"
                  isLoading={submit}
                  type="submit"
                  colorScheme="blue"
                >
                  Register
                </Button>
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
