import React from "react";

interface Props {
	title?: string | React.ReactNode[];
	descripion?: string | React.ReactNode[];
	rightSideActions?: React.ReactNode[];
}

const TableHeader = ({ title, descripion, rightSideActions }: Props) => {
	return (
		<div className="flex flex-row flex-nowrap mb-6 justify-between">
			<div className="flex flex-col">
				<h3 className="font-bold">{title}</h3>
				<p className="text-sm leading-tight text-gray-500">{descripion}</p>
			</div>

			<div className="flex flex-row flex-nowrap mb-6 gap-x-4">
				{rightSideActions}
			</div>
		</div>
	);
};

export default TableHeader;
