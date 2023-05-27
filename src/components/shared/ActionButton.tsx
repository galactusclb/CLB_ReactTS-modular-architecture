import React from "react";
import { Bell } from "react-feather";

interface Props {
	icon: React.ReactNode;
	enableNotifyIndicator?: boolean;
}

const ActionButton = ({ icon, enableNotifyIndicator = false }: Props) => {
	return (
		<a className="relative flex justify-center items-center text-gray-100 bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600 duration-300 w-9 h-9">
			{enableNotifyIndicator ? (
				// <span className="absolute flex h-2 w-2 -right-[1px] -top-0.5">
				<span className="absolute flex h-2 w-2 right-1 top-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
				</span>
			) : null}
			{icon}
		</a>
	);
};

export default ActionButton;
