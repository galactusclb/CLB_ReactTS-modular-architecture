import React from "react";
import { Bell } from "react-feather";

import ActionButton from "@components/shared/ActionButton";
import Logo from "@components/shared/Logo";

const SidemenuHeader = () => {
	return (
		<div className="flex flex-row justify-between items-center py-3 px-3">
			<Logo />
			<span className="ms-auto">
				<ActionButton icon={<Bell size={20} />} enableNotifyIndicator={true} />
			</span>
		</div>
	);
};

export default SidemenuHeader;
