import React from "react";
import { UploadCloud } from "react-feather";

import { PrimaryButton } from "@components/buttons";
import PageHeader from "@components/shared/PageHeader";
import { UserTable } from "features/admin/users";

const Users = () => {
	return (
		<div className="flex flex-col px-8 py-4">
			<PageHeader
				title={"Users"}
				buttonGroup={[
					<PrimaryButton
						variant="secondary"
						icon={<UploadCloud size={14} />}
						title={"Upload"}
					/>,
					<PrimaryButton title={"Add Customer"} />,
				]}
			/>
			<div className="mt-8">
				<UserTable />
			</div>
		</div>
	);
};

export default Users;
