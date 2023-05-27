import React from "react";

type ButtonTheme = "solid" | "outline";

interface Props {
	type?: "button" | "link";
	title: string | React.ReactNode;
	icon?: string | React.ReactNode;
	onClick?: () => void;
	theme?: ButtonTheme;
}

const PrimaryButton = ({
	theme = "solid",
	type = "button",
	title,
	icon,
	onClick,
}: Props) => {
	const getButtonTheme = (value: ButtonTheme) => {
		switch (value) {
			case "solid": {
				return "bg-gray-900 text-gray-50 border-gray-900 hover:bg-gray-700";
			}
			case "outline": {
				return "bg-white text-gray-900 border-gray-900 hover:bg-gray-100";
			}
		}
	};

	return (
		<div
			className={`flex flex-row flex-nowrap gap-x-2 items-center ${getButtonTheme(
				theme
			)} border-2  leading-tight text-sm cursor-pointer rounded-xl px-6 py-3 duration-200`}
			onClick={onClick}
		>
			{icon}
			{title}
		</div>
	);
};

export default PrimaryButton;
