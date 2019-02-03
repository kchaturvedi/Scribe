import Header from './Header'
import '../styles/styles.scss'

const Layout = (props) => (
  <div>
    <Header />
    <div className='container'>
      {props.children}
    </div>
  </div>
)

export default Layout
