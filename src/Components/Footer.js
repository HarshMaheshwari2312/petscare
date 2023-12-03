import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
/*
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link to="/">Woof</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};*/
const Copyright = () =>{
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            PetsCare{new Date().getFullYear()}
            {"."}
          </Typography>
        );
      };
        
    const Footer = ({ description, title }) =>
    {
        return (
          <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
              <Typography variant="h6" align="center" gutterBottom>
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
              >
                {description}
              </Typography>
              <Copyright />
            </Container>
          </Box>
        );      
    };
export default Footer;