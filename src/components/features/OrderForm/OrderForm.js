import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

//import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripName, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName, 
    tripId, 
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

//const OrderForm = ({ tripCost, options }) => (
const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId, tripCountry }) => (
  <form>
    <Row>
      {pricing.map(option =>
        <Col md={4} key={option.id}>
          {/*<OrderOption {...options} />*/}
          <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
        </Col>
      )}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
        <Button onClick={options.name && options.contact ? () => sendOrder(options, tripCost, tripName, tripId, tripCountry): null}>Order now!</Button>
      </Col>
    </Row>
  </form>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountry: PropTypes.object,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;