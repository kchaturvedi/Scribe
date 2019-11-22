import fetch from 'isomorphic-unfetch'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import * as Icon from 'react-feather'

import Layout from '../../components/Layout'

function Post({post}) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className='container-fluid mx-0 px-0' style={{ height: '35rem', overflow: 'hidden' }}>
        {post.image && <img className='img-fluid mx-auto d-block'
          src={`https://images.unsplash.com/${post.image}?ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&q=80&crop=entropy&h=680&w=1680`}
          // style={{ position: 'relative', bottom: '17rem' }}
          />}
      </div>
      <div className='container' style={{ marginTop: '-5rem' }}>
        <div className='card post-title-card mx-auto text-center' style={{ width: '60rem' }}>
          <div className='card-body'>
            <h3 className='card-title'>{post.title}</h3>
            <h6 className='card-subtitle text-muted'>by {post.author}</h6>
            <span className='badge badge-pill badge-secondary mt-2'>#{post.category}</span>
          </div>
          <div className='card-footer text-muted'>
            <div className='row'>
              <div className='col-sm text-left'>
                {post.date}
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
                <a href={`https://twitter.com/intent/tweet?url=https://blog.ikartik.com/posts/${post.id}`} className='twitter-share-button' data-show-count='false'>Tweet</a>
                <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center' />
      <div className='container'>
        <div className='row mt-5' style={{ marginLeft: '12rem', marginRight: '12rem' }}>
          <div className='markdown'>
            <ReactMarkdown source={post.content} linkTarget='_blank' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.ROOT}/api/retrieve/${query.id}`)
  const json = await res.json()
  json.content = json.content.replace(/\\n/g, '\n')
  dayjs.extend(LocalizedFormat)
  json.date = dayjs(json.date).format('LL')
  return {post : json}

  // const post = postList().find(post => post.id === query.id)
  // const content = await require(`../../posts/${query.id}.md`)
  // return { ...post, content }
}

export default Post
