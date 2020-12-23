import React from 'react';
import {Route, Redirect} from 'react-router-dom' ;

function ProtectedRoute({token: token,id:id, component: Component, ...rest}) {
    return (<Route {...rest} render = {(props) => {
   if (token && id) {
       return <Component />
   } else {
       return ( <Redirect to = { {pathname: '/', state: {from: props.location}} }/> )
     }

    }}/>
 )     
    
}

export default ProtectedRoute;