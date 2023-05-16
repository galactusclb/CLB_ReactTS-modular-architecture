import React, { useEffect, useState } from "react";

import { GetFeedbacks } from "../services/feedback.service";

export const useFeedbacks = () => {
	const [feedbacks, setFeedbacks] = useState<any[]>([]);

	const fetchFeedbacks = async () => {
		const response = await GetFeedbacks();

		if (response.success) {
			return setFeedbacks(response.data);
		}

		console.error(response.data);
	};

	useEffect(() => {
		fetchFeedbacks();
	}, []);

	return { feedbacks };
};
