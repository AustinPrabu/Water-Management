import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Container maxWidth="lg">
        <Typography variant="h2" component="div" style={{ textAlign: "center", backgroundColor: '#cfe8fc', height: '100vh' }} > u should start design ri8 here!!!</Typography>
      </Container>
    </div>
  );
}

export default App;
