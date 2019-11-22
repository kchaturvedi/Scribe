import { MongoClient } from 'mongodb'

export default function handle(req, res) {
  const uri = `mongodb+srv://${process.env.username}:${process.env.password}@basecluster-ikartik-ytsva.mongodb.net/test?retryWrites=true&w=majority`
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
