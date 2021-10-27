import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import useTicker from './useTickers';
import Ticker from '../ticker/Ticker';
import FinanceChart from '../chart/FinanceChart';
import style from './allTickers.module.css';

const AllTickers = () => {
  useTicker();
  const [activeChart, setActiveChart] = useState(false);
  const [nameTicker, setNameTicker] = useState('');
  const tickers = useSelector(store => store.ticker.tickers);
  const tickerArray = useMemo(() => tickers.length > 0, [tickers]);
  const handelActiveChart = ticker => {
    setActiveChart(true);
    setNameTicker(ticker);
  };
  const handelDesactiveChart = () => {
    setActiveChart(false);
    setNameTicker('');
  };
  return (
    <div>
      <h2>{tickerArray && tickers[0].exchange}</h2>
      <div className={style.Container}>
        {tickerArray &&
          tickers.map(
            ({
              ticker,
              price,
              change,
              change_percent,
              dividend,
              yield: yi,
              last_trade_time,
            }) => (
              <Ticker
                onClick={() => handelActiveChart(ticker)}
                key={ticker}
                ticker={ticker}
                price={price}
                change={change}
                change_percent={change_percent}
                dividend={dividend}
                yi={yi}
                tradeTime={moment()
                  .tz(last_trade_time, 'Europe/Kiev')
                  .format('YYYY-MM-DD HH:mm')}
              />
            )
          )}
      </div>
      <div className={style.ContainerChart}>
        {activeChart && tickerArray && tickers && (
          <FinanceChart
            onClick={() => handelDesactiveChart()}
            nameTicker={nameTicker}
            tickers={tickers}
          />
        )}
      </div>
    </div>
  );
};
export default AllTickers;
