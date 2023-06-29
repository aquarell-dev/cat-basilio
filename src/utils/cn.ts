const cn = (...classes: (string | undefined)[]) =>
	classes.filter(Boolean).join(' ')

export default cn
