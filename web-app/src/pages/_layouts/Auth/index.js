import React from 'react';

import useStyles from './styles';

function Auth({ children }) {
  const classes = useStyles();

  return <div className={classes.bg}>{children}</div>;
}

export default Auth;
