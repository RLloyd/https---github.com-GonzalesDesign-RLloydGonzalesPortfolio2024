import { Box, Flex, useColorModeValue, Text, Tooltip } from "@chakra-ui/react";

import Angular       from "@images/softwares/Angular.png";
import React         from "@images/softwares/react.png";
import Wavemaker     from "@images/softwares/Wavemaker.png";
import Bootstrap     from "@images/softwares/Bootstrap.png";
import Chakra        from "@images/softwares/Chakra.png";
import Tailwind      from "@images/softwares/Tailwind.png";
import HTML          from "@images/softwares/HTML.png";
import CSS           from "@images/softwares/CSS.png";
import LESS          from "@images/softwares/Less.png";
import SCSS          from "@images/softwares/Sassl.png";
import TypeScript    from "@images/softwares/TypeScript.png";
import JavaScript    from "@images/softwares/JavaScript.png";
import JSON          from "@images/softwares/JSON.png";
import NodeJS        from "@images/softwares/NodeJS.png";
import Figma         from "@images/softwares/Figma.png";
import Firebase      from "@images/softwares/Firebase.png";
import VSCode        from "@images/softwares/VSCode.png";
import GIT           from "@images/softwares/GIT.png";
import Photoshop     from "@images/softwares/Photoshop.png";
import Illustrator   from "@images/softwares/Illustrator.png";
import Designer      from "@images/softwares/Affinity-Designer.png";
import Photo         from "@images/softwares/Affinity-Photo.png";
import GSAP          from "@images/softwares/gsap.png";
import FramerMotion      from "@images/softwares/framer-motion.png";
import Cinema4D      from "@images/softwares/Cinema-4D.png";
import Blender       from "@images/softwares/Blender.png";
import DaVinci       from "@images/softwares/DaVinci-ResolveStudio.png";
import Jira          from "@images/softwares/Jira.png";
import MSOffice      from "@images/softwares/MSOffice.png";
import etc           from "@images/softwares/etc.png";
import Ellipses      from "@images/softwares/Ellipses.png";

import { H1Header, ImageSrcStyle, PrimaryTextStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";
import { BsBootstrap } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from "react";

const softwareLogos = [
   { logo: React,          label: "React", url:"https://react.com" },
	{ logo: Angular,        label: "Angular", url:"https://angular.io" },
	{ logo: Wavemaker,      label: "Wavemaker", url:"https://www.wavemaker.com/" },
	{ logo: HTML,           label: "HTML", url:"https://www.w3.org/TR/2011/WD-html5-20110405/" },
	{ logo: CSS,            label: "CSS", url:"https://www.w3.org/Style/CSS/Overview.en.html" },
	{ logo: LESS,           label: "Less", url:"https://lesscss.org/" },
	{ logo: SCSS,           label: "Sass", url:"https://sass-lang.com/" },
	{ logo: Chakra,         label: "Chakra UI", url:"https://v2.chakra-ui.com/" },
	{ logo: Tailwind,       label: "Tailwind", url:"https://tailwindcss.com/" },
	{ logo: Bootstrap,      label: "Bootstrap", url:"https://getbootstrap.com/" },
	{ logo: TypeScript,     label: "TypeScript", url:"https://www.typescriptlang.org/" },
	{ logo: JavaScript,     label: "JavaScript", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ logo: JSON,           label: "JSON", url:"https://www.json.org/json-en.html" },
	{ logo: NodeJS,         label: "NodeJS", url:"https://nodejs.org/en" },
	{ logo: Figma,          label: "Figma", url:"https://www.figma.com/" },
	{ logo: Firebase,       label: "Firebase", url:"https://firebase.google.com/" },
	{ logo: VSCode,         label: "VSCode", url:"https://code.visualstudio.com/" },
	{ logo: GIT,            label: "GIT", url:"https://github.com/" },
	{ logo: Photoshop,      label: "Photoshop", url:"https://www.adobe.com/products/photoshop.html" },
	{ logo: Illustrator,    label: "Illustrator", url:"https://www.adobe.com/products/illustrator.html" },
	{ logo: Designer,       label: "Designer", url:"https://affinity.serif.com/en-us/designer/" },
	{ logo: Photo,          label: "Photo", url:"https://affinity.serif.com/en-us/photo/" },
	{ logo: GSAP,           label: "GSAP", url:"https://gsap.com/" },
	{ logo: FramerMotion,   label: "Motion", url:"https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=PerformanceMax-Framer_&gad_source=1&gclid=CjwKCAjwnei0BhB-EiwAA2xuBtDeC0PypIBbjN6lz46xIoG2KgNcr5a65dk8L58TdAADVEYxbmcAGRoCOwcQAvD_BwE" },
	{ logo: Cinema4D,       label: "Cinema4D", url:"https://www.maxon.net/en/cinema-4d" },
	{ logo: Blender,        label: "Blender", url:"https://www.blender.org/" },
	{ logo: DaVinci,        label: "DaVinci", url:"https://www.blackmagicdesign.com/products/davinciresolve" },
	{ logo: Jira,           label: "Jira", url:"https://www.atlassian.com/" },
	{ logo: MSOffice,       label: "MSOffice", url:"https://www.office.com/" },
	// { logo: etc, label: "etc", url:"xxxxx" },
	{ logo: Ellipses,    label: "and more...", url:"/" },
];

const SoftwareSkills = () => {
   const headerColor = useColorModeValue("primary.500", "primary.100");
   const headerBGColor = useColorModeValue("primary.100", "primary.400");
   const fontColor = useColorModeValue("primary.50", "primary.900");
   const bgColor = useColorModeValue("primary.500", "primary.200");
   const { designFlat, setDesignFlat } = useGlobalStore()
   const logoSizes =  "40px" //designFlat ? "200px" : "40px"

   // const [isHovered, setIsHovered] = useState(false);

   // const handleAnimate = () => {
   //    // cursor : "pointer"
   //    console.log("handleAnimate")
   // }

	return (
      <>
         <H1Header
            className="softwareSkills"
            fontSize={"2rem"}
            letterSpacing={"2"}
            color={headerColor}
            background={headerBGColor}
            padding={"1rem 1rem .5rem"}
            textTransform={"uppercase"}
            >
            Software Skills
         </H1Header>

         <Flex
            // flexDirection={"row"}
            flexDirection = "row" //{ designFlat ? "column" : "row" }
            gap={1}
            width={"auto"}
            // width={"600px"}
            flexWrap= {"wrap"}
            // flexDirection={"column"}
            justifyContent={"center"}
            padding={"1rem"}
            // alignItems={"center"}
            >
            {softwareLogos.map((logo, index) => (
               <Flex key={index}
                  flexDirection={"column"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  // width={"500px"}
                  // flexWrap= {"wrap"}
                  flexWrap={"wrap"}
                  // border={"1px solid"}
                  >
                  <Tooltip hasArrow
                     label={logo.label}
                     bg="brand.50"
                     color="brand.900"
                     placement="top"
                     >
                     <Link to={logo.url} target="_blank">
                        <ImageSrcStyle
                           src={logo.logo}
                           // key={index}
                           // flex-wrap= {"wrap"}
                           // opacity={"1"}
                           width={logoSizes}
                           height= {logoSizes}
                           objectFit={"contain"}
                           margin={".5rem"}
                           border={"1px solid"}
                           borderRadius= "full"
                           // onMouseOver={() => handleAnimate()}
                           // onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                        />
                        {/* {isHovered && <Tooltip>This is a tooltip!</Tooltip>} */}
                     </Link>
                  </Tooltip>

                  <XSmallTextStyle
                     // key={index}
                     // paddingBottom={"1rem"}
                     fontSize={".75rem"}
                     >
                     {logo.label}
                  </XSmallTextStyle>
               </Flex>
            ))}
         </Flex>
      </>
	);
};

export default SoftwareSkills;
