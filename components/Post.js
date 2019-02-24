import Link from 'next/link'

import '../styles/styles.scss'

const Post = ({ post }) => (
  <div>
    <Link href={`/post?id=${post.id}`} key={post.id}>
      <div className='row post-container mb-md-5 justify-content-between'>
        <div className='col-md-3 offset-md-1 mb-2'>
          {post.img && <img className='img-fluid' src={post.img} />}
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className=''>{post.title}</h5>
            {post.summary && <p className='card-text text-muted'>{post.summary}</p>}
            {post.date && <p className='card-text text-muted'><small>{post.date}</small></p>}
            <span className='badge badge-pill badge-secondary'>#{post.category}</span>
          </div>
        </div>
      </div>
    </Link>
    <hr className='pt-xs-0 pt-sm-2 pb-2' />
  </div>
)

export default Post
