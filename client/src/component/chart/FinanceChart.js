import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import useChartData from './usechartData';
import style from './chsrt.module.css';

export default function FinanceChart({ onClick, nameTicker, tickers }) {
  const chartData = useChartData(tickers, nameTicker);
  const fileRef = useRef(null);
  console.log('nameTicker', nameTicker);
  console.log('tickers', tickers);

  return (
    <div className={style.WrapperChart}>
      <h3>{nameTicker}</h3>
      <div style={{ height: '300px', width: '600px' }}>
        <Line data={chartData} ref={fileRef} />
        <button className={style.ChartButton} onClick={onClick}>
          CLOSE CHART
        </button>
      </div>
    </div>
  );
}
