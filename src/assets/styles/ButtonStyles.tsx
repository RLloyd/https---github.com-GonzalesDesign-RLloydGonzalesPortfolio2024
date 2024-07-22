import { mode } from "@chakra-ui/theme-tools";
import { ReactElement } from "react";
import { PrimaryButtonStyle } from "./Styles";

type Props<T> = {
	variant?: string;
	label: string;
	leftIcon?: T;
	rightIcon?: T;
	colorScheme?: string;
	color?: string;
	background?: string;
	hoverColor?: string;
	hoverBg?: string;
	fontSize?: string;
	fontWeight?: string;
	textTransform?: string;
	padding?: string;
	borderRadius?: string;
	boxShadow?: string;
};
// const hoverColor = "brand.100"

const sxStilo = {
	// variant:       "solid",
	// colorScheme:   "brand",
	// borderRadius:  "md",
	// border:        "1px solid",
	// size:          "xl",
	// textTransform: "uppercase",
	// padding:       "24px",
	// fontFamily:    "Open Sans",
	// fontSize:      "lg",
	fontWeight: "700",
	// boxShadow:     "xl",
	_hover: { bg: "primary.100", color: "primary.700" },
};

export const StiloButton = ({
	variant,
	label,
	leftIcon,
	rightIcon,
	// colorScheme,
	color,
	background,
	hoverColor,
	hoverBg,
	fontSize = "lg",
	fontWeight,
	textTransform = "uppercase",
	padding = "24px",
	borderRadius = "md",
	boxShadow,
}: Props<ReactElement>) => {
	// export const StiloButton = ( {label}: {label:string} ) => { //inline definition
	return (
		<>
			<PrimaryButtonStyle
				sx={sxStilo}
				variant={variant}
				leftIcon={leftIcon}
				rightIcon={rightIcon}
				// colorScheme={colorScheme}
				// color={color}
				// background={background}
				fontSize={fontSize}
				fontWeight={fontWeight}
				textTransform={textTransform}
				boxShadow={boxShadow}
				padding={padding}
				borderRadius={borderRadius}
				// border={"1px solid red"}
				// hoverColor={hoverColor}
				// _hover={{ bg: 'primary.100', color: "primary.700" }}
			>
				{label}
			</PrimaryButtonStyle>
		</>
	);
};
// export default StiloButton;

export const StyleButton = {
	variant: "solid",
	colorScheme: "brand",
	// color: {color},
	// color:         {btnColor},
	// background:    {btnBg},
	borderRadius: "md",
	border: "1px solid",
	size: "xl",
	// textTransform: "uppercase",
	padding: "24px",
	// fontFamily:    "Open Sans",
	fontSize: "lg",
	fontWeight: "800",
	boxShadow: "xl",
};

// export const ButtonStylesX = {
// 	// Styles for the base style
// 	baseStyle: {},
// 	// Styles for the size variations
// 	sizes: {},
// 	// Styles for the visual style variations
// 	variants: {
// 		primary: (props) => ({
// 			bg: "primary.100",
// 			color: "white",
// 			_hover: {
// 				// bg: mode(darken("primary", 20), whiten("primary", 20))
// 				bg: mode("brand.500", "brand.900"),
// 			},
// 		}),
// 	},
// 	// The default `size` or `variant` values
// 	defaultProps: {},
// };

// export const ButtonTheme = {
//    // style object for base or default style
//    baseStyle: {
//       fontWeight: 'bold',
//       // textTransform: 'uppercase',
//       borderRadius: 'base'
//    },
//    // styles for different sizes ("sm", "md", "lg")
//    sizes: {
//       sm: {
//          fontSize: 'sm',
//          px: 4, // <-- px is short for paddingLeft and paddingRight
//          py: 3, // <-- py is short for paddingTop and paddingBottom
//       },
//       md: {
//          fontSize: 'md',
//          px: 6, // <-- these values are tokens from the design system
//          py: 4, // <-- these values are tokens from the design system
//       },
//       lg: {
//          fontSize: '2rem',
//          px: 12, // <-- these values are tokens from the design system
//          py: 4, // <-- these values are tokens from the design system
//       },
//    },
//    // styles for different visual variants ("outline", "solid")
//    variants: {
//       variants: {
//          outline: {
//             border: '2px solid',
//             borderColor: 'purple.500',
//             color: 'purple.500',
//          },
//          solid: {
//             bg: 'purple.500',
//             color: 'white',
//          },
//       },
//    },
//    // default values for 'size', 'variant' and 'colorScheme'
//    defaultProps: {
//       size: 'md',
//       variant: 'solid',
//       colorScheme: 'brand',
//    },
// }

// type ButtonProps = {
// 	buttonLabel: string;
// 	buttonLink: string;
// 	linkTarget: string;
// 	buttonRightIcon?: ReactElement;
// };

// const PrimaryAccentButtonXXX = ({ buttonLabel, buttonLink, linkTarget, buttonRightIcon }: ButtonProps) => {
//    // const PrimaryAccentButton = (props :any) => {
//    const { colorMode } = useColorMode();
//    // const { buttonLabel, buttonLink, linkTarget, buttonRightIcon  } = props;
//    return (
//       // {/* Button & Link */}
//       <Link to={buttonLink} target={linkTarget}>
//          <Button className="heroButton" variant={colorMode === "light" ? "primary" : "accent"} rightIcon={buttonRightIcon}>
//             {buttonLabel}
//          </Button>
//       </Link>
//    );
// };

// export default PrimaryAccentButtonXXX;


// export const PrimaryAccentButton = ({ buttonLabel, buttonLink, linkTarget, buttonRightIcon }: ButtonProps) => {

// const PrimaryAccentButton = (props :any) => {
// 	const { colorMode } = useColorMode();
// 	const { buttonLabel, buttonLink, linkTarget, buttonRightIcon  } = props;
// 	return (
// 		<Link to={buttonLink} target={linkTarget}>
// 			<Button className="primaryAccentButton" variant={colorMode === "light" ? "primary" : "accent"} rightIcon={buttonRightIcon}>
// 				{buttonLabel}
// 			</Button>
//          {...props}
// 		</Link>
// 	);
// };
// export default PrimaryAccentButton;

// export const SuccessButton = (props: any) => {
// 	const { colorMode } = useColorMode();
// 	const { buttonLabel, buttonLink, linkTarget, buttonRightIcon  } = props;
// 	return (
// 		<Link to={buttonLink} target={linkTarget}>
// 			<Button className="successButton"
//             variant={colorMode === "light" ? "success" : "accent"}
//             rightIcon={buttonRightIcon}
//             {...props}
//             >
// 				{buttonLabel}
// 			</Button>
// 		</Link>
// 	);
// };

