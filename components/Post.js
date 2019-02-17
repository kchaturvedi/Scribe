import Link from 'next/link'

import '../styles/styles.scss'

const Post = ({ post }) => (
  <Link href={`/post?id=${post.id}`} key={post.id}>
    <div className='row post-container mb-5 justify-content-between'>
      <div className='col-md-4'>
        {post.img && <div className='img-container text-right'><img className='img-fluid' src={post.img} alt='...' /></div>}
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h5 className=''>{post.title}</h5>
          {post.summary && <p className='card-text text-muted'>{post.summary}</p>}
          {post.date && <p className='card-text text-muted'><small>{post.date}</small></p>}
          <span className='badge badge-pill badge-secondary'>{post.category}</span>
        </div>
      </div>
    </div>
  </Link>
)

export default Post
