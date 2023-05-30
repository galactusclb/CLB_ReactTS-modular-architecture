import React from "react";

type ButtonVariant =
	| "default"
	| "secondary"
	| "outline"
	| "destructive"
	| "ghost"
	| "link";

type ButtonSize = "sm" | "lg" | "default";

interface Props {
	type?: "button" | "link";
	children: React.ReactNode;
	onClick?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	className?: string;
}

const PrimaryButton = ({
	type = "button",
	variant = "default",
	size = "default",
	children,
	onClick,
	className,
}: Props) => {
	const getButtonVariants = (value: ButtonVariant) => {
		switch (value) {
			case "secondary": {
				return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
			}
			case "outline": {
				return "border border-input hover:bg-accent hover:text-accent-foreground";
			}
			case "destructive": {
				return "bg-destructive text-destructive-foreground hover:bg-destructive/90";
			}
			case "ghost": {
				return "hover:bg-accent hover:text-accent-foreground";
			}
			case "link": {
				return "underline-offset-4 hover:underline text-primary";
			}
			default: {
				return "bg-primary text-primary-foreground hover:bg-primary/90";
			}
		}
	};

	const getButtonSize = (value: ButtonSize) => {
		switch (value) {
			case "lg": {
				return "h-11 px-8";
			}
			case "sm": {
				return "h-9 px-3";
			}
			default: {
				return "h-10 py-2 px-4";
			}
		}
	};

	return (
		<div
			className={`inline-flex items-center justify-center gap-x-2 rounded-xl text-sm font-medium transition-colors cursor-pointer  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${getButtonVariants(
				variant
			)} ${getButtonSize(size)} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
export default PrimaryButton;
