import { storage } from '@forge/api'
import { Queue } from '@forge/events'
import Resolver from '@forge/resolver'
import { queueProcessor } from '../compassProcessor'

export const catalogAsyncQueue = new Queue({ key: 'catalog-sync-queue' })

export const catalogSyncHandler = async () => {
  console.log('webhookHandler')
  await storage.set('test1', 1)
  await storage.set('test2', 2)

  const test = await storage.get('test2')
  console.log('Retrieved test2 value in webhookHandler:', test)

  console.log(
    'starting queue, fails silently on first recursive call inside the queue (test2)'
  )
  await catalogAsyncQueue.push({ key: 1 })
}

const resolver = new Resolver()

resolver.define('queue-processor', async ({ payload }: { payload: any }) => {
  return queueProcessor(payload)
})

export const webhookResolvers = resolver.getDefinitions()