import React from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';

export default function NavBar({setFormOpen}){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'15px'}}/>
                    Re-vents
                </MenuItem>
                <MenuItem>
                <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event'/>
                </MenuItem>
                <MenuItem position='right'>
                <Button basic inverted content='Login'></Button>
                <Button basic inverted content='Register' style={{marginLeft:'0.5em'}}></Button>
                </MenuItem>
            </Container>
        </Menu>
    )
}