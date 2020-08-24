import React from 'react';
import Layout from '../../components/Layout';
import Services from './Services';

const title = 'Services -';

export default {

  path: '/services',

  action() {
    return {
      title,
      chunk: 'services',
      component: <Layout path='/services'><Services/></Layout>,
    };
  },
};
