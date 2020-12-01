import React from 'react';
import {  MenuItem, Button } from "semantic-ui-react";


export default function SignedOutMenu({setAuthenticated}){
    return(
        <MenuItem position="right">
          <Button onClick={()=>setAuthenticated(true)} basic inverted content="Login"></Button>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </MenuItem>
    )
}