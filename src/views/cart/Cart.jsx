import React from 'react';
import {connect} from 'react-redux'
import {useSelector} from 'react-redux';
import ProfileComponent from '../../components/ProfileComponent'
import './Cart.css'

const Cart = props =>{

    
    const user = useSelector(state => state.user)
    
    
    
        return(
            <div>
            <div className="profileCart">
            <ProfileComponent/>
            </div>
                <div className="congratulation">
                    <h3>Congratulation <span>{user.login.username}</span></h3>
                    <h4>You bought new wonderful rug</h4>
                </div>
            </div>
        )
    
}
const mapStateToProps=(state)=>({carrito:state.cart})
export default connect(mapStateToProps) (Cart);