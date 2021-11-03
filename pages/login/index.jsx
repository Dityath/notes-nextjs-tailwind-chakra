import { useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../../components/login/footer";

import {
  Input,
  InputGroup,
  Button,
  Box,
  Avatar,
  InputRightElement,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import API from "../../api";

const Login = () => {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const handlePass = () => setShowPass(!showPass);

  const [submit, setSubmit] = useState(false);
  const [wrongModal, setWrongModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
        <title>Notes - Login</title>
      </Head>
      <Modal closeOnOverlayClick={false} isOpen={wrongModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Error</ModalHeader>
          <ModalBody>
            <p>{modalMessage}</p>
            <p>Try to check your username or password again</p>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => {
                setSubmit(false);
                setWrongModal(false);
              }}
            >
              {" "}
              Ok{" "}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box height="550px">
        <div
          className="
          bg-white text-center
          max-w-sm h-full mx-auto rounded-3xl p-14"
        >
          <Avatar />
          <h1 className="text-4xl font-semibold text-gray-900 mt-6">
            Welcome!!
          </h1>
          <p className="text-gray-400 text-xs mt-3">
            Please insert your username & password correctly
          </p>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
              setSubmit(true);
              setTimeout(() => {
                API.postLogin(data)
                  .then(() => {
                    router.push("/");
                  })
                  .catch((err) => {
                    setWrongModal(true);
                    setModalMessage(err.response.data.message);
                  });
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required(true),
              password: Yup.string().required(true),
            })}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3 mt-8">
                <Field
                  isInvalid={errors.username && touched.username}
                  name="username"
                  type="text"
                  colorScheme="blue"
                  rounded="md"
                  placeHolder="username"
                  size="md"
                  as={Input}
                />
                <InputGroup size="md">
                  <Field
                    isInvalid={errors.password && touched.password}
                    name="password"
                    type={showPass ? "text" : "password"}
                    colorScheme="blue"
                    rounded="md"
                    placeHolder="password"
                    size="md"
                    as={Input}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      variant="link"
                      //error disini
                      onClick={handlePass}
                    >
                      {showPass ? (
                        <Icon as={ViewOffIcon} />
                      ) : (
                        <Icon as={ViewIcon} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button isLoading={submit} type="submit" colorScheme="blue">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <p className="text-gray-400 text-sm mt-10">
            don’t have an account? make it
            <b
              onClick={() => router.push("/login/register")}
              className="cursor-pointer mt-3 hover:text-gray-600 transition duration-300"
            >
              {" "}
              here
            </b>
            .
          </p>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
