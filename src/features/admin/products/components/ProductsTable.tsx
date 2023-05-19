import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const ProductsTable = () => {
	const { products, isFetching, refetch } = useProducts();
	const navigate = useNavigate();

	return (
		<div className="row">
			<div className="d-flex">
				{isFetching ? "Loading" : "none"}
				<button
					className="btn btn-secondary ms-auto"
					onClick={() => {
						refetch();
					}}
				>
					Refresh
				</button>
			</div>
			<table className="table mt-4">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Product name</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						<th scope="col">Action(s)</th>
					</tr>
				</thead>
				<tbody>
					{isFetching ? (
						<tr>
							<td colSpan={5}>Loading</td>
						</tr>
					) : (
						products?.map((item) => {
							return (
								<tr>
									<th scope="row">{item?._id}</th>
									<td>{item?.name}</td>
									<td>{item?.description}</td>
									<td>{item?.price}</td>
									<td>
										<div className="d-flex flex-row flex-nowrap">
											<button
												type="button"
												className="btn btn-primary btn-sm"
												onClick={() => navigate(`${item?._id}`)}
											>
												Update
											</button>
											<button
												type="button"
												className="btn btn-danger btn-sm ms-2"
											>
												Delete
											</button>
										</div>
									</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsTable;
