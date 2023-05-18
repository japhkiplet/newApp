import{Link} from 'react-router-dom'
import{FaHome,FaBlog,FaList} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" style={{display:'flex',textDecoration: 'none',color:'darkblue',gap:'5px',alignItems:'center'}}><FaHome />Home</Link>
      <Link to="/blog" style={{ display:'flex',textDecoration: 'none',color:'darkblue',gap:'5px', alignItems: 'center',gap:'10px'}}><FaBlog />Blog</Link>
      <Link to="/contacts" style={{display:'flex',textDecoration: 'none',color:'darkblue',gap:'5px'}}><FaList/>Contacts</Link>

    </div>
  )
}

export default Navbar