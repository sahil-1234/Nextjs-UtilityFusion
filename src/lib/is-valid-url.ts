export const isValidUrl = (urlString: string): boolean => {
  let url: URL

  try {
    url = new URL(urlString)
  } catch {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
