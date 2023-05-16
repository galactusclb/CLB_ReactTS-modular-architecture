import { SignupForm } from "features/authentication";

const Signup = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-5 mx-auto">
					<SignupForm />
				</div>
			</div>
		</div>
	);
};

export default Signup;
