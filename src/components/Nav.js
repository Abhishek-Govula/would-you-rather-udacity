import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav ({user, onLogout}) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<NavLink className="nav-link" to='/'>Would You Rather</NavLink>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <NavLink className="nav-link" to='/' exact={true} activeClassName='active'>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/add' activeClassName='active'>New Question</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
  <li className="nav-item"><a className="nav-link">{user.name}</a></li>
  <li className="nav-item">
      <NavLink className="nav-link" to="/" onClick={onLogout}>Logout</NavLink>
    </li>
 </ul>
</div>
</nav>
  )
}