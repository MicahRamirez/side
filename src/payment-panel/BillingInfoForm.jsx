import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import { injectStripe } from 'react-stripe-elements';

import CreditCardForm from './CreditCardForm';

import { PADDING } from '../constants';

const styles = {
  creditCardInfo: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  }
};

class BillingInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props;
    return (
      <div>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <div className={classes.creditCardInfo}>
            <Paper>
              <CreditCardForm
              />
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
          </Paper>
        </Grid>
      </Grid>
      <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
    );
  }
}


export default withStyles(styles)(reduxForm({
  form: 'BillingInfoForm', // a unique identifier for this form
})(BillingInfoForm));
