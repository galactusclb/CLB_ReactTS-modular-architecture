import React from "react";

import { ProductsTable } from "features/admin/products";

const ProductList = () => {
	return (
		<div className="container py-4 mt-5">
			<h1>Products</h1>
			<ProductsTable />
		</div>
	);
};

export default ProductList;
