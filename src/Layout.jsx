import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';

const layout = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
};

const styles = (theme)  => ({
  root: {
    flexGrow: 1,
  },
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid
          container
          className={classes.demo}
          alignItems={layout.alignItems}
          direction={layout.direction}
          justify={layout.justify}
        >
                <Grid item xs={12}>
          {this.props.children}
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Layout);