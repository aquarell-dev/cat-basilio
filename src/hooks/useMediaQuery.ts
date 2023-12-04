import { useLayoutEffect, useState } from 'react'

type Query = {
	desktop: boolean
	laptop: boolean
	tablet: boolean
	mobile: boolean
	width: number
}

const useMediaQuery = () => {
  const [query, setQuery] = useState<Query>({} as Query)

  const updateQuery = () => {
    const width = window.screen.width

    setQuery({
      width,
      desktop: width >= 1200,
      laptop: width < 1200 && width >= 768,
      tablet: width < 768 && width >= 450,
      mobile: width < 450,
    })
  }

  useLayoutEffect(() => {
    updateQuery()

    window.addEventListener('resize', updateQuery)

    return () => window.removeEventListener('resize', updateQuery)
  }, [])

  return query
}

export default useMediaQuery
