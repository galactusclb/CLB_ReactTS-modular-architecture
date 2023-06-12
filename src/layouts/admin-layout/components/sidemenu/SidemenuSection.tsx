import React from "react";
import { Database, BarChart, Users, File } from "react-feather";

import SidemenuItem from "./SidemenuItem";
import { TypeSidemenuItem } from "./models/SidemenuItem";

const SidemenuSection = () => {
	const menuItems: TypeSidemenuItem[] = [
		{
			title: "Project",
			isActive: true,
			icon: <Database size={20} />,
		},
		{
			title: "Statistics",
			icon: <BarChart size={20} />,
		},
		{
			title: "Users",
			icon: <Users size={20} />,
		},
		{
			title: "Files",
			icon: <File size={20} />,
		},
	];

	return (
		<div className="flex flex-col gap-y-2">
			{/* <h4 className="text-gray-100 uppercase">Main menu</h4> */}
			{menuItems?.map((item, key) => {
				return (
					<SidemenuItem
						key={key}
						title={item?.title}
						isActive={item?.isActive}
						icon={item?.icon}
					/>
				);
			})}
		</div>
	);
};

export default SidemenuSection;
