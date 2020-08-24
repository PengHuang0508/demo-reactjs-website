import React from 'react';
import Layout from '../../components/Layout';
import Event from './Event';

export default {

  path: '/event',

  action() {
    return {
      title: "Event",
      chunk: 'event',
      component: <Layout path='/event'><Event/></Layout>,
    };
  },
};