import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventDetailChat from './EventDetailedChat';
import EventDetailHeader from './EventDetailedHeader';
import EventDetailInfo from './EventDetailedInfo';
import EventDetailSidebar from './EventDetailsSidebar';


export default function EventDetailedPage({match}) {
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    return(
        <Grid>
            <Grid.Column width={10}>
                <EventDetailHeader event={event}/>
                <EventDetailInfo  event={event}/>
                <EventDetailChat/>
            </Grid.Column>
            <GridColumn width={6}>
                <EventDetailSidebar attendees={event.attendees}/>
            </GridColumn>
        </Grid>
    )
}