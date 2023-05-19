import React from "react";
import { Navigate, Route } from "react-router-dom";

import { RouteType } from "@models/Route.model";
import useAuth from "features/authentication/hooks/useAuth";

const useRouteGenerator = () => {
	const { userDetails } = useAuth();

	const getRoutes = (
		routes: RouteType[],
		currentPath?: string,
		bypassPath?: string
	) => {
		//? bypassPath => looks like this : getRoutes(AdminRoutes,undefined, "/admin")

		const userRoles: string | string[] | undefined = userDetails?.role;

		return routes.map((prop, key) => {
			const Element = prop?.component;

			const isAuthorized = getAuthorization(prop.roles, userRoles);

			return (
				<Route
					path={prop.path}
					element={
						!isAuthorized ? ( // if the user is not authorized, navigate to an unauthorized page
							<Navigate to="/unauthorized" />
						) : prop?.redirectTo ? (
							bypassPath ? (
								<Navigate to={bypassPath + prop?.redirectTo} />
							) : (
								<Navigate to={navigatePath(currentPath, prop?.redirectTo)} />
							)
						) : Element ? (
							<Element />
						) : null
					}
					key={key}
				/>
			);
		});
	};

	const navigatePath = (currentPath?: string, navigateTo?: string) => {
		const normalizedCurrentPath = currentPath?.endsWith("/")
			? currentPath
			: `${currentPath}/`;

		const parentPath = normalizedCurrentPath.substring(
			0,
			normalizedCurrentPath.lastIndexOf("/")
		);
		const finalPath = `${parentPath}${navigateTo}`;

		return finalPath;
	};

	const getAuthorization = (
		authorizedRoles?: string[],
		userRoles?: string | string[]
	) => {
		if (!userRoles) return true;

		return authorizedRoles
			? Array.isArray(userRoles)
				? userRoles.some((role) => authorizedRoles.includes(role))
				: authorizedRoles.includes(userRoles)
			: true;
	};

	return {
		getRoutes,
	};
};

export default useRouteGenerator;
