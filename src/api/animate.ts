import { Variants } from 'framer-motion';

export const taskContainerVariant: Variants = {
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

export const listVariant: Variants = {
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

export const itemVariant: Variants = {
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

export const loginContainerVariant: Variants = {
	hidden: {
		x: '150vw',
	},
	visible: {
		x: '0vw',
		transition: {
			type: 'spring',
			stiffness: 120,
			duration: 0.5,
			staggerChildren: 0.8,

			when: 'beforeChildren',
		},
	},
};

export const childrenVariant: Variants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			opacity: {
				duration: 0.15,
				ease: 'easeIn',
			},
			y: {
				delay: 0.2,
				duration: 0.25,
				ease: 'linear',
			},
		},
	},
};

export const svgVariant: Variants = {
	hidden: {
		rotate: 360,
	},
	visible: {
		rotate: 0,
		transition: {
			delay: 1,
			duration: 0.3,
			staggerChildren: 0.2,
			when: 'beforeChildren',
		},
	},
};

export const pathVariant: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};
export const containerVariant: Variants = {
	hidden: {
		x: '150vw',
	},
	visible: {
		x: '0vw',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 120,
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	exit: { opacity: 0, transition: { duration: 2 } },
};
export const childVariant: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.8,
			when: 'beforeChildren',
		},
	},
};
