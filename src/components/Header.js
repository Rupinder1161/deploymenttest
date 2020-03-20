import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'

const style = {
    header:{
        display:'flex',
        flexDirection :'row',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    }
}
export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
               <Navbar>
               <nav style={style.header}>
                   Gurpreet
               </nav>
             </Navbar>
            </div>
        )
    }
}

export default Header
