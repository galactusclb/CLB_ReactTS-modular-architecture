import React from "react";
import { Settings } from "react-feather";

import ActionButton from "@components/shared/ActionButton";
import Avatar from "@components/shared/Avatar";

const SidemenuFooter = () => {
	return (
		<div className="flex flex-row py-3 px-3 bg-gray-800 rounded-xl space-x-3">
			<Avatar />
			<div className="flex flex-col flex-grow cursor-default">
				<h3 className="text-gray-50 leading-none">John Deo</h3>
				<p className="text-lime-200 text-sm leading-tight">Admin</p>
			</div>
			<ActionButton
				icon={<Settings size={20} />}
				enableNotifyIndicator={true}
			/>
		</div>
	);
};

export default React.memo(SidemenuFooter);
