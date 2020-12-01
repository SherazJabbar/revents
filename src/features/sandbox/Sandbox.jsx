import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

export default function Sandbox() {
    const displatch= useDispatch();
    const data= useSelector(state => state.test.data);

    return(
        <>
        <h1>Testing 123</h1>
    <h3>The data is:{data}</h3>
    <Button content='increment' color='green' onClick={()=> displatch(increment(20))}/>
    <Button content='decrement' color='red' onClick={()=> displatch(decrement(10))}/>
        </>
    )
}