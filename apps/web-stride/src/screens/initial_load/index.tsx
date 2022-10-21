import BigDipperLogoRed from '@assets/big-dipper-red.svg';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import Logo from '@assets/logo';
import { LinearProgress } from '@material-ui/core';
import { readTheme } from '@recoil/settings';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useStyles } from './styles';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Logo className={classes.logo} />
        <LinearProgress className={classes.divider} />
        {theme === 'light' ? (
          <BigDipperLogoRed />
        ) : (
          <BigDipperLogoWhite />
        )}
      </div>
    </div>
  );
};

export default InitialLoad;