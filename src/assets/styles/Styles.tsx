import { Box, Button, Flex, Heading, Image, Text, Tooltip, border, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MotionFlex } from "../variables/Variables";

/*-----= Header: H1 =-----*/
type Props = {
   children: ReactNode
   props: ReactNode
}
// export const H1Header = ({children, props}: Props) => {
export const H1Header = (props: any) => {
	const fontColor = useColorModeValue("primary.900", "primary.100");
	return (
      <Heading as={"h1"}
         color={fontColor}
         fontSize={"2.5rem"}
         fontWeight={"800"}
         lineHeight={1}
         padding={".5rem 0px"}
         {...props}
         />
         // {/* {children} */}
         // </Heading>
      )
};

/*-----= Header: H2 =-----*/
export const H2Header = (props: any) => {
	const fontColor = useColorModeValue("primary.900", "primary.100");
	return (
      <Heading as={"h2"}
         color={fontColor}
         fontSize={"1.75rem"}
         fontWeight={"500"}
         // fontWeight={"600"}
         margin={"1rem 0"}
         {...props}
      />
   )
};

/*-----= Header: H3 =-----*/
export const H3Header = (props: any) => {
	const fontColor = useColorModeValue("primary.900", "primary.100");
	return (
      <Heading as={"h3"}
         color={fontColor}
         fontSize={"1.5rem"}
         fontWeight={"600"}
         margin={"1rem 0"}
         {...props}
         />)
};

/*-----= Header: H3 =-----*/
export const H4Header = (props: any) => {
	const fontColor = useColorModeValue("primary.900", "primary.100");
	return <Heading as={"h4"} color={fontColor} fontSize={"1.25rem"} fontWeight={"600"} margin={"1rem 0"} {...props} />;
};

/*-----= Text: Primary =-----*/
export const PrimaryTextStyle = (props: any) => {
	const primaryFontColor = useColorModeValue("primary.900", "primary.50");
	return (
      <Text
         color={primaryFontColor}
         fontSize={"1.1rem"}
         fontWeight={"400"}
         // paddingBottom={"1.5rem"}
         {...props}
      />
   )
};
/*-----= Text: xsml text =-----*/
export const XSmallTextStyle = (props: any) => {
	const primaryFontColor = useColorModeValue("primary.900", "primary.200");
	return (
      <Text
         color={primaryFontColor}
         textAlign={"left"}
         fontSize={".9rem"}
         fontWeight={"500"}
         textTransform={"uppercase"}
         // paddingBottom={"1.5rem"}
         {...props}
      />
   )
};

/*-----= Button: Common =-----*/
// export const CommonButton = (props: any) => {
export const CommonButton = (props:any) => {
   return (
      <Box {...props}>
         {props.children}
      </Box>
   )
}
// usage: <CommonButton prop="value"><children.elements/></CommonButton>

/*-----= Button: Primary =-----*/
export const PrimaryButtonStyle = (props: any) => {
	const primaryFontColor = useColorModeValue("primary.50", "primary.100");
	const primaryBGColor = useColorModeValue("accent.500", "primary.500");
	return (
      <>
         <Button
            // colorScheme="brand"
            // variant={"link"}
            color          =  {primaryFontColor}
            background     =  {primaryBGColor}
            // rightIcon      =  {<FaArrowRight/>}
            fontSize       =  {"1.1rem"}
            fontWeight     =  {"500"}
            // paddingBottom  =  {"1.5rem"}
            borderRadius   =  {"md"}
            // borderRadius   =  {"full"}
            size           =  {"lg"}
            boxShadow      =  {"lg"}
            {...props}
            />
      </>
   )
};

/*-----= Box: Hero Box =-----*/
export const HeroBoxStyle = (props: any) => {
	// const {
   //    width="100%",
   //    height="450px"
   //    // height="100%"
   // } = props;

	return (
      <>
         <Box className="heroBoxStyleContainer "
            display={"flex"}
            flexDirection={"column"}
            width= {"100%"}
            height= {"450px"}
            marginTop= {{base:"0px", md:"30px"}}
            // overflow={"hidden"}
            boxShadow= "xl"
            // border={"12px solid white"}
            // color="white"
            {...props}
            >
         </Box>
      </>
   )
};

/*-----= Flex: Card Style =-----*/
export const CardBodyStyle = (props: any) => {
   // const { flexDirection } = props;
	// const primaryFontColor = useColorModeValue("primary.50", "primary.100");
	// const primaryBGColor = useColorModeValue("accent.500", "primary.500");
	return (
      <>
         <Flex
            width= "100%"
            height= "auto"
            padding= "0"
            marginTop= "30px"
            // border= "1px solid hsla(0, 0%, 0%, 0.125)"
            border= "4px solid accent.500"
            borderColor= "primary.300"
            borderRadius= "1rem"
            // boxShadow= "xl"
            {...props}
            >
         </Flex>
      </>
   )
};


/*-----= Image: Image Source =-----*/
// type Props = {
//    imgSrc: string
//    props: ReactNode
// }

export const ImageSrcStyle = (props: any) => {
   /*--= usage
   <ImageSrcStyle src={sectionData.image} />
      =---------------------*/
	return (
      <>
         <Image src={props}
            // key={Math.random()}
            // boxSize='100px'
            objectFit='cover'
            // src='https://bit.ly/dan-abramov'
            // alt='Dan Abramov'
            width= "full"
            height= "100%"
            borderRadius= "xl"
            // border={"1px solid cyan"}
            // boxShadow=      "5px 10px 16px hsla(90, 60%, 50%, 0.5)"
            margin= "0px auto"
            padding={"0rem"}
            objectPosition= "0px 0px"
            // background= "accent.200"
            // display= "flex"
            // alignItems= "flex-start"
            // position= "relative"
            // top= "0px"
            {...props}
            />
            {/* <video src={props} /> */}
      </>
   )
};

export const ImageBackgroundStyle = (props: any) => {
   /*--= usage:
   <ImageBackgroundStyle backgroundImage={sectionData.image} />
   =--*/
	return (
      <>
         <Box
            width= "100%"
            height= "150vh"
            // height= "450px"
            borderRadius="1rem"
            backgroundColor= "transparent"
            backgroundImage= {props}
            backgroundRepeat= "no-repeat"
            backgroundSize= "cover"
            backgroundPosition= "0px 0px"
            {...props}
            />
      </>
   )
};

/*-----= Tooltip: xxx =-----*/
export const TooltipStyle = (props: any) => {
	const tooltipFontColor = useColorModeValue("primary.50", "accent.50");
	const tootipBGColor = useColorModeValue("primary.300", "accent.500");
   const { label, placement } = props;
	return (
      <>
         <Tooltip hasArrow
            label={label}
            placement={placement}
            color={tooltipFontColor}
            bg={tootipBGColor}
            {...props}
            >
         </Tooltip>
      </>
   )
};

/*-----= Link Button =-----*/
export const LinkButtonStyle = (props: any) => {
   const { link, target, label,
      leftIcon, rightIcon, btnBg,
      btnColor, hoverColor, textTransform="uppercase"
   } = props;
   return (
      <Link to= {link} target= {target}>
         <Button
            leftIcon= {leftIcon}
            rightIcon= {rightIcon}
            background= {btnBg}
            color= {btnColor}
            hoverColor= {hoverColor}
            textTransform= {textTransform}
            {...props}
            >
            {label}
         </Button>
      </Link>
   )
}
/*-----= Success Button =-----*/
export const SuccessButton = (props: any) => {
	const { colorMode } = useColorMode();
	const { label, link, target, icon  } = props;
	return (
		<Link to={link} target={target}>
			<Button className="successButton"
            variant={colorMode === "light" ? "success" : "success"} //variants:theme.ts
            rightIcon={icon}
            {...props}
            >
				{label}
			</Button>
		</Link>
	);
};
/*-----= Warning Button =-----*/
export const WarningButton = (props: any) => {
	const { colorMode } = useColorMode();
	const { label, link, target, icon  } = props;
	return (
		<Link to={link} target={target}>
			<Button className="warningButton"
            variant={colorMode === "light" ? "warning" : "warning"} //variants:theme.ts
            rightIcon={icon}
            {...props}
            >
				{label}
			</Button>
		</Link>
	);
};
/*-----= Danger Button =-----*/
export const DangerButton = (props: any) => {
	const { colorMode } = useColorMode();
	const { label, link, target, icon  } = props;
	return (
		<Link to={link} target={target}>
			<Button className="dangerButton"
            variant={colorMode === "light" ? "danger" : "danger"} //variants:theme.ts
            rightIcon={icon}
            {...props}
            >
				{label}
			</Button>
		</Link>
	);
};

export const PrimaryAccentButton = (props :any) => {
	const { colorMode } = useColorMode();
	const { label, link, target, icon  } = props;
	return (
		<Link to={link} target={target}>
			<Button className="primaryAccentButton"
            // variant={colorMode === "light" ? "primary" : "accent"}
            variant={colorMode === "light" ? "primary" : "accent"}
            rightIcon={icon}
            // textWrap={"wrap"}
            {...props}
         >
				{label}
			</Button>
		</Link>
	);
};

export const LinkButton = (props :any) => {
	const { colorMode } = useColorMode();
	const { label, link, target, icon  } = props;
	return (
		<Link to={link} target={target}>
			<Button className="LinkButton"
            variant={colorMode === "light" ? "link" : "link"}
            rightIcon={icon}
            {...props}
            >
				{label}
			</Button>
		</Link>
	);
};

// export const TrendingLayoutTemplate = (props :any) => {
//    const { colorMode } = useColorMode();
//    const { numero, title, buttonLabel } = props;
//    return (
//       <Flex gap={2} margin={"1rem 0 6rem"} paddingTop={".6rem"} borderTop={"1px solid"}>
//          <Box fontSize={"4rem"} fontWeight={"light"} width={"4rem"} lineHeight={1} border={"0px solid"}>{numero}</Box>
//          <Box>
//             <Text fontSize={".75rem"} textTransform={"uppercase"}>{title}</Text>
//             <LinkButton
//                textAlign={"left"}
//                textWrap={"balance"}
//                padding={"0"}
//                margin={"0"}
//                style={{textWrap:"balance"}}
//                label={buttonLabel}
//                />
//          </Box>
//       </Flex>
//    )
// }

/*--= Form validation errors =--*/
export const sxErrors = {
   color    : "danger.400",
   fontSize : ".9rem",
   // margin: "0 0 1rem",
   margin   : "0px auto",
   padding  : "0 1rem",
   // border   : "1px solid"
}

/*--= MotionFlex: Animating styleguide title & sub-title =--*/
type FadeTitleProps = {
   children: React.ReactNode
}
export const FadeTitle = ({children}:FadeTitleProps) => {
   return (
      <MotionFlex
         initial={{opacity:0}}
         animate={{opacity:1}}
         // transition={{type:"spring", stiffness:80, damping:20}}
         transition={{type:"tween", duration:1, ease:"easeInOut"}}
         >
         {children}
      </MotionFlex>
   )
}