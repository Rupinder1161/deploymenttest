import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'

export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
               <Navbar>
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Header
