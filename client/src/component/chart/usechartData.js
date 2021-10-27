import { useState, useEffect, useMemo } from 'react';
import moment from 'moment-timezone';
import { chartColors } from './constantsChart';

function useChartData(tickers, nameTicker) {
  const [chartData, setChartData] = useState({});
  const [timeScale, setTimeScale] = useState([]);
  const [priceScale, setPriceScale] = useState([]);
  const [timeScaleAAPL, setTimeScaleAAPL] = useState([]);
  const [priceScaleAAPL, setPriceScaleAAPL] = useState([]);

  useEffect(() => {
    setTimeScaleAAPL(prevState => [
      ...prevState,
      moment().tz(tickers[0].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleAAPL(prevState => [...prevState, Number(tickers[0].price)]);
  }, [tickers]);
  const [timeScaleGOOGL, setTimeScaleGOOGL] = useState([]);
  const [priceScaleGOOGL, setPriceScaleGOOGL] = useState([]);
  useEffect(() => {
    setTimeScaleGOOGL(prevState => [
      ...prevState,
      moment().tz(tickers[1].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleGOOGL(prevState => [...prevState, Number(tickers[1].price)]);
  }, [tickers]);
  const [timeScaleMSFT, setTimeScaleMSFT] = useState([]);
  const [priceScaleMSFT, setPriceScaleMSFT] = useState([]);
  useEffect(() => {
    setTimeScaleMSFT(prevState => [
      ...prevState,
      moment().tz(tickers[2].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleMSFT(prevState => [...prevState, Number(tickers[2].price)]);
  }, [tickers]);
  const [timeScaleAMZN, setTimeScaleAMZN] = useState([]);
  const [priceScaleAMZN, setPriceScaleAMZN] = useState([]);
  useEffect(() => {
    setTimeScaleAMZN(prevState => [
      ...prevState,
      moment().tz(tickers[3].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleAMZN(prevState => [...prevState, Number(tickers[3].price)]);
  }, [tickers]);
  const [timeScaleFB, setTimeScaleFB] = useState([]);
  const [priceScaleFB, setPriceScaleFB] = useState([]);
  useEffect(() => {
    setTimeScaleFB(prevState => [
      ...prevState,
      moment().tz(tickers[4].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleFB(prevState => [...prevState, Number(tickers[4].price)]);
  }, [tickers]);
  const [timeScaleTSLA, setTimeScaleTSLA] = useState([]);
  const [priceScaleTSLA, setPriceScaleTSLA] = useState([]);
  useEffect(() => {
    setTimeScaleTSLA(prevState => [
      ...prevState,
      moment().tz(tickers[5].last_trade_time, 'Europe/Kiev').format('HH:mm'),
    ]);
    setPriceScaleTSLA(prevState => [...prevState, Number(tickers[5].price)]);
  }, [tickers]);

  useMemo(() => {
    switch (nameTicker) {
      case 'AAPL':
        setTimeScale(timeScaleAAPL);
        setPriceScale(priceScaleAAPL);
        break;
      case 'GOOGL':
        setTimeScale(timeScaleGOOGL);
        setPriceScale(priceScaleGOOGL);
        break;
      case 'MSFT':
        setTimeScale(timeScaleMSFT);
        setPriceScale(priceScaleMSFT);
        break;
      case 'AMZN':
        setTimeScale(timeScaleAMZN);
        setPriceScale(priceScaleAMZN);
        break;
      case 'FB':
        setTimeScale(timeScaleFB);
        setPriceScale(priceScaleFB);
        break;
      case 'TSLA':
        setTimeScale(timeScaleTSLA);
        setPriceScale(priceScaleTSLA);
        break;
      default:
        break;
    }
  }, [
    nameTicker,
    timeScaleGOOGL,
    priceScaleGOOGL,
    timeScaleTSLA,
    priceScaleTSLA,
    priceScaleFB,
    timeScaleFB,
    priceScaleAMZN,
    timeScaleAMZN,
    priceScaleMSFT,
    timeScaleMSFT,
    priceScaleAAPL,
    timeScaleAAPL,
  ]);
  useMemo(() => {
    setChartData({
      labels: timeScale,
      datasets: [
        {
          label: 'Chart Colors',
          data: priceScale,
          fill: false,
          backgroundColor: chartColors,
          borderColor: ['rgba(75,192,192,1)'],
        },
      ],
    });
  }, [timeScale, priceScale]);
  return chartData;
}
export default useChartData;
