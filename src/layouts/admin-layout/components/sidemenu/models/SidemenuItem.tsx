import { ReactNode } from "react";

export type TypeSidemenuItem = {
	title: string;
	icon?: string | ReactNode;
	isActive?: boolean;
};
