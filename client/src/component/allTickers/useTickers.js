import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { URL, EVENT } from '../constants';
import { addTicker } from '../../redux/action';

const useTicker = () => {
  const dispatch = useDispatch();
  const socket = io.connect(URL);

  useEffect(() => {
    socket.emit(EVENT.start);
    return socket.emit(EVENT.stop);
  }, []);

  useEffect(() => {
    socket.on(EVENT.ticker, response => {
      const array = Array.isArray(response) ? response : [response];
      dispatch(addTicker(array));
    });
  }, [dispatch]);
};
export default useTicker;
