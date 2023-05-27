import React from "react";
import { Bell } from "react-feather";

import ActionButton from "@components/shared/ActionButton";

const SidemenuHeader = () => {
	return (
		<div className="flex flex-row justify-between items-center py-3 px-3">
			<h3 className="text-xl text-gray-100 w-10 h-w-10 border-2 border-transparent rounded-lg overflow-hidden">
				<img
					src="/src/assets/images/logo.png"
					className="w-full h-full"
					alt=""
				/>
			</h3>
			<ActionButton icon={<Bell size={20} />} enableNotifyIndicator={true} />
		</div>
	);
};

export default SidemenuHeader;
