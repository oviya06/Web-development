import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Select,MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from '../images/logo.avif';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.20),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(8),
  marginLeft: 17,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(55),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft:50,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function PrimarySearchAppBar() {


  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"white"}} >
        <Toolbar>
          
          <Typography variant="h6" noWrap component="div" >
            <img src={logo}/>
          </Typography>

          <Search style={{textAlign:"center", justifyContent:'center'}}>
            <SearchIconWrapper>
            <SearchIcon/>
            </SearchIconWrapper>
            <Box sx={{ flexGrow: 1 }}  marginLeft={30}/>
            <StyledInputBase placeholder="Search…"  style={{ display: 'flex',justifyContent: 'center',position:'center' }}/>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton  size="large" edge="end" color="inherit">
              <PersonOutlineOutlinedIcon style={{color:"black"}}/>
            </IconButton>

            <IconButton size="large"  color="inherit">
              <Badge badgeContent={1} color="error">
                <FavoriteBorderIcon style={{color:"black"}} />
              </Badge>
            </IconButton>

            <IconButton size="large"  color="inherit">
              <Badge badgeContent={1} color="error">
                < ShoppingCartOutlinedIcon style={{color:"black"}}/>
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex',md: 'none' } }}>
            <IconButton size="large"  color="inherit">
              <MoreIcon style={{color:"black"}}/>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

export default PrimarySearchAppBar;