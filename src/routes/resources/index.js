import React from 'react';
import Layout from '../../components/Layout';
import Resources from './Resources';

const title = 'Resources -';

export default {

  path: '/resources',

  action() {
    return {
      title,
      chunk: 'resources',
      component: <Layout path='/resources'><Resources/></Layout>,
    };
  },
};