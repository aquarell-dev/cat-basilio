import { useEffect } from 'react'

const useObserver = (
	target: Element | null,
	callback: IntersectionObserverCallback
) => {
	const io = new IntersectionObserver(callback, {
		root: document.querySelector('.body'),
		threshold: 1,
	})

	useEffect(() => {
		if (target) io.observe(target)

		return () => io.disconnect()
	}, [target, callback])
}

export default useObserver
