import SummaryCard from "@components/shared/cards/SummaryCard";
import { ISummaryCard } from "@components/shared/cards/summary-card.model";

import React from "react";

const SummaryWrapper = () => {
	const cards: ISummaryCard[] = [
		{
			theme: "blue",
			mainText: 50,
			subText: "+2 this week",
			title: "Total Tasks",
		},
		{
			theme: "white",
			mainText: 50,
			subText: "+2 this week",
			title: "Total Tasks",
		},
		{
			theme: "lime",
			mainText: 50,
			subText: "+2 this week",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ab?s",
		},
		{
			theme: "dark",
			mainText: 50,
			subText: "+2 this week",
			title: "Total Tasks",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-4">
			{cards?.map((item) => {
				return (
					<SummaryCard
						theme={item?.theme}
						mainText={item?.mainText}
						title={item?.title}
						subText={item?.subText}
					/>
				);
			})}
		</div>
	);
};

export default SummaryWrapper;
