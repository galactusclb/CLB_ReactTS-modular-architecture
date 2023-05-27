import React from "react";
import { Link } from "react-router-dom";
import useAuth from "features/authentication/hooks/useAuth";
import Logo from "@components/shared/Logo";

const Header = () => {
	const { isLoggedIn, userDetails, logout } = useAuth();

	return (
		<header className="border-b-2 border-gray-100 py-2 px-4 shadow-sm">
			<nav className="">
				<div className="text-white">
					<Logo />
					{/* 
					<div className="text-gray-900">
						<div className="flex">
							asc
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{isLoggedIn && (
									<>
										<li className="nav-item">
											<Link
												className="nav-link active text-gray-900 me-2"
												aria-current="page"
												to="/Profile"
											>
												{userDetails?.userName}
											</Link>
										</li>
										<li className="nav-item">
											<button
												className="btn btn-warning text-gray-900"
												onClick={logout}
											>
												Logout
											</button>
										</li>
									</>
								)}
							</ul>
						</div>
					</div> */}
				</div>
			</nav>
		</header>
	);
};

export default Header;
