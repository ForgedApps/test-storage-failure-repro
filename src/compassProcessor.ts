import { storage } from '@forge/api'

export const queueProcessor = async ({ key }: { key: number }) => {
  console.log(`Getting test${key}`)

  const value = await storage.get(`test${key}`)
  console.log(`Retrieved value for test${key}:`, value)

  if (key === 3) return console.log('finished, works fine using forge tunnel')

  queueProcessor({ key: key + 1 })
}