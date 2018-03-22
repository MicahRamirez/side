import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import test from '../test.jpg';
import PaymentGrid from '../payment-panel/PaymentGrid';

const styles = (theme)  => ({
  root: {
    marginBottom: '20px',
    marginTop: '20px',
    overflow: 'auto',
    padding: '20px',
  },
});

class MerchBox extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          {/* TODO add bottom margin */}
          <Grid item xs={12}>
              <Typography
                variant={'headline'}
                align='center'
              >
                jnbKappa
              </Typography>
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Paper elevation={3}>
            <Grid container>
              <Grid item xs={10}>
                <img src={test} />
              </Grid>
            </Grid>
          </Paper>
        </div>
        <PaymentGrid />
      </div>
    );
  }
}

export default withStyles(styles)(MerchBox);