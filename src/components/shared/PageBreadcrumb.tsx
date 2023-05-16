/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import style from "@styles/main.scss";

const PageBreadcrumb = ({
	pageTitle,
	isRootDisable,
	items,
}: {
	pageTitle: string;
	isRootDisable?: boolean;
	items: {
		path?: string;
		title?: string | number;
	}[];
}) => {
	const navigate = useNavigate();

	return (
		<div className={`${style["breadcrumb-wrapper"]}`}>
			{pageTitle ? <h2 className="mb-4">{pageTitle}</h2> : null}
			<Breadcrumb>
				<Breadcrumb.Item>
					<div
						className={`d-inline-flex flex-row flex-nowrap gx-2 ${style["root-item"]}`}
					>
						{isRootDisable ? (
							<a onClick={() => navigate("/user/selection")}>Kominike</a>
						) : (
							"Kominike"
						)}
					</div>
				</Breadcrumb.Item>

				{items?.map((item: any, key: any) => {
					return (
						<Breadcrumb.Item key={key}>
							{item?.path ? (
								<a onClick={() => navigate(item?.path)}>{item?.title}</a>
							) : (
								item?.title
							)}
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</div>
	);
};

PageBreadcrumb.prototype = {
	pageTitle: PropTypes.string,
	isRootDisable: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string,
			title: PropTypes.string.isRequired,
		})
	),
};

export default PageBreadcrumb;
