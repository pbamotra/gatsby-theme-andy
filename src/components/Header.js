/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Box, jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default ({ siteMetadata }) => (
  <header>
    <Box py={2} px={3} sx={{ borderBottom: '1px solid', borderColor: 'gray', fontStyle: 'italic'}}>
      <Link to="https://www.pankesh.com" sx={{ fontWeight: 'bold', color: 'text', textDecoration: 'none' }}>
        {siteMetadata.title} <FontAwesomeIcon icon={faHome} />
      </Link>
    </Box>
  </header>
);
