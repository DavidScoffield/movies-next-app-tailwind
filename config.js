export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getApiUrl = `${API_URL}?apikey=${API_KEY}&`
