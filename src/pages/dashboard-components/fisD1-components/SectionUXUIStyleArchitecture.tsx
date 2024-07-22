import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Increment from "@components/likes/Increment";
import screensImage from "@images/screens/responsive-web-design.png";
import { increment } from "firebase/firestore";
import { FaArrowRight } from "react-icons/fa";
import { H2Header, ImageSrcStyle, LinkButton, PrimaryTextStyle } from "../../../assets/styles/Styles";
// import LikesButton from "../../../components/likes/Likes";

const sectionData = {
   title:      "UXUI Style Architecture",
   description: [
         "UXUI Style Architecture (UXUISA) presents a fresh approach to UI styling tailored for the implementation of styles in our D1 LCD Core Consumer product. While it doesn't constitute a Design System on its own, it can seamlessly integrates into one.",

         "The primary objective of UXUISA is to furnish developers and designers with CSS mixins utilizing LESS and variables. These elements are crafted for reusability, allowing for the creation of multi-themed and multi-designed templates while upholding consistency. By doing so, it streamlines the process of searching for classes, properties, and values, ultimately providing clients with enhanced features.",

         "New variables are introduced to remap CSS raw values within existing HTML page structures. These variables are meticulously outlined in blueprints or schematics within Figma, aiding both designers and developers in identifying and utilizing them effectively across pages or components.",

         "Given the stability of the app HTML node structures, UXUISA enables the modification of layout aesthetics without compromising the integrity of the base code."
   ],
   /*-= Multi dimensional Arrays: This works with an inline "Link to=..."" but need to figure out how to get the key =--*/
   // description: [
   //       ["UXUI Style Architecture (UXUISA) presents a fresh approach to UI styling tailored for the implementation of styles in our D1 LCD Core Consumer product. While it doesn't constitute a Design System on its own, it can seamlessly integrates into one.",],
   //       ["The primary objective of UXUISA is to furnish developers and designers with CSS mixins utilizing LESS and variables. These elements are crafted for reusability, allowing for the creation of multi-themed and multi-designed templates while upholding consistency. By doing so, it streamlines the process of searching for classes, properties, and values, ultimately providing clients with enhanced features.",],
   //       ["New variables are introduced to remap CSS raw values within existing HTML page structures. These variables are meticulously outlined in blueprints or schematics within Figma, aiding both designers and developers in identifying and utilizing them effectively across pages or components.",],
   //       [<Link to="/typography" className="clickHere"> Click here for sample </Link>],
   //       ["Given the stability of HTML node structures, UXUISA enables the modification of layout aesthetics without compromising the integrity of the base code."],
   // ],
   /*-= Multi dimensional Objects =--*/
   // description: [
   //    {
   //       id: 0,
   //       text: "UXUI Style Architecture (UXUISA) presents a fresh approach to UI styling tailored for the implementation of styles in our D1 LCD Core Consumer product. While it doesn't constitute a Design System on its own, it can seamlessly integrates into one.",
   //    },
   //    {
   //       id: 1,
   //       text: "The primary objective of UXUISA is to furnish developers and designers with CSS mixins utilizing LESS and variables. These elements are crafted for reusability, allowing for the creation of multi-themed and multi-designed templates while upholding consistency. By doing so, it streamlines the process of searching for classes, properties, and values, ultimately providing clients with enhanced features.",
   //    },
   //    {
   //       id: 2,
   //       text: "New variables are introduced to remap CSS raw values within existing HTML page structures. These variables are meticulously outlined in blueprints or schematics within Figma, aiding both designers and developers in identifying and utilizing them effectively across pages or components.",
   //    },
   //    {
   //       id: 3,
   //       text: <Link to="/typography" className="clickHere"> Click here for sample </Link>
   //    },
   //    {
   //       id: 4,
   //       text: "Given the stability of HTML node structures, UXUISA enables the modification of layout aesthetics without compromising the integrity of the base code."
   //    },
   // ],

   image:      screensImage,
   // imageSize: "420px",
   buttonLabel: "UXUISA",
   buttonLink: "https://www.businesswire.com/news/home/20181016005159/en/Zenmonics-Accepts-Investment-from-Fidelity-National-Information-Services-Inc.",
   linkTarget: "_blank",
}

/*--= UXUI Style Architecture in D1 Dashboard =--*/
const SectionUXUIStyleArchitecture = () => {
   const sectionHeaderMode = useColorModeValue("white", "accent.100");

   const sectionHeaderStyle = {
      // as: "h2",
      // fontSize: "1.5rem",
      // fontWeight: "600",
      // color: "primary.50",
      // color: {sectionHeaderMode},
      // marginBottom: ".5rem",
      // paddingTop: ".5rem",
      // paddingLeft: ".7rem"
   };
   const sectionBodyStyle = {
      // fontSize: "1.1rem",
      // fontWeight: "500",
      // paddingBottom: "1.5rem",
      // paddingLeft: ".7rem"
   };

	return (

		<Flex className="sectionUXUISAContainer"
         flexDirection="column"
         // flexDirection= {{base:"column", lg:"row"}}
         gap={6}
         marginBottom={"3rem"}>

			{/* <Image src={heroBg} width={"400px"} /> */}
			{/* <Image
				src={sectionData.image}
				width={sectionData.imageSize}
				height={"300px"}
				// borderRadius={"full"}
				// background={"primary.500"}
				// height={"300px"}
				objectFit={"contain"}
			/> */}

         <ImageSrcStyle
            src={sectionData.image}
            width={"650px"}
				height={"auto"}
            objectFit={"contain"}
            />

			<Box className="sectionUXUISAContentWrapper"
            lineHeight={1.5}
            padding={"1rem"}
            >
				<H2Header fontSize="2.25rem">
               {sectionData.title}
               {/* <LikesButton /> */}
               {/* <Increment subCollection="likes/id_thumbs_up" feto="uxuisa"/> */}
               <Increment fieldValue={{ uxuisa: increment(1) }} likesRef={"uxuisa"} />
            </H2Header>

            {sectionData.description.map((text, id) => (
               <PrimaryTextStyle key={id}
                  paddingBottom={"1rem"}
                  >
                     {text}
                  </PrimaryTextStyle>
            ))}

            <LinkButton
               label    =  {sectionData.buttonLabel}
               link     =  {sectionData.buttonLink}
               target   =  {sectionData.linkTarget}
               icon     =  {<FaArrowRight />}
            />

				{/* <Link to={sectionData.buttonLink}>
					<StiloButton
						// variant="link"
						label={sectionData.buttonLabel}
						rightIcon={<FaArrowRight />}
						//=---------------------------=//
						// boxShadow="none"
						// padding="10px 0"
						// hoverColor={"accent.200"}
                  // textTransform={"capitalize"}
                  textTransform={"capitalize"}
					/>
				</Link> */}

			</Box>
		</Flex>
	);
};

export default SectionUXUIStyleArchitecture;
