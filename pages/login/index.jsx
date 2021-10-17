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
  AvatarBadge,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const handlePass = () => setShowPass(!showPass);

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
          <div className="flex flex-col gap-3 mt-8">
            <Input
              type="text"
              colorScheme="blue"
              rounded="md"
              placeholder="Username"
              size="md"
            />
            <InputGroup size="md">
              <Input
                type={showPass ? "text" : "password"}
                colorScheme="blue"
                rounded="md"
                placeholder="Password"
                size="md"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  variant="link"
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
            <Button colorScheme="blue">Login</Button>
          </div>
          <p className="text-gray-400 text-sm mt-10">
            Don’t have an account? Make it
            <b
              onClick={() => router.push("/login/register")}
              className="cursor-pointer hover:text-gray-600 transition duration-300"
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
