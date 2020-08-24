import React from 'react';
import Layout from '../../components/Layout';
import About from './About';

const title = 'About -';

export default {

  path: '/about',

  action() {
    return {
      title,
      chunk: 'about',
      component: <Layout path='/about'><About/></Layout>,
    };
  },
};

// import React from 'react';
// import Layout from '../../components/Layout';
// import About from './About';

// export default {

//   path: '/about',

//   async action({ locale }) {
    
//     // TODO: figure out if this old code is still needed
//     // const about = await require.ensure([], require => require('./about.md'), 'about');
//     // const service = await require.ensure([], require => require('./service.md'), 'service');

//     const data = await new Promise((resolve) => {
//       require.ensure([], (require) => {
//         try {
//           resolve(require(`./about.${locale}.md`)); // eslint-disable-line import/no-dynamic-require
//         } catch (e) {
//           resolve(require('./about.md'));
//         }
//       }, 'about');
//     });

//     return {
//       title: "About us",
//       chunk: 'about',
//       component: <Layout><About about={about} service={service}/></Layout>,
//     };
//   },
// }
