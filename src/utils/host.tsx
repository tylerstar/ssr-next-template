export const getHost = (req: { headers: { host: string } }): string => {
  if (!req) return ''

  const { host } = req.headers;

  if (host.startsWith('localhost')) {
    return `http://${host}`
  }
  return `https://${host}`
}

export const getIsServer = (): boolean => {
  return  typeof window === 'undefined'
}