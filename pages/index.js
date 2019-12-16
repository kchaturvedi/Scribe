import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { apiEndpoint } from '../prismic-configuration'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import Layout from '../components/Layout'
import Post from '../components/Post'
import FeaturedPost from '../components/FeaturedPost'

function Index({posts}) {
  return (
    <Layout>
      <Head>
        <title>Scribe - the Serverless Markdown Blogging Framework</title>
      </Head>
      <div className='container'>
        <div>
          {
            renderFeatured(posts.find((post) => (post.data.featured === 'yes')) || undefined)
          }
        </div>
        <div className='mt-5'>
          {
            posts.map((post) => (
              post.data.featured === 'no' && <Post post={post} key={post.id} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

const renderFeatured = (post) => post && <FeaturedPost post={post} key={post.id} />

Index.getInitialProps = async ({ query }) => {	
  const client = Prismic.client(apiEndpoint)
  
  const response = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' }
  )
  if (response) {
    dayjs.extend(LocalizedFormat)
    response.results.forEach((post) => {
      post.data.date_published = dayjs(post.data.date_published).format('LL')
    })
    return { posts : response.results }
  }
}

export default Index