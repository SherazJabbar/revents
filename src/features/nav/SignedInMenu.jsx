import React from 'react';
import { Link } from 'react-router-dom';
import {  MenuItem, Image, Dropdown, DropdownMenu } from "semantic-ui-react";


export default function SignedOutMenu({signOut}){
    return(
        <MenuItem position="right">
         <Image avatar spaced='right' src='/assets/user.png'/>
         <Dropdown pointing='top left' text='Bob'>
             <DropdownMenu>
                 <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                 <Dropdown.Item  text='My Profile' icon='user'/>
                 <Dropdown.Item onClick={signOut} text='Sign Out' icon='power'/>
             </DropdownMenu>
         </Dropdown>
        </MenuItem>
    )
}