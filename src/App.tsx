import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/admin-layout/AdminLayout";
import UserLayout from "layouts/user-layout/UserLayout";
import { NotFound } from "@pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	);
}

export default App;
