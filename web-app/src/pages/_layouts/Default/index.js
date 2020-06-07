import React from 'react';

import useStyles from './styles';

function App({ children }) {
  const classes = useStyles();

  return <div className={classes.bg}>{children}</div>;
}

export default App;
