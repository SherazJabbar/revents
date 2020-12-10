/*global google*/
import React from "react";

import { Button, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventAction";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyPlaceInput from '../../../app/common/form/MyPlaceInput';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/catergoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";


export default function EventForm({ match, history }) {
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const dispatch = useDispatch();
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: {
      address:'',
      latLng:null
    },
    venue:  {
      address:'',
      latLng:null
    },
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must a provide a title"),
    category: Yup.string().required("You must a provide a category"),
    description: Yup.string().required(),
    city: Yup.object().shape({
      address:Yup.string().required('City is Required')
    }),
    
    venue: Yup.object().shape({
      address:Yup.string().required('Venue is required')
    }),

    date: Yup.string().required()
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values })) // values override the selectedEvent Properties
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
           history.push("/events");
        }}
      >
        {({isSubmitting, dirty, isValid, values}) => (
          <Form className="ui form">
          <Header sub color="teal" content="Event Details" />
          <MyTextInput name="title" placeholder=" Title" />
          <MySelectInput name="category" placeholder=" Category" options={categoryData} />
          <MyTextArea name="description" placeholder=" Description" rows='3'/>
          <Header sub color="teal" content="Event location Details" />
          <MyPlaceInput name="city" placeholder="City" />
          <MyPlaceInput
           name="venue" 
           placeholder=" Venue" 
           disabled={!values.city.latLng} 
           options= {{
             location:new google.maps.LatLng(values.city.latLng),
             radius:1000,
             types:['establishment']
           }}/>
          <MyDateInput 
          name="date" 
          placeholderText="Event date" 
          type="date" 
          timeFormat='HH:mm'
          showTimeSelect
          timeCaption='time'
          dateFormat='MMM d, yyyy h, mm a'/>

          <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type="submit" floated="right" positive content="Submit" />
          <Button
            disabled={isSubmitting}
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
        )}
        
      </Formik>
    </Segment>
  );
}
