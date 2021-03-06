import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import {openModal} from '../../app/common/modals/modalReducer';
import TestPlaceInput from '../sandbox/TestPlaceInput';
import TestMap from '../sandbox/TestMap';
import { latLng2Tile } from 'google-map-react';

export default function Sandbox() {
    const displatch= useDispatch();
    const data= useSelector(state => state.test.data);
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33,
        },
        zoom: 11,
      };

      const [location, setLocation] = useState(defaultProps);

      function handleSetLocation(latLng) {
          setLocation({...location, center:{lat: latLng.lat, lng:latLng.lng }})
      }
    return(
        <>
        <h1>Testing 123</h1>
    <h3>The data is:{data}</h3>
    <Button content='increment' color='green' onClick={()=> displatch(increment(20))}/>
    <Button content='decrement' color='red' onClick={()=> displatch(decrement(10))}/>
    <Button content='show modal' color='teal' onClick={()=> displatch(openModal({modalType:'TestModal', modalProps: {data}}))}/>
    <div style={{marginTop: 15}}>
        <TestPlaceInput setLocation={handleSetLocation}/>
        <TestMap location={location}/>
    </div>
        </>
    )
}