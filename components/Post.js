import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const Post = ({ post }) => (
  <div>
    <Link href='/posts/[id]' as={`/posts/${post.uid}`}>
      <div className='row post-container mb-md-5 mx-lg-5'>
        <div className='col-md-5 d-flex justify-content-md-end justify-content-center'>
          {post.data.image.url && <img className='img-fluid d-none d-md-block align-self-start'
            src={post.data.image.url} alt={post.data.image.alt}
            // style={{ width: '100%', height: '100%'}}
          />}
          <div className='d-block d-md-none w-100'>
            {post.data.image.url && <img className='img-fluid mx-auto'
              src={post.data.image.post_view.url} alt={post.data.image.alt}
            />}
          </div>
        </div>
        <div className='col-md-7'>
          <div className='card-body'>
            <h5>
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
