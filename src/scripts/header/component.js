import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { Link } from 'react-router'

const MenuHeader = (props) => <li className="header menu-item"><a onClick={() => props.onSelected()}>{props.title}</a></li>

MenuHeader.displayName = "MenuHeader"
MenuHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  onSelected: React.PropTypes.func.isRequired
}

const Menu = (props) => {
  const isOpened = props.opened === props.name
  const selectHandler = isOpened ? () => props.closeMenu() : () => props.openMenu(props.name)
  const header = <MenuHeader title={props.name} onSelected={selectHandler} />

  return isOpened ?
    <li><ul>{header}{props.children}</ul></li> :
    <li><ul>{header}</ul></li>
}

Menu.displayName = "Menu"
Menu.propTypes = {
  name: React.PropTypes.string,
  opened: React.PropTypes.string,
  openMenu: React.PropTypes.func.isRequired,
  closeMenu: React.PropTypes.func.isRequired,
  children: React.PropTypes.any
}

const MenuContainer = (props) => <nav className={`menu ${props.main ? 'main' : ''}`}><ul>{props.children}</ul></nav>

MenuContainer.displayName = "MenuContainer"
MenuContainer.propTypes = {
  children: React.PropTypes.any,
  main: React.PropTypes.bool
}

const MenuItemLink = (props) => <li className="menu-item">
  <Link to={props.to} onClick={() => props.closeMenu()}>{props.children}</Link>
</li>

MenuItemLink.displayName = "MenuItemLink"
MenuItemLink.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

const MenuItemAction = (props) => <li className="menu-item">
  <Link onClick={() => { props.closeMenu(); props.handler() }}>{props.children}</Link>
</li>

MenuItemAction.displayName = "MenuItemAction"
MenuItemAction.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  handler: React.PropTypes.func.isRequired,
  children: React.PropTypes.any.isRequired
}

const Header = (props) => <div id="header">
  {props.children}
</div>

Header.displayName = "Header"
Header.propTypes = {
  children: React.PropTypes.any.isRequired
}

const HeaderAuthenticated = (props) => <Header>
  <MenuContainer>
    <MenuItemLink {...props} to="/">Small Practice</MenuItemLink>
  </MenuContainer>
  <MenuContainer main={true}>
    <Menu {...props} name="Views">
      <MenuItemLink {...props} to="/">Dashboard</MenuItemLink>
      <MenuItemLink {...props} to="/contacts">Contacts</MenuItemLink>
      <MenuItemLink {...props} to="/matters">Matters</MenuItemLink>
    </Menu>
    <Menu {...props} name="Tasks">
      <MenuItemLink {...props} to="/time">Track Time</MenuItemLink>
      <MenuItemLink {...props} to="/billing">Billing</MenuItemLink>
    </Menu>
  </MenuContainer>
  <MenuContainer>
    <Menu {...props} name={`Logged in as ${props.username}`}>
      <MenuItemAction {...props} handler={() => props.doLogout()}>Logout</MenuItemAction>
    </Menu>
  </MenuContainer>
</Header>

HeaderAuthenticated.propTypes = {
  username: React.PropTypes.string.isRequired,
  doLogout: React.PropTypes.func.isRequired
}

const HeaderUnauthenticated = (props) => <Header>
  <MenuContainer>
    <MenuItemLink {...props} to="/">Small Practice</MenuItemLink>
  </MenuContainer>
  <MenuContainer>
    <MenuItemAction {...props} handler={() => props.doLogin()}>Login</MenuItemAction>
  </MenuContainer>
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
