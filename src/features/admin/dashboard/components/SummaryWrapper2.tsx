import React from "react";
import { MoreVertical } from "react-feather";

interface Props {
	title: string;
}

const SummaryWrapper2 = ({ title }: Props) => {
	return (
		<div className="bg-gray-100 rounded-3xl px-4 py-4 border-gray-200 border-2">
			<div className="relative flex flex-row justify-between">
				<h3 className="font-normal truncate">{title}</h3>

				<a className="cursor-pointer">
					<MoreVertical size={20} />
				</a>
			</div>
		</div>
	);
};

export default SummaryWrapper2;
