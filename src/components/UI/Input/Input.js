import React from 'react';
import TextField from 'material-ui/TextField';
import { green100 } from 'material-ui/styles/colors';
import classes from './Input.css';

const Input = ({hintText, floatingLabelText}) => {
   return(
      <TextField
         hintText={hintText}
         floatingLabelText = {floatingLabelText}
         style={{marginRight: 20}}
         floatingLabelStyle={styles.floatingLabelStyle}
         underlineFocusStyle={styles.underlineFocusStyle}
         underlineStyle={styles.underlineStyle}
         inputStyle={{ marginTop: 10}}
      />
   );
}

const styles = {
   floatingLabelStyle: {
      color: green100,
   },
   underlineStyle: {
      borderColor: green100,
   },
   underlineFocusStyle: {
      borderColor: green100,
   }
}

export default Input;