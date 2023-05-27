import React from "react";
import { ISummaryCard, Theme } from "./summary-card.model";
import { MoreVertical } from "react-feather";

const SummaryCard = ({
	theme = "white",
	mainText,
	title,
	subText,
}: ISummaryCard) => {
	const getThemes = (value: Theme) => {
		switch (value) {
			case "white": {
				return "bg-gray-50 text-gray-900";
			}
			case "blue": {
				return "bg-blue-700 text-gray-50";
			}
			case "lime": {
				return "bg-lime-200 text-gray-900";
			}
			case "dark": {
				return "bg-gray-900 text-gray-50";
			}
		}
	};

	return (
		<div
			className={`flex flex-col border-2 border-gray-100 py-4 px-4 rounded-3xl ${getThemes(
				theme
			)}`}
		>
			<div className="relative flex flex-row justify-between">
				<h3 className="text-3xl font-medium truncate">{mainText}</h3>

				<a className="cursor-pointer">
					<MoreVertical size={20} />
				</a>
			</div>
			<h4 className="mt-2 truncate">{title}</h4>
			<p className="text-sm mt-2">{subText}</p>
		</div>
	);
};

export default SummaryCard;
