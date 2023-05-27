import { DashboardHeader, SummaryWrapper } from "features/admin/dashboard";
import SummaryWrapper2 from "features/admin/dashboard/components/SummaryWrapper2";
import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col px-4 py-4">
			<DashboardHeader />
			<div className="grid grid-cols-3 gap-8 mt-8">
				<SummaryWrapper />
				<SummaryWrapper2 title="Reservation" />
			</div>
		</div>
	);
};

export default Dashboard;
