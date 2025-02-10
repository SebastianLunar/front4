import { List, ListItem, ListItemAvatar, Paper, Typography } from '@mui/material'
import React from 'react'

const LocationDetail = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        width: '600px',
        height: '220px',
        borderRadius: '0.5rem',
        margin: '0.75rem',
        padding: '2rem'
      }}
    >
      <Typography variant='h4'>{location.name}</Typography>
      <Typography variant='h6'>{location.dimension}</Typography>
      <Typography variant='h6'>Tipo : {location.type}</Typography>
      {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {location.residents.map(resident => (
          <>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              </ListItemAvatar>
              <ListItemText
                primary='Brunch this weekend?'
                secondary={
                  <React.Fragment>
                    <Typography
                      component='span'
                      variant='body2'
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </>
        ))}
      </List> */}
    </Paper>
  )
}

export default LocationDetail
