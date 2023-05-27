import React from "react";
import { UploadCloud } from "react-feather";

import { PrimaryButton } from "@components/buttons";
import PageHeader from "@components/shared/PageHeader";

const Users = () => {
	return (
		<div className="flex flex-col px-8 py-4">
			<PageHeader
				title={"Users"}
				buttonGroup={[
					<PrimaryButton
						theme="outline"
						icon={<UploadCloud size={14} />}
						title={"Upload"}
					/>,
					<PrimaryButton title={"Add Customer"} />,
				]}
			/>
			<div className="grid grid-cols-3 gap-8 mt-8"></div>
		</div>
	);
};

export default Users;
