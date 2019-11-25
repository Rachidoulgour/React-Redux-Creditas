import React from 'react';
import './ProfileComponent.css';
import {Link} from 'react-router-dom';


class ProfileComponent extends React.Component{

    render(){
        return(
            <div className="profileComponent">
                <Link to={'/cart'}>
                <img src="/images/no-photo.png" alt="profile"/>
                </Link>
            </div>
            
        )
    }
}
export default ProfileComponent;