import React from 'react'
import ProfileComponent from '../ProfileComponent'
import GoHome from '../history';
import "./HeaderDos.css"

export default function HeaderDos(){
    return(
        <div className="headerDos">
            <div>
                <GoHome className="goBack"/>
            </div>
            <div>
                <ProfileComponent/>
            </div>
        </div>   
    )
}