export const taskContainerVariant = {
	hidden: { x: '150vw' },
	visible: {
		x: '0vw',
		transition: {
			type: 'spring',
			when: 'beforeChildren',
			delayChildren: 0.2,
		},
	},
};

export const listVariant = {
	hidden: {
		y: '100vh',
	},
	visible: {
		y: '0vh',
		transition: {
			when: 'beforeChildren',
			type: 'tween',
		},
	},
};

export const itemVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 0.5 },
	},
	hover: {
		scale: 1.15,
		originX: 0,
		type: 'spring',
	},
};
