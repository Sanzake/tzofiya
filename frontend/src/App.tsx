import { Route, Routes } from "react-router";
import "./App.css";

import Layout from "./components/Layout/Layout";
import AddAlertPage from "./pages/AddAlertPage";
import AlertPage from "./pages/AlertPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import MePage from "./pages/MePage";
import RegisterPage from "./pages/RegisterPage";
import UpdateAlertPage from "./pages/UpdateAlertPage";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/auth/login" element={<LoginPage />} />

				<Route path="/addAlert" element={<AddAlertPage />} />
				<Route path="/alerts" element={<MapPage />} />
				<Route path="/alerts/:id" element={<AlertPage />} />
				<Route path="/updateAlert/:id" element={<UpdateAlertPage />} />
				<Route path="/" element={<MePage />} />

				<Route path="/me" element={<MePage />} />
				<Route path="/auth/register" element={<RegisterPage />} />

				<Route path="*" element={<h1>404 - Page Not Found</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
