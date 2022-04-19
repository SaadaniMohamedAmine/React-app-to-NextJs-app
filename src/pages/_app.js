import React from 'react' ;
import "../styles/global.scss" ;
import PublicLayout from '../layouts/PublicLayout';

const App = ({Component,pageProps}) => {
  return (
    <PublicLayout>
      <Component {...pageProps} /> 
    </PublicLayout>
  )
}

export default App