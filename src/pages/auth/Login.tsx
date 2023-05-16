import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useAuth from "features/authentication/hooks/useAuth";
import { constants } from "utils/constants";

type Inputs = {
	userName: string;
	password: string;
};

const Login = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const { login } = useAuth();

	const onSubmit: SubmitHandler<Inputs> = (data) => login(data);

	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-5 mx-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<label htmlFor="userName1" className="form-label">
								User name
							</label>
							<input
								type="text"
								className="form-control"
								id="userName1"
								aria-describedby="usernameHelp"
								{...register("userName", {
									required: {
										value: true,
										message: "User name is required",
									},
									pattern: {
										value: new RegExp(
											`(${constants.REGEX_PATTERNS?.EMAIL_REGEX.source})|(${constants.REGEX_PATTERNS?.USERNAME_REGEX.source})`
										),
										message:
											"The entered value does not match a valid user name or email format",
									},
								})}
							/>
							{errors.userName && (
								<span role="alert">{errors.userName.message}</span>
							)}
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required",
									},
									pattern: {
										value: constants.REGEX_PATTERNS?.PASSWORD_REGEX,
										message: "Password is not valid",
									},
								})}
							/>
							{errors.password && <span>{errors?.password?.message}</span>}
						</div>
						<button type="submit" className="btn btn-primary">
							Login
						</button>

						<a className="link ms-2" onClick={() => navigate("/register")}>
							Don't have an account ? Register
						</a>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
