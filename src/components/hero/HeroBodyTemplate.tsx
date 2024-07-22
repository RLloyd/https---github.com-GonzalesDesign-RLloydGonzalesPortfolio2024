import { Flex, useColorMode } from "@chakra-ui/react";
import { H1Header, PrimaryAccentButton, PrimaryTextStyle, SuccessButton } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";

const HeroBodyTemplate = (props: any) => {
   const {
      intro, cardtitle, description,
      label, link, target, icon } = props;

	return (
		<Flex
			className      =  "heroBodyTemplateContainer heroAtom"
			display        =  {"flex"}
			alignItems     =  {"flex-start"}
			flexDirection  =  {"column"}
			color          =  {"brand.50"}
			position       =  {"relative"}
			top            =  {{ base: "-320px", md: "-350px", lg:"-400px" }}
			paddingLeft    =  {{ base: 5, md: "50px", lg: "70px" }}
			padding        =  {{ base: "0px 0px", md: "0px 50px", lg: "1rem 70px" }}
			margin         =  {"2rem"}
			width          =  {"auto"}
			// width          =  {{base:"auto", lg:"900px"}}
			textAlign      =  {"left"}
			// border={"1px solid red"}
			borderRadius   =  {"xl"}
         // background={"primary.50"}
         {...props}
		>
			{/* Short Intro */}
			<PrimaryTextStyle className="shortIntro"
            fontSize={{ base: "1rem", lg: "1.2rem" }}
            fontWeight={"semibold"}
            textTransform={"capitalize"}
            paddingLeft={{ base: 0, lg: 14 }}
            marginBottom={{base:0, md:-1, lg:-3}}
            // {...props}
            >
				{intro}
			</PrimaryTextStyle>

			{/* Hero Title */}
			<H1Header
            fontSize={{ base: "2.5rem", lg: "4.5rem" }}
            textTransform={"capitalize"}
            marginBottom={5}>
				{cardtitle}
			</H1Header>

			{/* Desription */}
			<PrimaryTextStyle
				// w={{base:"400px", lg:"800px"}}
				fontSize={{ base: "1.25rem", lg: "1.5rem" }}
				// fontSize={"1.75rem"}
				lineHeight={1.3}
				// className="font-lora uppercase"
			>
				{description}
			</PrimaryTextStyle>

			{/* Button & Link */}
         {/* <PrimaryAccentButton
            label       =  {label}
            link        =  {link}
            target        =  {target}
            icon   =  {icon}
         /> */}
         {/* <Link to={buttonLink} target={linkTarget}>
				<Button className="heroButton"
					variant={colorMode === "light" ? "primary" : "accent"}
					rightIcon={buttonRightIcon}>
               {buttonLabel}
				</Button>
			</Link> */}

		</Flex>
	);
};

export default HeroBodyTemplate;
