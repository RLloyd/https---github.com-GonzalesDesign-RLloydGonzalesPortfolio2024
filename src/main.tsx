import { ChakraProvider, ColorModeScript }      from "@chakra-ui/react";
import React         from "react";
import ReactDOM      from "react-dom/client";
import { RouterProvider, createBrowserRouter }  from "react-router-dom";
import App           from "./App";
import LocalData     from "./components/localData/LocalData";
// import AppSnippets   from "../a-toTrash/snippets/AppSnippets";
import "./index.css";
import Projects      from "./pages/Projects";
import Typicode      from "./pages/Typicode";
import FISDigitalOne from "./pages/dashboard-components/FISD1Page";
// import ZenmonicsPage from "./pages/ZenmonicsPage";
import ParallaxWithings    from "@components/styleguide/animationSamples/parallax/ParallaxWithings";
import { AnimatePresence } from "framer-motion";
import theme         from "./assets/styles/theme/Theme";
import Animations    from "./components/styleguide/Animations";
import BrandLogo     from "./components/styleguide/BrandLogo";
import Buttons       from "./components/styleguide/ButtonsPage";
import ColorPalette  from "./components/styleguide/ColorPalette";
import DashboardCard from "./components/styleguide/DashboardCard";
import HeroBanner    from "./components/styleguide/HeroBanner";
import Modal         from "./components/styleguide/Modal";
import Styleguide    from "./components/styleguide/StyleguidePage";
import Typography    from "./components/styleguide/Typography";
import Forms         from "./components/styleguide/forms/Forms";
import SunbirdPage   from "./pages/SunbirdPage";
import LoginFirebase from "@components/styleguide/forms/reactHookForms/LoginFirebase";
import Resume2024 from "@components/resume/Resume2024";

// const location = useLocation();

// Try this: https://reactrouter.com/en/main/utils/create-routes-from-elements

/* React Router */
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "projects",
		element: <Projects />,
	},
	// {
	// 	path: "snippets",
	// 	element: <AppSnippets />,
	// },
	{
		path: "localData",
		element: <LocalData />,
	},
	{
		path: "typicode",
		element: <Typicode />,
	},
	{
		path: "fisD1",
		element: <FISDigitalOne />,
	},
	{
		path: "sunbirdDashboard",
		element: <SunbirdPage />,
	},
	{
		path: "styleguide",
		element: <Styleguide />,
	},
	{
		path: "brandLogo",
		element: <BrandLogo />,
	},
	{
		path: "typography",
		element: <Typography />,
	},
	{
		path: "colorpalette",
		element: <ColorPalette />,
	},
	{
		path: "buttons",
		element: <Buttons />,
	},
	{
		path: "animations",
		element: <Animations />,
	},
	{
		path: "parallax",
		element: <ParallaxWithings />,
	},
	{
		path: "forms",
		element: <Forms />,
	},
	{
		path: "card",
		element: <DashboardCard />,
	},
	{
		path: "hero",
		element: <HeroBanner />,
	},
	{
		path: "modal",
		element: <Modal />,
	},
	{
		path: "login",
		element: <LoginFirebase />,
	},
	{
		path: "resume",
		element: <Resume2024 />,
	},
	// {
	// 	path: "drawer",
	// 	element: <DrawerPopup />,
	// },
	// {
	// 	path: "fisGrid",
	// 	element: <FISGridWrapper />,
	// },
	{
		// path: "pwa.rlloydgonzales.com",
		// // path: "portfolio",
		// //   element: <Portfolio2019Page />,
		// element: 'url("pwa.rlloydgonzales.com")',
		// // element: "pwa.rlloydgonzales.com target=_blank rel=noopener noreferrer",
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
      {/* https://chakra-ui.com/docs/styled-system/css-variables */}
		{/* <ChakraProvider theme={theme} cssVarsRoot='#app'> */}
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			{/* <App /> */}
			{/* <RouterProvider router={router} /> */}
         <AnimatePresence>
            <RouterProvider router={router} key={location.pathname}/>
            {/* <RouterProvider router={router}/> */}
            {/* <RouterProvider router={router} location={location} key={location.key}/> */}
         </AnimatePresence>
		</ChakraProvider>
	</React.StrictMode>
);
