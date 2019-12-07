import Link from 'next/link'

import '../styles/styles.scss'

const Post = ({ post }) => (
  <div>
    <Link href='/posts/[id]' as={`/posts/${post.postId}`}>
      <div className='row post-container mb-md-5 justify-content-between'>
        <div className='col-md-3 offset-md-1 mb-2'>
          {post.image && <img className='img-fluid'
            src={`https://images.unsplash.com/${post.image}?ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&fit=fill&q=80&crop=entropy&h=300&w=300`}
            style={{ height: 170, width: 255, overflow: 'hidden' }}
          />}
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className=''>
              {post.title}
              <small className='text-muted'>&nbsp;&nbsp;|&nbsp;&nbsp;{post.date}</small>
            </h5>
            {post.summary && <p className='card-text text-muted'>{post.summary}</p>}
            <span className='badge badge-pill badge-secondary'>#{post.category}</span>
          </div>
        </div>
      </div>
    </Link>
    <hr className='pt-xs-0 pt-sm-2 pb-2' />
  </div>
)

export default Post
