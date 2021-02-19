import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

//const OrderOptionNumber = () => (
//<div>
{/*<h3>ComponentName</h3>*/}
//<h3></h3>
//</div>

const OrderOptionNumber = ({ currentValue, setOptionValue, price, limits }) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      //min="1"
      //max="9"
      min={limits.min}
      max={limits.max}
      //onChange={(event) => setOptionValue(event.target.value)}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    ></input>
    {price}
  </div>
);

OrderOptionNumber.propTypes = {
  //currentValue: PropTypes.string,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;