import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import teal from 'material-ui/colors/teal';

const colorteal = teal[300];

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textField: {
    margin: theme.spacing.unit,
    width: 350,
  },
  underlineStyle: {
    borderColor: colorteal,
  },
});

class ComposedTextField extends React.Component {
    
  render() {
    const { classes } = this.props;
    const { type } = this.props;
    const { name } = this.props;
    const { placeholder } = this.props;

    return (
      <div className={classes.container}>
       <TextField
            required
            id="required"
            label={placeholder}
            className={classes.textField}
            margin="normal"
            type={type}
            name={name}
            underlineFocusStyle={styles.underlineStyle}
       />
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);






