import React from "react";
import SidemenuItem from "./sidemenu/SidemenuItem";
import SidemenuSection from "./sidemenu/SidemenuSection";
import SidemenuHeader from "./sidemenu/SidemenuHeader";
import SidemenuFooter from "./sidemenu/SidemenuFooter";

const Sidemenu = () => {
	return (
		<div className="h-full max-h-full flex flex-col gap-y-3 ps-3 pe-1">
			<SidemenuHeader />

			<div className="flex flex-col flex-grow gap-y-3 overflow-auto pe-2">
				<SidemenuSection />
			</div>

			<div className="pe-3 pb-4">
				<SidemenuFooter />
			</div>
		</div>
	);
};

export default Sidemenu;
