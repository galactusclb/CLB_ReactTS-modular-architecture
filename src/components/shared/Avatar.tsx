import React from "react";

type Size = "small" | "medium" | "large" | "full";

interface Props {
	size?: Size;
}

const Avatar = ({ size = "medium" }: Props) => {
	const getSize = (value: Size) => {
		switch (value) {
			case "small": {
				return "w-5 h-5";
			}
			case "medium": {
				return "w-10 h-10";
			}
			case "large": {
				return "w-16 h-16";
			}
			case "full": {
				return "w-full h-full";
			}
		}
	};

	return (
		<div
			className={`flex justify-center items-center bg-lime-200 rounded-full font-medium text-gray-900 leading-tight cursor-default ${getSize(
				size
			)}`}
		>
			A
		</div>
	);
};

export default Avatar;
