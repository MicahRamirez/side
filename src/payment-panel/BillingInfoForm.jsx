import React from 'react';
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import PaymentIcon from 'material-ui-icons/Payment';
import OpenLockIcon from 'material-ui-icons/LockOutline';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import { injectStripe } from 'react-stripe-elements';

import PaymentInputs from './PaymentInputs';

const PADDING = '8px';

const styles = {
  creditFormFirstRow: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },
  creditFormSecondRow: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },
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
  buildCreditCardFormInput = (adornmentPosition, Icon) => {
    const creditCardFormInputProps = {
      startAdornment: <InputAdornment position={adornmentPosition}><IconButton> <Icon/></IconButton></InputAdornment>,
      inputComponent: PaymentInputs,
    };
    return creditCardFormInputProps;
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
            <div className={classes.creditFormFirstRow}>
                <TextField
                  id="credit-card-number"
                  label="Credit Card"
                  InputProps={this.buildCreditCardFormInput("end", CreditCardIcon)}
                  fullWidth
                  margin="normal"
                  inputProps={{ inputFormat: "#### #### #### ####" }}
                />
            </div>
            <Grid container alignContent='center' spacing>
              <Grid item xs={12} sm={6} md={6}>
                <div className={classes.creditFormSecondRow}>
                  <TextField
                    id="expiration-date-input"
                    label="Exp"
                    InputProps={this.buildCreditCardFormInput("end", PaymentIcon)}
                    margin="normal"
                    inputProps={{ inputFormat: "##/##" }}
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className={classes.creditFormSecondRow}>
                  <TextField
                      id="cvc-input"
                      label="CCV"
                      InputProps={this.buildCreditCardFormInput("end", OpenLockIcon)}
                      margin="normal"
                      inputProps={{ inputFormat: "###" }}
                      fullWidth
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.creditCardForm}>
          </div>
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