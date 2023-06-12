import { TypeSidemenuItem } from "./models/SidemenuItem";
import React, { ReactNode } from "react";

const SidemenuItem = ({ title, icon, isActive }: TypeSidemenuItem) => {
	return (
		<div
			className={`flex flex-coulmn align-middle gap-x-2 text-gray-100 px-4 py-2.5 rounded-xl cursor-pointer border-2  hover:border-gray-500 duration-300 ${
				isActive
					? "bg-lime-200 text-gray-900 font-medium border-lime-200 hover:bg-transparent hover:border-lime-200 hover:text-lime-200 "
					: "border-gray-900"
			}`}
		>
			<span className="mt-0.5 me-2"> {icon} </span> {title}
		</div>
	);
};

export default SidemenuItem;
