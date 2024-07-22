import { Grid, GridItem, border, useColorModeValue } from "@chakra-ui/react";
import GDLogoFintech from "@images/GD-fintech-bg-faded.png";
import StyleguideDash from "../components/styleguide/StyleguideDash";
import WelcomeBar from "../components/welcome/WelcomeBar";
import { useGlobalStore } from "../hooks/GlobalStates";
import DigitalOne from "./dashboard-components/DigitalOne";
import Portfolio2019 from "./dashboard-components/Portfolio2019";
import ProfileCard from "./dashboard-components/ProfileCard";
import SoftwareSkills from "./dashboard-components/SoftwareSkills";
import WelcomeCard from "./dashboard-components/WelcomeCard";
import Zenmonics from "./dashboard-components/Zenmonics";

const HomeDashboardDos = () => {
	const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleMe = () => {
		setDesignFlat(!designFlat);
		console.log("designFlat: ", designFlat);
	};
	const BorderColor = useColorModeValue("primary.50", "primary.400");
	const CardBGColorMode = useColorModeValue("primary.50", "primary.600");
	const D1GradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)",
      "linear-gradient(to bottom, primary.400, primary.700)"
      );

	const gridTemplateDesignUno = {
		base: `
        "zero zero zero zero"
        "one one one one"
        "two two two two"
        "three three three three"
        "four four four four"
        "six six six six "
        "five five five five "
      `,
		lg: designFlat
			? undefined
			: `  "zero zero zero zero zero"
            "one  one one one one"
            "two  two two two two"
            "three  three four four four"
            "five  five   five six six"
         `,
	};

	const sxGridLayout = {
		gap: 5,
		marginBottom: "2rem",
		position: "relative",
		top: "0px",
      // border: "1px solid"
		// top            :  designFlat ? "40px" : "0px",
	};
	const sxWelcomeArea = {
		top: "0px", //{base:"30px", lg:"0px"},
		position: "relative",
		left: "0",
		zIndex: "0",
		// border: "1px solid",
		// height: "570px",
		height: "640px",
		// height: designFlat ? undefined : "640px",

		// position       : "relative",
		// top            :  designFlat ? "-10px" : "-160px",
		// // height         :  designFlat ? {base:undefined, lg:"560px"} : "30rem",
		// border         :  "1px solid",
		// // border         :  designFlat ? "1px solid" : undefined,
		// borderColor    :  BorderColor,
		borderRadius: "2xl",
		// // padding        :  "2rem",
		backgroundImage: GDLogoFintech,
		// backgroundImage   :  designFlat ? D1GradBGMode : GDLogoFintech,
		backgroundRepeat: "no-repeat",
		backgroundPosition: { base: "-94px   -8px", sm: "-125px  -112px", md: "  0     -50px", lg: "  0     -160px", xl: "  0     -340px" },
		backgroundSize: { base: "160%", md: "cover" },
		// overflow       :  "hidden",
		// zIndex         :  "100",
	};

	const sxAreaOne = {
		// display: designFlat ? "flex" : undefined,
		// justifyContent: designFlat ? "center" : undefined,
		// alignItems: designFlat ? "center" : undefined,
		// background: designFlat ? CardBGColorMode : undefined,
		// border:  designFlat ? "1px solid" : undefined,
		// BorderColor:   designFlat ? BorderColor : undefined,
		// borderRadius:  designFlat ? "2xl" : undefined,

		// top: { base: "-660px", lg: "-700px" },
		top: designFlat ? undefined : "-700px",
		padding: "2rem",
		// padding: designFlat ? "0px" : "2rem",
		position: "relative",
		//  position: designFlat ? undefined : "relative",
		//  background: "transparent",
	};

	const sxD1CardDash = {
		position: "relative",
		top: "-630px",
		width: designFlat ? undefined : "full",
		height: designFlat ? { base: "auto", lg: "auto" } : "auto",
		// border: "1px solid",
		// borderColor: designFlat ? BorderColor : undefined,
		borderRadius: designFlat ? "2xl" : undefined,
		background: designFlat ? CardBGColorMode : undefined,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
      overflow: "hidden",
      /*--= motion =-*/
      // initial:{opacity: 0, x: "400px"},
      // animate:{opacity: 1, x: "0px"},
      // transition:{ease:easing, duration:.5, delay:.5}
	};
	const sxSunbird = {
		position: "relative",
		top: designFlat ? { base: "0px", lg: "-10px" } : "-630px",
		height: designFlat ? { base: "90%", lg: "380px" } : "90%",
		border: "1px solid",
		borderColor: BorderColor,
		borderRadius: "2xl",
		background: CardBGColorMode,
		// backgroundImage   :  SunbirdGradBGMode,
		// backgroundImage   :  designFlat ? dashBackground2 : SunbirdGradBGMode,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		minWidth: "0",
		boxShadow: "xl",
      overflow: "hidden",
      /*--= motion =-*/
      // initial:{opacity: 0, x: "400px"},
      // animate:{opacity: 1, x: "0px"},
      // transition:{ease:easing, duration:.5, delay:.5}
	};

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
		height: designFlat ? { base: "100%", md: "90%", xl: "90%" } : "90%",
		position: "relative",
		top: designFlat ?
         { base: "-60px", lg: "0px" } :
         { base: "-685px", lg: "-630px" },
		// height: "90%",
		// height: "10rem",
		minWidth: "0",
	};

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
         { base: "-60px", lg: "-50px" } :
         { base: "-750px", md: "-760px", lg: "-705px" },
	};
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
		top: designFlat ?
         { base: "-705px", lg: "0px" } :
         { base: "-750px", md: "-760px", lg: "-705px" },
		// height: designFlat ? {base:"100%", lg:"90%", xl:"90%"} : "100%",
		// height: "100%",
	};
	const sxFooterDash = {
		padding: "2rem 1rem 1rem",
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
		top: designFlat ?
         { base: "-60px", lg: "0px" } :
         { base: "-750px", md: "-760px", lg: "-705px" },
         // { base: "-160px", md: "-705px" },
		// height: designFlat ? {base:"100%", lg:"90%", xl:"90%"} : "100%",
		height: "100%",
	};

	return (
		//  {/* Grid Layout */}
		<Grid className="gridLayoutContainer" templateAreas={gridTemplateDesignUno} sx={sxGridLayout}>
			{/* Welcome */}
			<GridItem area="zero" className="areaZero heroBackground" sx={sxWelcomeArea}>
				{designFlat ? <WelcomeBar /> : undefined}
			</GridItem>

			{/* Profile Card */}
			<GridItem area="one" className="areaOne profileLeftNav profileLogoAreea profileWelcomeCards" sx={sxAreaOne}>
				{designFlat ? <ProfileCard /> : <WelcomeCard />}
			</GridItem>

			{/* D1 Card */}
			<GridItem area="two" className="areaTwo D1CardDash" sx={sxD1CardDash}>
				<DigitalOne />
			</GridItem>

			{/* Sunbird */}
			<GridItem area="three" className="areaThree sunbirdDash" sx={sxSunbird}>
				   <Zenmonics />
			</GridItem>

			{/* Portfolio 2019 */}
			<GridItem area="four" className="areaFour portfolio2019Dash" sx={sxPortfolio2019Dash}>
				<Portfolio2019 />
			</GridItem>

			{/* Software Skills */}
			<GridItem area="five" className="areaFive softwareSkillsDash" sx={sxSoftwareSkillsDash}>
				<SoftwareSkills />
			</GridItem>

			{/* Styleguide */}
			<GridItem area="six" className="areaSix styleguideDash" sx={sxStyleguideDash}>
				<StyleguideDash />
			</GridItem>

			{/* Footer */}
			{/* <GridItem area="seven" className="areaSeven FooterDash" sx={sxFooterDash}>
				FOOTER
			</GridItem> */}
		</Grid>
	);
};

export default HomeDashboardDos;
