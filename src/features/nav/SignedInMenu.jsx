import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  MenuItem, Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import {signOutUser} from '../auth/authActions';
import {useDispatch, useSelector} from 'react-redux';

export default function SignedOutMenu(){
    const dispatch= useDispatch();
    const {currentUser}= useSelector(state=> state.auth);
    const history= useHistory();


    return(
        <MenuItem position="right">
         <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png'}/>
         <Dropdown pointing='top left' text={currentUser.email}>
             <DropdownMenu>
                 <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                 <Dropdown.Item  text='My Profile' icon='user'/>
                 <Dropdown.Item onClick={()=>
                    {
                        dispatch(signOutUser());
                        history.push('/');
                    }} text='Sign Out' icon='power'/>
             </DropdownMenu>
         </Dropdown>
        </MenuItem>
    )
}