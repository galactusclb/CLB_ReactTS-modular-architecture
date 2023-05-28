import React from "react";

interface Props {
	children: React.ReactNode;
}

const Table = ({ children }: Props) => {
	return <table className="table-auto w-full text-sm">{children}</table>;
};

export default Table;
