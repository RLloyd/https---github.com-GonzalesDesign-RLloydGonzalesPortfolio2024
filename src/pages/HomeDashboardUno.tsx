import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import StyleguideDash from "../components/styleguide/StyleguideDash";
import WelcomeBar from "../components/welcome/WelcomeBar";
import { useGlobalStore } from "../hooks/GlobalStates";
import section2Image from "./../assets/images/wavemaker-developers.png";
import DigitalOne from "./dashboard-components/DigitalOne";
import Portfolio2019 from './dashboard-components/Portfolio2019';
import ProfileCard from "./dashboard-components/ProfileCard";
import SoftwareSkills from "./dashboard-components/SoftwareSkills";
import WelcomeCard from "./dashboard-components/WelcomeCard";
import Zenmonics from "./dashboard-components/Zenmonics";

const dashboardData = [
	{
		title: "Brand Logo",
		description: "Build, test, and deploy modern web apps rapidly right from your browser with the industry’s most open, enterprise-grade low-code Rapid application development platform.",
		image: section2Image,
		imageSize: "220px",
		buttonLabel: "Link to Brand Logo",
		buttonLink: "/brandLogo",
		linkTarget: "_self",
	},
	{
		title: "Typography",
		description: "Build, test, and deploy modern web apps rapidly right from your browser with the industry’s most open, enterprise-grade low-code Rapid application development platform.",
		image: section2Image,
		imageSize: "220px",
		buttonLabel: "Link to Typography",
		buttonLink: "/typography",
		linkTarget: "_self",
	},
];

const HomeDashboardUno = () => {

   const PortfolioGradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.50, brand.100, primary.50)",
      "linear-gradient(to bottom, primary.500, black)");

   const D1GradBGMode = useColorModeValue(
   "linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)",
   "linear-gradient(to bottom, primary.400, primary.700)");

   const SunbirdGradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.50, primary.100, primary.50, primary.50)",
      "linear-gradient(to bottom, primary.400, primary.700)");

   const Port2019GradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.50, primary.100, primary.50, primary.50)",
      "linear-gradient(to bottom, primary.400, primary.400, primary.400, primary.900)");

   const gradatedBGTranslucent = useColorModeValue(
      "linear-gradient(to bottom, #f0fcff75, #bfe9e875, #f0fcff75)",
      "linear-gradient(to bottom, #064e6075, #00000075)");

   const SkillsGradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.400, primary.100, primary.100, primary.50)",
      "linear-gradient(to bottom, primary.600, primary.500, primary.400, primary.900)");
   const StyleguideGradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.400, primary.100, primary.100, primary.50)",
      "linear-gradient(to bottom, primary.100, primary.300, primary.500, primary.900)");

   const headerColor = useColorModeValue("primary.900", "primary.200");
   const BorderColor = useColorModeValue("primary.100", "primary.400");
   const CardBGColorMode = useColorModeValue("primary.50", "primary.600");

   const { designFlat, setDesignFlat } = useGlobalStore()
	const toggleMe = () => {
      setDesignFlat(!designFlat)
      console.log("designFlat: ", designFlat)
	};

   const gridTemplateDesignUno = {
      base: `
        "zero zero zero zero"
        "one one one one"
        "two two two two"
        "three three three three"
        "four four four four "
        "six six six six "
        "five five five five "
      `,
      lg:
      designFlat ?
         `  "one one zero zero zero"
            "one  one two two two"
            "three  three three three three"
            "four four four six six"
            "five  five   five five five" ` : undefined
         //    :
         // `  "zero zero zero zero zero"
         //    "one  one two two two"
         //    "three  three three three three"
         //    "four four four six six"
         //    "five  five   five five five" `
   };
   const sxGridLayout = {
      // display: "flex",
      // flexDirection: {base:"column", lg:"column"},
      gap            :  5,
      marginBottom   :  "2rem",
      position       :  "relative",
      top            :  designFlat ? "40px" : "0px",
      // background     : "primary.500",
      // zIndex          :  "1000",
      // border={"1px solid red"}
   }
   const sxWelcomeArea = {
      top: "0",
      position: "relative",
      left: "0",
      zIndex: "0",
      // border: "1px solid",
      height: designFlat ? undefined : "640px",

      // position       : "relative",
      // top            :  designFlat ? "-10px" : "-160px",
      // // height         :  designFlat ? {base:undefined, lg:"560px"} : "30rem",
      // border         :  "1px solid",
      // // border         :  designFlat ? "1px solid" : undefined,
      // borderColor    :  BorderColor,
      // borderRadius   :  "2xl",
      // // padding        :  "2rem",
      // backgroundImage   :  designFlat ? D1GradBGMode : GDLogoFintech,
      // backgroundRepeat  :  "no-repeat",
      // backgroundPosition   :  designFlat ? "center" :
      //    {  base  :  "-94px   -8px",
      //       sm    :  "-125px  -112px",
      //       md    :  "  0     -50px",
      //       lg    :  "  0     -300px",
      //       xl    :  "  0     -340px"
      //    },
      // backgroundSize :  {base:"160%", md:"cover"},
      // overflow       :  "hidden",
      // zIndex         :  "100",
   }
   const sxAreaOne = {
      display           : designFlat ? "flex" : undefined,
      justifyContent    : designFlat ? "center" : undefined,
      alignItems        : designFlat ? "center" : undefined,
      background        : designFlat ? {base:undefined, lg:CardBGColorMode} : undefined,
      border            : designFlat ? {base:undefined, lg:"1px solid"} : undefined,
      // borderColor       : designFlat ? {base:undefined, md:"red"} : undefined,
      borderColor       : designFlat ? {base:undefined, lg:BorderColor} : undefined,
      // borderColor       : designFlat ? BorderColor : undefined,
      borderRadius      : designFlat ? "2xl" : undefined,
      top               : designFlat ? undefined : "-700px",
      padding           : designFlat ? "0px" : "2rem",
      position          : designFlat ? undefined : "relative",
      //  background: "transparent",
   }
   const sxD1CardDash = {
      // position:   designFlat ? undefined : "relative",
      position:   "relative",
      top:  designFlat ? {lg:"0px"} : "-630px",
      width:   designFlat ? undefined : "full",
      // width:   "full",
      height:  designFlat ? {base:"auto", lg:"auto"}: "auto",
      // height:  "auto",
      border:  designFlat ? "1px solid" : undefined,
      borderColor:   designFlat ? BorderColor : undefined,
      borderRadius:  designFlat ? "2xl" : undefined,
      // borderColor:   BorderColor,
      // borderRadius:  "2xl",
      // background: "primary.50",
      // bgGradient= 'linear(to-t, primary.50, accent.100)'
      // backgroundImage:  D1GradBGMode,
      // backgroundImage:  designFlat ? dashBackground2 : D1GradBGMode,
      // backgroundImage:  designFlat ? GrayGradatedBGWrapper : undefined,

      background: designFlat ? CardBGColorMode : undefined,
      // backgroundImage:  designFlat ? D1GradBGMode : undefined,
      backgroundRepeat: "no-repeat",
      backgroundSize:   "cover",
      // backgroundImage:  D1GradBGMode,
   }
   const sxSunbird = {
      position          :  "relative",
      // top               :  designFlat ? {base:"0px", lg:"0px"} : "-250px",
      height            :  designFlat ? undefined : "90%",
      // height            :  designFlat ? {base:"90%", lg:"380px"} : "90%",
      border            :  "1px solid",
      borderColor       :  BorderColor,
      borderRadius      :  "2xl",
      padding           :  "1rem",
      background: CardBGColorMode,
      // backgroundImage   :  SunbirdGradBGMode,
      // backgroundImage   :  designFlat ? dashBackground2 : SunbirdGradBGMode,
      backgroundRepeat  :  "no-repeat",
      backgroundSize    :  "cover",
      minWidth          :  "0",
      boxShadow         :  "xl",
   }
   const sxStyleguideDash = {
      padding: "2rem 1 rem 1rem",
      borderRadius: "2xl",
      border: "1px solid",
      borderColor: BorderColor,
      background: CardBGColorMode,
      // backgroundImage: StyleguideGradBGMode,
      // backgroundImage: StyleGuideBG,
      // backgroundSize: "cover",
      // background: "hsla(0, 0, 0, 0.50)",
      // opacity: ".5",
      overflow: "hidden",
      position: "relative",
      // top: designFlat ? {base:"-60px", lg:"0px"} :
      top: designFlat ? undefined :
         {base: "-160px", lg: "-350px"},
      height: designFlat ? {base:"100%", lg:"90%", xl:"90%"} : "100%",
   }
   const sxSoftwareSkillsDash = {
      padding: "1rem 1 rem 1rem",
      background: CardBGColorMode,
      // backgroundImage: SkillsGradBGMode,
      borderRadius: "2xl",
      overflow: "hidden",
      border: "1px solid",
      borderColor: BorderColor,
      // height: "10rem",
      position: "relative",
      top: designFlat ?
         {base:"0px", lg:"-50px"} :
         {base: "-160px", lg: "-350px"}
   }
   const sxPortfolio2019Dash = {
      // position={designFlat ? "unset" : "relative"}
      // top={designFlat ? "unset" : "-250px"}
      border: "1px solid",
      borderColor: BorderColor,
      borderRadius: "2xl",
      background: CardBGColorMode,
      // backgroundImage: Port2019GradBGMode,
      // backgroundImage: dashBackground,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      overflow: "hidden",
      height: designFlat ? {base:"100%", lg:"90%", xl:"90%"} : "90%",
      position: "relative",
      top: designFlat ?
         undefined :
         // {base:"-60px", lg:"0px"} :
         {base:"-330px", lg:"-250px"},
      // height: "90%",
      // height: "10rem",
      minWidth: "0",
   }

	return (
		<>

			{/* Grid Layout */}
			<Grid className="gridLayoutContainer"
            templateAreas={gridTemplateDesignUno} sx={sxGridLayout}>

            {/* Welcome */}
				<GridItem area="zero" className="areaZero heroBackground" sx={sxWelcomeArea}>
               {designFlat ? <WelcomeBar/> : undefined }
            </GridItem>

            {/* Profile Card */}
				<GridItem area="one" className="areaOne profileLeftNav profileLogoAreea profileWelcomeCards"
               sx={sxAreaOne}>
               {designFlat ?  <ProfileCard/> : <WelcomeCard/>}
            </GridItem>

            {/* D1 Card */}
				<GridItem area="two" className="areaTwo D1CardDash" sx={sxD1CardDash}>
               <DigitalOne/>
					{/* <Link to={dashboardData[0].buttonLink} target={dashboardData[0].linkTarget} key={0}>
						<StiloButton label={dashboardData[0].buttonLabel} rightIcon={<FaArrowRight />} textTransform={"capitalize"} />
					</Link> */}
				</GridItem>

            {/* Sunbird */}
				<GridItem area="three" className="areaThree sunbirdDash" sx={sxSunbird}>
               <Zenmonics/>
				</GridItem>

            {/* Portfolio 2019 */}
				<GridItem area="four" className="areaFour portfolio2019Dash" sx={sxPortfolio2019Dash}>
               <Portfolio2019/>
				</GridItem>

            {/* Software Skills */}
            <GridItem area="five" className="areaFive softwareSkillsDash" sx={sxSoftwareSkillsDash}>
					<SoftwareSkills/>
				</GridItem>

            {/* Styleguide */}
            <GridItem area="six" className="areaSix styleguideDash" sx={sxStyleguideDash}>
               <StyleguideDash/>
				</GridItem>


			</Grid>

		</>
	);
};

export default HomeDashboardUno