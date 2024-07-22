import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";

type Props = {
	title: string;
	subtitle: string;
	desc: string;
   linkTo: string;
};

const ChakraFeature = ({ title, subtitle, desc, linkTo, ...rest }: Props) => {
// const ChakraFeature = ({ title, desc }: Props) => {
	return (
		<Flex
         // w={{base:"400px", md:"500px", lg:"400px"}}
         // w={"full"}
         w={{base:"full", md:"full", lg:"350px", xl:"full"}}
         position={{base:"relative", md:"relative", lg:"absolute", xl:"relative"}}
         direction={"column"}
         // justifyContent={"left"}
         alignItems={"flex-start"}
         p={5}
         pt={10}
         border={"0px solid hsla(0, 0%, 0%, 0.125)"}
         borderRadius={"1rem"}
         boxShadow={"xl"}
         // shadow="md"
         // borderWidth="1px"
         color={"brand.1000"}
         // background={"hsla(0, 100%, 1000%, 0.9)"}
         background={"brand.50"}
         {...rest}
         >
		   {/* <Box p={5} shadow="md" borderWidth="1px"> */}
			<Heading fontSize="2xl">{title}</Heading>
			<Text fontSize="xl">{subtitle}</Text>
			<Text textAlign={"left"} mt={4}>{desc}</Text>

         {/* <Link to={"../fisD1"}> */}
         <Link to={linkTo}>
            <Button
               variant={"solid"}
               colorScheme="brand"
               // leftIcon={<MdDataSaverOn size={"30px"} color="purple" />}
               rightIcon={<FaArrowRight />}
               borderRadius="md"
               border={"1px solid hsla(0, 0%, 0%, 0.125)"}
               size="lg"
               fontSize={"lg"}
               boxShadow={"xl"}
               mt={5}
               // className="mt-5"
               >
               Details
            </Button>
         </Link>
		</Flex>
	);
};

export default ChakraFeature;
