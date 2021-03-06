import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Item, List, Segment } from "semantic-ui-react";
import { Icon, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import {deleteEvent} from '../eventAction';
import {format} from 'date-fns';

export default function EventListItem({event}) {
 const dispatch =useDispatch();
 
 return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(event.date, 'MMM d, yyyy h:mm a')}
          <Icon name="marker" />
          {event.venue.address}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          color="teal"
          floated="right"
          content="View"
          as={Link} to={`/events/${event.id}`}
        />
        <Button
          color="red"
          floated="right"
          content="delete"
          onClick={() => dispatch(deleteEvent(event.id))}
        />
      </Segment>
    </Segment.Group>
  );
}
