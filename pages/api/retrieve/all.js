import { MongoClient } from 'mongodb'

import getConfig from 'next/config'

export default function handle(req, res) {
  const { serverRuntimeConfig } = getConfig()
  const uri = `mongodb+srv://${serverRuntimeConfig.username}:${serverRuntimeConfig.password}@basecluster-ikartik-ytsva.mongodb.net/test?retryWrites=true&w=majority`
  const client = new MongoClient(uri, { useNewUrlParser: true })
  let posts = []
  client.connect(err => {
    const collection = client.db('ScribeBlogDemo').collection('Posts')
    collection.find().sort({ createdAt: -1 }).toArray()
      .then(response => {
        posts = response
        res.status(200).json(posts)
      })
      client.close()
  })
}
