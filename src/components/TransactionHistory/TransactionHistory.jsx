import React from 'react';
import PropTypes from 'prop-types';
import {
  TransBody,
  TransHead,
  TransSecion,
  TransTable,
  TransTd,
  TransTh,
  TransTr,
} from './TransactionStyled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransSecion>
      <TransTable>
        <TransHead>
          <TransTr>
            <TransTh>Type</TransTh>
            <TransTh>Amount</TransTh>
            <TransTh>Currency</TransTh>
          </TransTr>
        </TransHead>

        <TransBody>
          {items.map(({ id, type, amount, currency }) => (
            <TransTr key={id}>
              <TransTd>{type}</TransTd>
              <TransTd>{amount}</TransTd>
              <TransTd>{currency}</TransTd>
            </TransTr>
          ))}
        </TransBody>
      </TransTable>
    </TransSecion>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
