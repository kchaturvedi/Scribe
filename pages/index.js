import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { apiEndpoint } from '../prismic-configuration'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/index/Post'
import FeaturedPost from '../components/index/FeaturedPost'

function Index({posts}) {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' />
        <title>Scribe - the Serverless Markdown Blogging Framework</title>
      </Head>
      <Header />
      <div className='container'>
        { renderFeatured(posts) }
        <div className='mt-5'>
          { renderPostList(posts) }
        </div>
      </div>
      <Footer />
    </div>
  )
}

const renderFeatured = (posts) => {
  var post = posts.find(post => post.data.featured === 'yes')
  return post && <FeaturedPost post={post} key={post.id} />
}

const renderPostList = (posts) => (
  posts.map((post) => (
    post.data.featured === 'no' && <Post post={post} key={post.id} />
  ))
)

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