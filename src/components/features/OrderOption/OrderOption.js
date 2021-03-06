import React from 'react';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

import styles from './OrderOption.scss';

/*const OrderOption = () => (
  <div className={styles.component}>
    <h3 className={styles.title}>Car Rental</h3>
  </div>
);*/

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};
  
//const OrderOption = ({name, type, ...otherProps}) => {
const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};
  
OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;