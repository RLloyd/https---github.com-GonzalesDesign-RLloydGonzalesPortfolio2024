import "./App.css";
import { useGlobalStore } from "./hooks/GlobalStates";
import HomeDashboardDos from "./pages/HomeDashboardDos";
import HomeDashboardUno from "./pages/HomeDashboardUno";

type Props = {
	color: string;
};

function App() {
   const { designFlat } = useGlobalStore()
   // const { designFlat, setDesignFlat } = useGlobalStore()

	return (
		<>
			{/* <Layout> */}
            {/* <Dashboard /> */}
            {designFlat ? <HomeDashboardUno/> : <HomeDashboardDos/> }
            {/* <PortfolioDashboard/> */}
         {/* </Layout> */}
		</>
	);
}

export default App;
