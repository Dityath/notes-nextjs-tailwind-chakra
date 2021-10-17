import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/login/footer";
import { Input, Button, Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <div
      className="
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
          <h1 className="text-4xl font-semibold text-gray-900">Welcome!!</h1>
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
            <Input
              type="password"
              colorScheme="blue"
              rounded="md"
              placeholder="Password"
              size="md"
            />
            <Button colorScheme="blue">Login</Button>
          </div>
          <p className="text-gray-400 text-sm mt-10">
            Don’t have an account? Make it
            <b className="cursor-pointer">
              <Link href="/login/register"> here</Link>
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
