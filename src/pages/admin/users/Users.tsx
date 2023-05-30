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
					<PrimaryButton variant="secondary">
						<UploadCloud size={14} /> Upload
					</PrimaryButton>,
					<PrimaryButton>Add Customer</PrimaryButton>,
				]}
			/>
			<div className="mt-8">
				<UserTable />
			</div>
		</div>
	);
};

export default Users;
