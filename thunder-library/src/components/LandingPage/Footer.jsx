import React from 'react'
import { Box, Grid, Link } from '@mui/material';

import { Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Grid sx={styles.redes}>
         <Link href="https://www.facebook.com/" target='_blank' >
          <FacebookIcon fontSize='large'></FacebookIcon>
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <InstagramIcon fontSize='large'></InstagramIcon>
        </Link>
        <Link href="https://www.twitter.com/" target="_blank">
          <TwitterIcon fontSize='large'></TwitterIcon>
        </Link>
      
      
      
      </Grid>
      <Box sx={styles.text}>
        <Typography>Politica de Privacidad</Typography>
        <Typography>Terminos de Uso</Typography>
        <Typography>Thunder Library © 2023</Typography>
      </Box>
    </Box>
  )
}

export default Footer

const styles = {
    footer: {
        backgroundColor: "rgb(7,14,24)",
        position: "relative",
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    redes: {
      backgroundColor: "rgb(7,14,24)",
      py: 2,
    
      textAlign: "center",
    },
    text: {
        py: 4,
        display: "flex",
        columnGap: "18rem",
        
    },
}