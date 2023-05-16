import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import UserRoutes from "routes/user.routes";
import Header from "./components/Header";
import useRouteGenerator from "hook/useRouteGenerator";

const UserLayout = () => {
	const location = useLocation();

	const { getRoutes } = useRouteGenerator();

	return (
		<div className="container-fluid">
			<Header />

			<div className="mt-5">
				<Routes>
					{getRoutes(UserRoutes, location?.pathname)}
					<Route path="*" element={<Navigate to="/notices" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default UserLayout;
