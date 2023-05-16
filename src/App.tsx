import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/admin-layout/AdminLayout";
import UserLayout from "layouts/user-layout/UserLayout";
import { NotFound } from "@pages/NotFound";

function App() {
	return (
		<div className="container-fuild">
			<BrowserRouter>
				<Routes>
					<Route path="/admin/*" element={<AdminLayout />} />
					<Route path="/*" element={<UserLayout />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>

			{/* <ToastContainer /> */}
		</div>
	);
}

export default App;
