import React from 'react'
import styled from 'styled-components'
// const Barra = styled.nav`
//   width: 100%;
//   height: 3.5rem;
//   background-color: #0f0f0f;
//   color: #fff
// `
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const drawerWidth = 240

const NavBar = ({ autenticado, setAutenticado }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const navItems = [
    {
      id: 1,
      name: 'Personajes',
      path: '/characters',
      show: autenticado
    },
    {
      id: 2,
      name: 'Ubicaciones',
      path: '/locations',
      show: autenticado
    },
    {
      id: 3,
      name: 'Episodios',
      path: '/episodes',
      show: autenticado
    },
    {
      id: 4,
      name: 'Ingresar',
      path: '/login',
      show: true
    },
    {
      id: 5,
      name: 'Registrarse',
      path: '/signup',
      show: true
    }
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Rick & Morty Pedia
      </Typography>
      <Divider />
      <List>
        {navItems
          .filter(ruta => ruta.show)
          .map(item => (
            <NavLink to={item.path} key={item.id}>
              <ListItem key={item.id} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', mb: 8 }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Rick & Morty Pedia
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems
              .filter(ruta => ruta.show)
              .map(item => (
                // <a href={item} />
                // <Link to={item} />
                <NavLink to={item.path} key={item.id}>
                  <Button key={item.id} sx={{ color: '#fff' }}>
                    {item.name}
                  </Button>
                </NavLink>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default NavBar
