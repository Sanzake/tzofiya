import { Route, Routes } from "react-router";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Protected from "./components/Protected/Protected";
import AddAlertPage from "./pages/AddAlertPage";
import AdminPage from "./pages/AdminPage";
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

				<Route
					path="/addAlert"
					element={
						<Protected>
							<AddAlertPage />
						</Protected>
					}
				/>
				<Route path="/alerts" element={<Protected><MapPage /></Protected>} />
				<Route path="/alerts/:id" element={<Protected><AlertPage /></Protected>} />
				<Route path="/updateAlert/:id" element={<Protected><UpdateAlertPage /></Protected>} />
				<Route path="/" element={<Protected><MePage /></Protected>} />

				<Route path="/me" element={<Protected><MePage /></Protected>} />
				<Route path="/auth/register" element={<Protected><RegisterPage /></Protected>} />

				<Route path="/admin/users" element={<Protected><AdminPage/></Protected>} />

				<Route path="*" element={<h1>404 - Page Not Found</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
