import React from 'react'
// import DuckImage from '../assets/Duck.jpg'
// import './HomeView.scss'

const events = [
  'Event one',
  'Event two',
  'Event three'
];
const listEvents = events.map((events) =>
  <h4>{events}</h4>
);

export const AboutView = () => (
  <div>
    <h4>About Page</h4>
    <div>
      {listEvents}
    </div>
  </div>
)

export default AboutView
