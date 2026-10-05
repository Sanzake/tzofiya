import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AddAlertPage from "./pages/AddAlertPage";
import AlertPage from "./pages/AlertPage";
import MapPage from "./pages/MapPage";
import UpdateAlertPage from "./pages/UpdateAlertPage";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/addAlert" element={<AddAlertPage />} />
				<Route path="/alerts" element={<MapPage />} />
				<Route path="/alerts/:id" element={<AlertPage />} />
        <Route path="/updateAlert/:id" element={<UpdateAlertPage />}/>

				{/* />
        <Route path='/searchAlerts' element={}/>
        <Route path='/filterAlerts' element={}/> */}
			</Route>
		</Routes>
	);
}

export default App;
