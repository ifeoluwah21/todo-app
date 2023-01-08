import React, { ReactNode } from 'react';

const Wrapper: React.FC<{
	children?: ReactNode;
}> = (props) => {
	return <div className="p-1">{props.children}</div>;
};

export default Wrapper;
