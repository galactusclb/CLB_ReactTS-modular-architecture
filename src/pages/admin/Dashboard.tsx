import React from "react";

import PageHeader from "@components/shared/PageHeader";
import { SummaryWrapper } from "features/admin/dashboard";
import SummaryWrapper2 from "features/admin/dashboard/components/SummaryWrapper2";

const Dashboard = () => {
	return (
		<div className="flex flex-col px-8 py-4">
			<PageHeader title={"Dashboard"} />
			<div className="grid grid-cols-3 gap-8 mt-8">
				<SummaryWrapper />
				<SummaryWrapper2 title="Reservation" />
			</div>
		</div>
	);
};

export default Dashboard;
