import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { apiEndpoint } from '../../prismic-configuration'
import htmlSerializer from '../../utils/htmlSerializer'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import * as Icon from 'react-feather'


import Layout from '../../components/Layout'

function Post({ data }) {
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(data.title)}</title>
      </Head>
      <div className='container-fluid mx-0 px-0' style={{ height: '35rem', overflow: 'hidden' }}>
        {data.image.url && <img className='img-fluid mx-auto d-block'
          src={data.image.post_view.url} alt={data.image.alt}
          // style={{ position: 'relative', bottom: '17rem' }}
        />}
      </div>
      <div className='container' style={{ marginTop: '-5rem' }}>
        <div className='card post-title-card mx-auto text-center' style={{ width: '60rem' }}>
          <div className='card-body'>
            <h3 className='card-title'>{RichText.asText(data.title)}</h3>
            <h6 className='card-subtitle text-muted'>by {RichText.asText(data.author)}</h6>
            <span className='badge badge-pill badge-secondary mt-2'>#{data.category}</span>
          </div>
          <div className='card-footer text-muted'>
            <div className='row'>
              <div className='col-sm text-left'>
                {data.date_published}
              </div>
              <div className='col-sm text-right'>
                <span>Share this post: </span>
                <a className='post-share-link pl-1' href='#'>
                  <Icon.Linkedin />
                </a>
                <a className='post-share-link pl-2' href='#'>
                  <Icon.Twitter />
                </a>
                <a className='post-share-link pl-1' href='#'>
                  <Icon.Facebook />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=https://blog.ikartik.com/posts/${data.uid}`}
                  className='twitter-share-button' data-show-count='false'>Tweet
                </a>
                <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center' />
      <div className='container'>
        <div className='mt-5' style={{ marginLeft: '12rem', marginRight: '12rem' }}>
          <RichText
            render={data.body}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </div>
    </Layout>
  )
}

Post.getInitialProps = async ({ query }) => {
  const client = Prismic.client(apiEndpoint)

  try {
    const { id } = query
    const document = await client.getByUID('post', id)
    dayjs.extend(LocalizedFormat)
    return {
      data: {
        ...document.data,
        date_published: dayjs(Date(document.data.date_published).toString()).format('LL')
      }
    }
  } catch (error) {
    console.error(error)
    return error
  }
  
  // const rootURL = process.env.NODE_ENV === 'production' ? 'https://scribe.ikartik.com' : 'http://localhost:3000'
  // const res = await fetch(`${rootURL}/api/retrieve/${query.id}`)
  // const json = await res.json()
  // json.content = json.content.replace(/\\n/g, '\n')
  // dayjs.extend(LocalizedFormat)
  // json.date = dayjs(json.date).format('LL')
  // return {post : json}

  // const post = postList().find(post => post.id === query.id)
  // const content = await require(`../../posts/${query.id}.md`)
  // return { ...post, content }
}

export default Post
