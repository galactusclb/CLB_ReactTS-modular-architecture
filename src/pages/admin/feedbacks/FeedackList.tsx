import React from "react";

import { FeedbackTable } from "features/admin/feedbacks";

const FeedbackList = () => {
	return (
		<div className="container py-4 mt-5">
			<h1>Feedback</h1>
			<FeedbackTable />
		</div>
	);
};

export default FeedbackList;
