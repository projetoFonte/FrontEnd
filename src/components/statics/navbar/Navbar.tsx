import React from 'react';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, InputBase, Badge, Box, MenuItem, Menu, Grid} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import FeedIcon from '@material-ui/icons/DynamicFeed';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { useDispatch, useSelector} from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);


function Navbar() {

const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens);
    let history = useHistory();
    const dispatch = useDispatch();  

    function goLogout() {
      dispatch(addToken(''))
      toast.info('Usuário deslogado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress:undefined,
      });
      history.push('/login')
  }


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <Link to="/perfil" className='text-decorator-none color'>     
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      </Link>
      <Link to="/login" className='text-decorator-none color'>
        <MenuItem onClick={goLogout}>Logout</MenuItem>
      </Link>
    </Menu>
  );

  //onClick={handleMenuClose}

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton>
          <Badge>
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className='bg' position="static">
        <Toolbar>

        <Link to='/home' className='text-decorator-none'> 
          <Box>    
            <img src="https://imgur.com/YzFkLcc.png" alt="" className='img'/>
          </Box>
        </Link>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Box className={classes.search}>
           
                <Box className={classes.searchIcon}>
                <SearchIcon />
                </Box>

                <InputBase
                placeholder="Procurar..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}/>
          </Box>
        </Grid>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/home" className='text-decorator-none'>
                <IconButton color="inherit" className='home'>
                    <HomeIcon />
                </IconButton>
            </Link>

            <Link to="/posts" className='text-decorator-none'>
                <IconButton color="inherit" className='home'>
                    <FeedIcon />
                </IconButton>
            </Link>

            {/* <Link to="/posts" className='text-decorator-none'>
                <IconButton color="inherit" className='home img'>
                    <img src="https://imgur.com/BJYVXLp.gif" alt="" />
                </IconButton>
            </Link> */}
                
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Navbar;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
