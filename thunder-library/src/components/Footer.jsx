import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
        <Typography sx={styles.text}>Thunder Library © 2023</Typography>
    </Box>
  )
}

export default Footer

const styles = {
    footer: {
        position: "relative",
        marginTop: "60px",
    },
    text: {
        position: "absolute",
        bottom: "20px",
        left: 0,
        right: 0,
        textAlign: "center",
    }
}