import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { doGetProducts } from "../services/products.service";
import { Product } from "../types/Product.type";

export const useProducts = () => {
	const [products, setProducts] = useState<Product[] | undefined>([]);

	const { data, isFetching, isError, error, refetch } = useQuery({
		queryKey: ["productList"],
		queryFn: async () => {
			console.log("ggg");

			await new Promise((resolve) => setTimeout(resolve, 2000));

			const { data } = await doGetProducts();

			console.log(data);

			return data?.data as Product[];
		},
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		setProducts(data);
	}, [data]);

	return { products, isFetching, isError, error, refetch };
};
