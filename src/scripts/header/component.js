import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { Link } from 'react-router'

const MenuHeader = (props) => <div className="menu-header" onClick={() => props.onSelected()}>{props.title}</div>

MenuHeader.displayName = "MenuHeader"
MenuHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  onSelected: React.PropTypes.func.isRequired
}

const Menu = (props) => {
  const selectHandler = props.opened === props.name ? () => props.closeMenu() : () => props.openMenu(props.name)
  const openedClass = props.opened === props.name ? 'opened' : ''

  return <span className={`menu ${openedClass}`}>
    <MenuHeader title={props.name} onSelected={selectHandler} />
    <div className="items">{props.children}</div>
  </span>
}

Menu.displayName = "Menu"
Menu.propTypes = {
  name: React.PropTypes.string,
  opened: React.PropTypes.string,
  openMenu: React.PropTypes.func.isRequired,
  closeMenu: React.PropTypes.func.isRequired,
  children: React.PropTypes.any
}

const MenuItem = (props) => <div className="menu-item">
  <Link to={props.to} onClick={() => props.closeMenu()}>{props.children}</Link>
</div>

MenuItem.displayName = "MenuItem"
MenuItem.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

const Logo = () => <span className="logo"><Link to="/">Small Practice</Link></span>

const Header = (props) => <div id="header">
  <Logo />
  {props.children}
</div>

Header.displayName = "Header"
Header.propTypes = {
  children: React.PropTypes.any.isRequired
}

const HeaderAuthenticated = (props) => <Header>
  <Menu {...props} name="Views">
    <MenuItem {...props} to="/">Dashboard</MenuItem>
    <MenuItem {...props} to="/contacts">Contacts</MenuItem>
    <MenuItem {...props} to="/contacts">Contacts</MenuItem>
    <MenuItem {...props} to="/contacts">Contacts</MenuItem>
    <MenuItem {...props} to="/contacts">Contacts</MenuItem>
    <MenuItem {...props} to="/contacts">Contacts</MenuItem>
  </Menu>
  <span className="user-menu">
    <div>Logged in as {props.username}</div>
    <div className="login-menu"><a onClick={() => props.doLogout()}>Logout</a></div>
  </span>
</Header>

HeaderAuthenticated.propTypes = {
  username: React.PropTypes.string.isRequired,
  doLogout: React.PropTypes.func.isRequired
}

const HeaderUnauthenticated = (props) => <Header>
  <span className="user-menu">
    <div className="login-menu">
      <a onClick={() => props.doLogin()}>Login</a>
    </div>
  </span>
</Header>

HeaderUnauthenticated.propTypes = {
  doLogin: React.PropTypes.func.isRequired
}

const HeaderContainer = (props) => props.loggedIn ?
  <HeaderAuthenticated {...props} /> :
  <HeaderUnauthenticated {...props} />

HeaderContainer.propTypes = {
  loggedIn: React.PropTypes.bool
}

export default connect((state) => state.header, { ...actions })(HeaderContainer)
