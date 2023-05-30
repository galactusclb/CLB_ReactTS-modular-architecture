import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

import DataTable from "@components/ui/table/DataTable";
import { DataTableColumnHeader, TableHeader } from "@components/ui/table";
import { PrimaryButton } from "@components/buttons";
import { DownloadCloud } from "react-feather";

export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		// ...
	];
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ row }) => <div className="w-[80px]">{row.getValue("status")}</div>,
		// enableSorting: false,
		// enableHiding: false,
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},
];

const UserTable = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		const data: any = async () => {
			const res = await getData();
			console.log(res);

			setData(res);
		};

		data();
	}, []);

	return (
		<div className="flex flex-col">
			<TableHeader
				title={"Customer"}
				descripion={"Lorem ipsum dolor sit amet consectetur."}
				rightSideActions={[
					<PrimaryButton>
						<DownloadCloud size={14} /> Export
					</PrimaryButton>,
				]}
			/>

			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default UserTable;
