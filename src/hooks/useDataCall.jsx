import {useState, useEffect} from 'react'
import axios from 'axios'
import useDarkMode from './useDarkMode'


//This sets our state and handles our axios call.
const useDataCall = (initialValues) => {
  const [coinData, setCoinData] = useState([]);
  //This also sets our state for DarkMode
  const [darkMode, setDarkMode] = useDarkMode(initialValues.darkMode);

  //If time, break this down further and export out the call
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return [coinData, darkMode, setDarkMode];
};

export default useDataCall;
