import React from "react";
import { useNavigate } from "react-router-dom";

import { useFeedbacks } from "features/admin/feedbacks/hooks/useFeedbacks";

const FeedbackTable = () => {
	const { feedbacks } = useFeedbacks();
	const navigate = useNavigate();

	console.log(feedbacks);

	return (
		<table className="table mt-4">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
					<th scope="col">Action(s)</th>
				</tr>
			</thead>
			<tbody>
				{feedbacks?.map((item) => {
					return (
						<tr>
							<th scope="row">{item?._id}</th>
							<td>{item?.title}</td>
							<td>{item?.desciption}</td>
							<td>{item?.timeStamp}</td>
							<td>
								<div className="d-flex flex-row flex-nowrap">
									<button
										type="button"
										className="btn btn-primary btn-sm"
										onClick={() => navigate(`${item?._id}`)}
									>
										Update
									</button>
									<button type="button" className="btn btn-danger btn-sm ms-2">
										Delete
									</button>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default FeedbackTable;
