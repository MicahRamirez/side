import React, { Fragment } from 'react';

// material UI
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

// icons
import CreditCardIcon from 'material-ui-icons/CreditCard';
import PaymentIcon from 'material-ui-icons/Payment';
import OpenLockIcon from 'material-ui-icons/LockOutline';

import { PADDING } from '../constants';
import PaymentInputs from './PaymentInputs';

const styles = {
  creditFormFirstRow: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },
  creditFormSecondRow: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },
};

class CreditCardForm extends React.Component {
  buildCreditCardFormInput = (adornmentPosition, Icon) => {
    const creditCardFormInputProps = {
      startAdornment: <InputAdornment position={adornmentPosition}><IconButton> <Icon/></IconButton></InputAdornment>,
      inputComponent: PaymentInputs,
    };
    return creditCardFormInputProps;
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
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
        <Grid container alignContent='center'>
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
      </Fragment>
    );
  }
};

export default withStyles(styles)(CreditCardForm);
