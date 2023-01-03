import React, { ReactNode } from "react";

const Wrapper: React.FC<{
	children?: ReactNode;
}> = (props) => {
	return <div className="bg-pry-02 p-1">{props.children}</div>;
};

export default Wrapper;
