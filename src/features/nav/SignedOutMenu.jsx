import React from 'react';
import { useDispatch } from 'react-redux';
import {  MenuItem, Button } from "semantic-ui-react";
import {openModal} from '../../app/common/modals/modalReducer';


export default function SignedOutMenu(){
  const dispatch= useDispatch();

    return(
        <MenuItem position="right">
          <Button onClick={()=>dispatch(openModal({modalType:'LoginForm'}))} basic inverted content="Login"></Button>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </MenuItem>
    )
}