import Head from "next/head";
import Footer from "../../components/login/footer";
import { Input, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  return (
    <div
      className="
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
          <div className="flex flex-col gap-3 mt-8">
            <Input
              type="text"
              colorScheme="blue"
              rounded="md"
              placeholder="Name"
              size="md"
            />
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
            <Input
              type="text"
              colorScheme="blue"
              rounded="md"
              placeholder="City"
              size="md"
            />
            <Button colorScheme="blue">Login</Button>
          </div>
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
