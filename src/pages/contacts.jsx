import{Link} from 'react-router-dom'

const contacts = () => {
  return (
    <div className='contacts'>
      <h2>Welcome to my contact page</h2>
      <div className='contact-infor'>
        <ul >
          <li>
            <Link to='/' className="contact-lists" >contact1</Link>
          </li>
          <li>
          <Link to='/'  className="contact-lists">contact2</Link>
          </li>
          <li> 
          <Link to='/'  className="contact-lists">contact3</Link>
          </li>
          <li> 
          <Link to='/' className="contact-lists">contact4</Link>
          </li>
          <li>
          <Link to='/' className="contact-lists">contact5</Link>
          </li>
        </ul>
      </div>
      <div><Link to="/" className='button' >BACK</Link></div>
    </div>
  )
}

export default contacts