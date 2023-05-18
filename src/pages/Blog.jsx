import{Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div className="blog">
            <div className="blog-content">
                <h1>MY Blog</h1>
                <p>This is awesome page. it makes your work easier as your manhover around the blog feel free to explore</p>
                
            </div>
            
            <div className="blog-content">
               <h1>initilization</h1>
                <p>karibu sana kwenye mtandao ya kijamii yetu. ni jamii iliyo bora kutimiwa kwa kila hali...<br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non, architecto ut veritatis blanditiis unde quasi doloribus culpa accusamus praesentium voluptatem impedit laboriosam velit. Consectetur nostrum voluptatem praesentium et sint!
                </p>
            </div>
            
            <div className="blog-content">
                <h1>event</h1>
                <p>we are hosting any event that our customers are wants please make your order</p>
            </div>
            
            <div className="blog-content">
             <h1>Comments</h1>
             <p>please subscribe</p>
            </div>
            <div>
            <Link to="/" className='button' >BACK</Link>
            </div>
        </div>
  )
}

export default Blog