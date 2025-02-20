import React, { useContext, useState } from 'react'
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
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material'
import { AppContext } from '../context/userContext'

const drawerWidth = 240

const NavBar = ({ autenticado, setAutenticado }) => {
  const { context, setContext } = useContext(AppContext)
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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
      show: !autenticado
    },
    {
      id: 5,
      name: 'Registrarse',
      path: '/signup',
      show: !autenticado
    }
  ]

  const showProfile = () => {
    handleCloseUserMenu()
    navigate('/profile')
  }

  const logOut = () => {
    handleCloseUserMenu()
    setContext({})
    localStorage.removeItem('user')
    setAutenticado(false)
  } 

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
          {autenticado && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Abrir Configuración'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Imagen del Usuario' src={context.profilePhoto} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={1} onClick={showProfile}>
                  <Typography sx={{ textAlign: 'center' }}>
                    Mi Perfil
                  </Typography>
                </MenuItem>
                <MenuItem key={2} onClick={logOut}>
                  <Typography sx={{ textAlign: 'center' }}>
                    Cerrar Sesión
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
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
