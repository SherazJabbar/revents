import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
export default function NavBar() {
    const history= useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem as={NavLink} exact to='/' header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          Re-vents
        </MenuItem>
        <MenuItem as={NavLink} to='/events' name='events'/>
        <MenuItem as={NavLink} to='/sandbox' name='sanbox'/>
        {authenticated &&
        <MenuItem as={NavLink} to='/createEvent'>
          <Button
            as={Link} to='/createEvent'
            positive
            inverted
            content="Create Event"
          />
        </MenuItem>}
        {authenticated ? <SignedInMenu signOut={handleSignOut}/> : <SignedOutMenu setAuthenticated={setAuthenticated}/> }
      
        
      </Container>
    </Menu>
  );
}
