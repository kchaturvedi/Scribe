import { MongoClient } from 'mongodb'

export default function handle(req, res) {
  const uri = 'mongodb+srv://zeit-L0exBF8a8X3DTrRwbp4QKx9m:iPHoTyOzTaYeqyJa@basecluster-ikartik-ytsva.mongodb.net/test?retryWrites=true&w=majority'
  const client = new MongoClient(uri, { useNewUrlParser: true })
  let post
  client.connect(err => {
    const collection = client.db('ScribeBlogDemo').collection('Posts')
    collection.find({ postId: req.query.id }).toArray()
      .then(response => {
        post = response[0]
        res.end(JSON.stringify(post))
      })
      .catch(err => {
        console.log('error ' + err)
        client.close()
      })
      client.close()
  })
}
