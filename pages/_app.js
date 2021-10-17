import 'tailwindcss/tailwind.css'
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-blue-500">
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </motion.div>
    </div>
  );
}

export default MyApp
