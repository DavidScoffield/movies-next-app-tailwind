import { getApiUrl } from '../config'

export const searchMovies = ({ value = '' }) => {
  const url = `${getApiUrl}s=${value}`

  return fetch(url).then((response) => response.json())
}
