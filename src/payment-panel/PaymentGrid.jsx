import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
const styles = {
  billingInfo: {
    paddingLeft: '10px',
  },
  creditCardForm: {
    paddingRight: '10px',
  }
};

class PaymentGrid extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <div className={classes.billingInfo}>
            <Paper>
              {'Billing info'}
            </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.creditCardForm}>
              <Paper>
                {'CC Form'}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PaymentGrid);