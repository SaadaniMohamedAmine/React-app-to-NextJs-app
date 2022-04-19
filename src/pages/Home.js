import React from 'react' ;
import {Link} from 'react-router-dom' ;

const Home = () => {
  return (
    <div className="home-page">
        <div className="container pt-5">
            <div className="row hero p-3">
                <div className="col-lg-5 align-self-center pb-md-5 p-3">
                    <h1>Welcome to my website .Be nice and happy !</h1>
                    <p className='mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis illum asperiores!</p>
                    <div className='py-1 d-flex'>
                      <Link className="btn btn-light mx-3" to="/about">Try wining</Link>
                      <Link className="btn btn-dark" to="/users">Discover features</Link>
                    </div>
                </div>
                <div className="col-lg-6 p-3">
                  <img src="/home-hero.jpeg" alt='...' className='img-fluid rounded'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home