import React from 'react';
import NumberFormat from 'react-number-format';


const PaymentInputs = (props) => {
  const { inputRef, onChange, inputFormat, ...other } = props;
  return (
    <NumberFormat
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      format={inputFormat}
      {...other}
    />
  );
};

export default PaymentInputs;