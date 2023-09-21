import styled from '@emotion/styled';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react'


const Component =styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
    opacity: '0.8',
    width: '100%',
})

const NoMails = ({message}) => {
    // const {heading,subHeading} = message;
  return (
    <Component>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <Divider style={{width:'100%',marginTop:10}}/>
    </Component>
  )
}

export default NoMails