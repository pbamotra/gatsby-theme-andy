/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Box, jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const home = <FontAwesomeIcon icon={faHome} />;

export default ({ siteMetadata }) => (
  <header>
    <Box py={2} px={3} sx={{ borderBottom: '1px solid', borderColor: 'gray', fontStyle: 'italic'}}>
      <Link to="https://www.pankesh.com" sx={{ color: 'text', textDecoration: 'none', fontWeight: 'bold', }}>
        {siteMetadata.title} {home}
      </Link>
      <Link to="/" sx={{ color: 'text', textDecoration: 'underline', marginLeft: '30px' }}>
        {"Notes home"} 
      </Link>
    </Box>
  </header>
);
