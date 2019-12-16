import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const Post = ({ post }) => (
  <div>
    <Link href='/posts/[id]' as={`/posts/${post.uid}`}>
      <div className='row post-container mb-md-5 justify-content-between'>
        <div className='col-md-3 offset-md-1 mb-2'>
          {post.data.image.url && <img className='img-fluid'
            src={post.data.image.url} alt={post.data.image.alt}
            style={{ height: 170, width: 255, overflow: 'hidden' }}
          />}
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className=''>
              <span className='card-title'>{RichText.asText(post.data.title)}</span>
              <small className='text-muted'>&nbsp;&nbsp;|&nbsp;&nbsp;{post.data.date_published}</small>
            </h5>
            <p className='card-text text-muted'>{RichText.asText(post.data.summary)}</p>
            <span className='badge badge-pill badge-secondary'>#{post.data.category}</span>
          </div>
        </div>
      </div>
    </Link>
    <hr className='pt-xs-0 pt-sm-2 pb-2' />
  </div>
)

export default Post
