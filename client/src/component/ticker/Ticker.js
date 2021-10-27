import React from 'react';
import style from './tiker.module.css';

const Ticker = ({
  onClick,
  ticker,
  price,
  change,
  change_percent,
  dividend,
  yi,
  tradeTime,
}) => {
  const {
    Container,
    Ticker_Up_Arrow,
    Ticker_Down_Arrow,
    Tickers_parametrs,
    Change_decrease,
    Change_increase,
    Price,
    Change_percent_increase,
    Change_percent_decrease,
    Dividend,
    Yielder,
    LastTradeTime,
  } = style;
  return (
    <div className={Container} onClick={onClick}>
      <p className={change > 0 ? Ticker_Up_Arrow : Ticker_Down_Arrow}>
        Ticker:{ticker}
      </p>
      <div className={Tickers_parametrs}>
        <p className={Price}>{price}:Price</p>
        <p className={change > 0 ? Change_increase : Change_decrease}>
          {change}:Change
        </p>
        <p
          className={
            change > 0 ? Change_percent_increase : Change_percent_decrease
          }
        >
          {change_percent}%:Percent
        </p>
        <span></span>
        <p className={Dividend}>{dividend}:Dividend</p>
        <p className={Yielder}>{yi}:Yield</p>
        <p className={LastTradeTime}>Trade_Time:{tradeTime}</p>
      </div>
    </div>
  );
};
export default Ticker;
