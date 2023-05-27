import React from "react";
import { Database, BarChart, Users, File } from "react-feather";

import SidemenuItem from "./SidemenuItem";
import { TypeSidemenuItem } from "./models/SidemenuItem";

const SidemenuSection = () => {
	const menuItems: TypeSidemenuItem[] = [
		{
			title: "Project",
			icon: <Database size={20} />,
			path: "dashboard",
		},
		{
			title: "Statistics",
			icon: <BarChart size={20} />,
			path: "feedback",
		},
		{
			title: "Users",
			icon: <Users size={20} />,
			path: "users",
		},
		{
			title: "Files",
			icon: <File size={20} />,
			path: "",
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
						icon={item?.icon}
						path={item?.path}
					/>
				);
			})}
		</div>
	);
};

export default SidemenuSection;
