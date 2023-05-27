import React from "react";
import { useLocation } from "react-router-dom";

const useGetActivePage = (path: string) => {
	const location = useLocation();

	if (path === location?.pathname) {
		return true;
	}
	return false;
};

export default useGetActivePage;
