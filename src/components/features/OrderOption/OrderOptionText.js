import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue, required }) => (
  <input
    type="text"
    className={styles.input}
    value={currentValue}
    onChange={(event) => setOptionValue(event.currentTarget.value)} 
    required={required} />
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionText;