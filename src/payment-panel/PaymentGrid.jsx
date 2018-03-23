import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import BillingInfoForm from './BillingInfoForm';

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
        <BillingInfoForm />
      </div>
    );
  }
}

export default withStyles(styles)(PaymentGrid);