import { Box, Flex, Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import dashboardCard from "@images/styleguide/dashboardCard.png";
import loaderImg from "@images/styleguide/loaderImg.webp";
import { useState } from "react";
import { FadeTitle, H1Header, H2Header, LinkButton, XSmallTextStyle } from "../../../assets/styles/Styles";
import Layout from "../../Layout";
import StyleguideSubMenus from "../StyleguideSubMenus";
/*--= Login form logo =--*/
/*--= FramerMotion =--*/
import { MotionFlex, easing } from "src/assets/variables/Variables";
import ModalTemplateBasic from "../../modals/ModalTemplateBasic";
/*--= Hiliter =--*/
/*--= Forms =--*/
import BasicHookForm from "./reactHookForms/BasicHookForm";
import BasicHookFormYup from "./reactHookForms/BasicHookFormYup";
// import { useLogin } from "@tanstack/react-query";
import SignIn from "./loginFirebase/SignIn";
import SignUp from "./loginFirebase/SignUp";


const circularLoaderCodeBlock = `
   // Installation:
   npm install firebase

   type FormValues = {
      email: string;
      password: string;
   }
   const validationSchema = yup.object ({
      // Rules:
      email: yup
         .string()
         .required("Email is required")
         .email("Invalid email format"),
      password: yup
         .string()
         .min(5)
         .required("Password is required"),
   }).required()

   type Props = {
      fieldWidth: string
   }

   /*--= SignIn Component =--*/
   const SignIn = ({fieldWidth}: Props) => {
      const [emailError, setEmailError] = useState("");
      const [passwordError, setPasswordError] = useState("");
      const [title, setTitle] = useState("Log In")
      const [isForm, setIsForm] = useState(true);

      const onSubmit = async (data:any) => {
         try {
         const userCredential = await signInWithEmailAndPassword(
            // await signInWithEmailAndPassword(
               auth,
               data.email,
               data.password
         );
            console.log("User created:", userCredential.user);
            // Redirect or perform other actions on successful signup
         setTitle("Authenticated")
         setIsForm(false)
         }
         catch (error: any) {
            if (error.code === 'auth/invalid-email') {
               setEmailError("Please enter a valid email address.");
            } else if (error.code === 'auth/user-not-found') {
               setEmailError("The email address is not found.");
            } else if (error.code === 'auth/wrong-password') {
               setPasswordError("Wrong password");
            } else {
               console.error('An error occurred:', error);
            }
         }
      };
      /*-= using form hook =-*/
      const { register, handleSubmit, formState } = useForm<FormValues>(
         {
            /*-= adding default values: object =-*/
            defaultValues: {
               email: "",
               password: "",
            },
            /*-= add resolver for yup validation schema =-*/
            resolver: yupResolver(validationSchema),
            /*-= validation modes =-*/
            mode: "onBlur"
         }
      );
      /*-= de-structuring formState to get errors =-*/
      const { errors } = formState;

      return (
         <>
            <H1Header mt="2rem">{title}</H1Header>
            {isForm ?
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Input type="email" {...register("email")}
                     placeholder="Enter your email"
                     margin={"8px 0"}
                     width={fieldWidth}
                  />
                  <Box sx={sxErrors} w={"90%"}>
                     {errors.email?.message || emailError}
                  </Box>

                  <Input type="password" {...register("password")}
                     placeholder="Enter your password"
                     margin={"8px 0"}
                     width={fieldWidth}
                  />
                  <Box sx={sxErrors} w={"90%"}>
                     {errors.password?.message || passwordError}
                  </Box>
                  <Button type="submit" size="md">Log In</Button>
               </form>
               :
               <Box>Correct</Box>
            }

         </>
      );
   };
`;

const sectionData = {
	title: "Forms",
	subTitle: "Streamlining data collection",
	leftColumn: {
		image: loaderImg,
		// image: sunbirdCardVertical,
		text: "",
	},
	intro: {
		introTitle: "React Hook Form",
		introText: "Handling forms in React is a fundamental aspect of building interactive web applications. Here's a comprehensive guide on how to work with forms in React, covering both controlled and uncontrolled components.",
		image: dashboardCard,
	},

	content: [
		{
			id: 1,
			subTitle: "Basic Form",
			description: [
				{ id: "1.", titleList: "Immediate Feedback: ", list: "Animations give instant visual cues, making interactions feel responsive." },
				{ id: "2.", titleList: "Guidance and Navigation: ", list: "They guide users through the interface, simplifying complex structures." },
				{ id: "3.", titleList: "Engagement: ", list: "Dynamic animations capture attention, encouraging exploration." },
				{ id: "4.", titleList: "Clarity: ", list: "They clarify relationships between elements, reducing confusion." },
				{ id: "5.", titleList: "Feedback for Operations: ", list: "Animations indicate when the system is working, reducing uncertainty." },
				{ id: "6.", titleList: "Brand Identity: ", list: "They reflect the brand's personality, creating a unique identity." },
				{ id: "7.", titleList: "Emotional Connection: ", list: "Animations evoke emotions, fostering a stronger bond with users." },
				{ id: "8.", titleList: "Accessibility: ", list: "They can aid users with disabilities by providing additional feedback." },
			],
		},
	],
	buttonLabel: "",
	buttonLink: "",
	linkTarget: "",
};
const gridTemplateDesignUno = {
	base: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four "
     "five five five five "
   `,
	xl: `
     "one    one     one"
     "two    three   three"
     "two    four    four"
     "two    five    five"
   `,
};

const Forms = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
	const timer = 1000;
	// Forms
	const [name, setName] = useState("");

   const [isLogin, setLogIn] = useState(true);

   const signUp = () => {
      setLogIn(!isLogin);
   }

	return (
		<Layout>
			<StyleguideSubMenus />

			<Grid
				templateAreas={gridTemplateDesignUno}
				marginTop={"2rem"}
				bg="primary.50"
				padding={"2rem 2rem 5rem"}
				borderRadius={"2xl"}
				background={backgroundColor}
				// border={"1px solid yellowGreen"}
			>
				{/*--= Page title area =--*/}
				<GridItem area="one"
					// width={"200px"}
					borderBottom={"1px solid"}
					borderColor={BorderColorStyle}
				   >
               {/* Page title */}
               <FadeTitle>
                  <Flex flexDirection={"column"}
                     height={"80px"}
                     >
                     <H1Header color={"accent.500"} textAlign={"left"}>
                        {sectionData.title}
                     </H1Header>

                     <XSmallTextStyle>
                        {sectionData.subTitle}
                     </XSmallTextStyle>
                  </Flex>
               </FadeTitle>

				</GridItem>

				{/*--= Left column area =--*/}
				<GridItem area="two">
						<MotionFlex
							flexDirection  =  {"column"}
							alignItems     =  {"center"}
							initial        =  {{ opacity: 0, y: 500 }}
							animate        =  {{ opacity: 1, y: 0 }}
							transition     =  {{ ease: easing, duration: 1, delay: timer / 1000 }}
                     // border={"1px solid yellow"}
						>
							<Box
								className="loaderCard"
								top={"1rem"}
								width={{base:"auto", md:"500px", xl:"300px"}}
								// height={"420px"}
								// padding={{base:"2rem", xl:"2rem 1rem"}}
                        // padding={4}
								paddingBottom={{base:"2rem", xl:"2rem 1rem"}}
								margin={"12px 12px 0 0"}
								objectFit={"contain"}
								background={"primary.500"}
								borderRadius={"1rem"}
								border={"1px solid magenta"}
                        borderColor={"primary.300"}
                        overflow={"hidden"}
							>

                        {isLogin ?
                           <>
                              <SignIn fieldWidth="90%"/>
                              <Box>
                                 To create a new account,
                                 <LinkButton
                                    label={" sign up"}
                                    textTransform={"lowercase"}
                                    color={"accent.400"}
                                    margin={"-10px"}
                                    onClick={signUp}
                                 />
                              </Box>
                           </>
                           :
                           <>
                           <SignUp fieldWidth="90%"/>

                           <Box>
                              <LinkButton
                                 label    =  {"log in"}
                                 textTransform={"capitalize"}
                                 color={"accent.400"}
                                 margin={"-10px"}
                                 onClick={signUp}
                                 />
                           </Box>
                           </>
                        }

                        <H2Header
                           fontSize={"1rem"}
                           fontWeight={"600"}
                           width={"100%"}
                           textAlign={"center"}
                           letterSpacing={"0"}
                           color={"primary.100"}
                           margin={"6rem 0 1rem"}
                           padding={"0 .5rem"}
                           // border={"1px solid"}
                           // borderTop={"1px solid"}
                        >
                           Check out the code for the login form:
                        </H2Header>

                        {/* Modal: Circular Loader */}
                        <ModalTemplateBasic
                           title="Login Form Code Block"
                           buttonLabel="Login Auth Form Code"
                           codeBlock={circularLoaderCodeBlock}
                           // image={aiCuteOwl3}
                           // imageStyle={sxImage}
                        />
							</Box>
						</MotionFlex>
				</GridItem>

				{/*--= Main top column ar1
            1ea =--*/}
				<GridItem area="three"
					fontSize={"1.1rem"}
					textAlign={"left"}
					padding={"2rem 2rem 0"}
					borderLeft={"10px solid"}
					borderColor={BorderColorStyle}
					// border={"1px solid"}
					// borderColor={"red"}
               >
					<MotionFlex
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ ease: easing, duration: 1, delay: 0 }}
						flexDirection={"column"}
						margin={"0 0 2rem"}
						// border="1px solid"
					   >
						<H2Header fontSize="32px">{sectionData.intro.introTitle}</H2Header>
						<Text fontSize={{ base: "16px", md: "20px" }}>
                     {sectionData.intro.introText}
                  </Text>
					</MotionFlex>
				</GridItem>

				{/*--= Forms =--*/}
				<GridItem area="four"
					fontSize={"1.1rem"}
					textAlign={"left"}
					padding={"2rem"}
					borderLeft={"1px solid"}
					borderColor={BorderColorStyle}
               >

               {/* <BasicHookFormMisc/> */}

					{/* Basic hook form */}
               <BasicHookForm/>

					{/* Basic hook form Yup */}
               <BasicHookFormYup/>

					{/* Basic hook form Zod */}
               {/* <BasicHookFormZod/> */}

					{/* Basic form */}
               {/* <BasicForm/> */}

					{/* Controlled form component */}
               {/* <ControlledForm/> */}

					{/* Uncontrolled form component */}
               {/* <UncontrolledForm/> */}

					{/* Validation Form component */}
					{/* <ValidationForm/> */}


				</GridItem>

				{/* Animation Samples Dashboard */}
				{/* <GridItem
					area="five"
					className="areaFiveWrapper"
					fontSize={"1.1rem"}
					textAlign={"left"}
					padding={"2rem"}
					borderLeft={"1px solid"}
					borderColor={BorderColorStyle}
					height={"650px"}
					position={"relative"}
					top={"0px"}
					// border={"1px solid"}
				>
				</GridItem> */}
			</Grid>
		</Layout>
	);
};

export default Forms;
