import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="content">
      <div className="content-home">
          <h3>welcome to my home page</h3>
        
        <p>It is a website that can generate as per your needs...</p>
        <p>For more info tab the link below👇.</p>
        <Link to="/Blog" className='button'>Explore for more</Link>
      </div>
      <div className="descriptions">
          <h3>comments</h3>
        
        <p>subscribe with us by leaving your contacts</p>
        <p>leave a like button and explore in the button below👇.</p>
        <Link to="/contacts" className='button' >Contact</Link>
      
      </div>
      <div className="more-infor">
        <p>
          It is awesome knowing your Buddy👍😁😎
          It is awesome knowing your Buddy👍😁😎
        </p>
      </div>
    </div>
      
  )
}

export default Home