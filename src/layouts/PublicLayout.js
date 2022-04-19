import React from 'react' ;
import Footer from '../components/Footer';
import Navs from '../components/Nav';

const PublicLayout = ({children}) => {
  return (
    <main>
        <Navs />
        {children}
        <Footer />
    </main>
  )
}

export default PublicLayout