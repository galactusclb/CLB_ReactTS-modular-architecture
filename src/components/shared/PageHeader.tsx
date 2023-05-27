import React from "react";

import Logo from "@components/shared/Logo";

interface Prop {
	title: string | React.ReactNode;
	buttonGroup?: React.ReactNode[];
}

const PageHeader = ({ title, buttonGroup }: Prop) => {
	return (
		<div className="flex flex-row flex-nowrap justify-between">
			<h2 className="text-2xl font-medium">{title}</h2>

			<div className="flex flex-row gap-x-2">{buttonGroup}</div>
		</div>
	);
};

export default PageHeader;
