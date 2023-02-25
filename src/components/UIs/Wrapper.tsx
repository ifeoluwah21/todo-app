import React, { ReactNode } from 'react';

interface Prop {
	children?: ReactNode;
}

const Wrapper: React.FC<Prop> = (props) => {
	return <div className="p-1">{props.children}</div>;
};

export default Wrapper;
