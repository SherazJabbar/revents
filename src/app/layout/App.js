import React, {Fragment, useState} from "react";

import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import {Container} from 'semantic-ui-react';


function App() {
  const [formOpen , setFormOpen]= useState(false);

  return (
    <Fragment>
      <div className="App">
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    
    </div>
    </Fragment>
    
  );
}

export default App;
