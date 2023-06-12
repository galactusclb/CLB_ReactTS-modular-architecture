import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AdminRoutes from "routes/admin.routes";
import Header from "./components/Header";
import { RouteType } from "@models/Route.model";
import useAuth from "features/authentication/hooks/useAuth";
import useRouteGenerator from "hook/useRouteGenerator";
import Sidemenu from "./components/Sidemenu";

const AdminLayout = () => {
	const { isLoggedIn } = useAuth();

	const location = useLocation();

	const { getRoutes } = useRouteGenerator();

	return !isLoggedIn ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		<div className="container h-screen max-h-screen grid grid-cols-12 ">
			<div className="max-h-full col-span-2 bg-gray-900 overflow-hidden">
				<Sidemenu />
			</div>
			<div className="col-span-10 bg-white">
				<Header />
				<div className="">
					<Routes>
						{getRoutes(AdminRoutes, location?.pathname)}
						{/* <Route path="*" element={<Navigate to="/feedbacks" replace />} /> */}
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
