// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type } from '../lib/settings';

import 'normalize.css';

const Header = styled.div`
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

// Component
const Template = (
  {
    children,
    location,
  },
) => {
  return (
    <div>
      <Header>
        header
      </Header>
      <div>
        {children}
      </div>
      <div>
        footer
      </div>
    </div>
  );
};

Template.propTypes = {};

export default Template;
//import React from 'react'
//import { Link } from 'react-router'
//import { prefixLink } from 'gatsby-helpers'
//import { config } from 'config'
//import { palette, type } from '../utils/settings'
// class Template extends React.Component {
//   render () {
//     const { location, children } = this.props
//     let header
//     if (location.pathname === prefixLink('/')) {
//       header = (
//         <h1
//           style={{
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: 'none',
//               textDecoration: 'none',
//               color: 'inherit',
//             }}
//             to={prefixLink('/')}
//           >
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: 'Montserrat, sans-serif',
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: 'none',
//               textDecoration: 'none',
//               color: 'inherit',
//             }}
//             to={prefixLink('/')}
//           >
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <div
//         style={{
//         }}
//       >
//         {header}
//         {children}
//       </div>
//     )
//   }
// }
//
// Template.propTypes = {
//   children: React.PropTypes.any,
//   location: React.PropTypes.object,
//   route: React.PropTypes.object,
// }
//
// export default Template
