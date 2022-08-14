import React from 'react';
import classes from './Nav.module.css';
import { Badge } from '@mui/material';
// import {ShoppingCartOutlined} from '@mui/material'

const Nav = () => {
  return (
      <div className={classes['nav__container']}>
          <div className={classes["nav__container-left"]}>
              <p className={classes.language}>EN</p>
              <div className={classes.search}>
                  <input type="text" placeholder='search item'  />
                  
              </div>
          </div>
          <div className={classes['nav__container-center']}>
              <h1 className={classes.logo}>MOKOM.</h1>
          </div>
          <div className={classes['nav__container-right']}>
              <p>REGISTER</p>
              <p>SIGN IN</p>
              <p>
                  <Badge badgeContent={4} color='primary'>
                      {/* <ShoppingCartOutlined/> */}
                  </Badge>
              </p>
          </div>
    </div>
  )
}

export default Nav