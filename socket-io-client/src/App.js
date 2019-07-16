import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'

import Demo from './Demo';

// const testFetch = "https://jsonplaceholder.typicode.com/photos?albumId=1"

const historyURL = 'http://localhost:4001/history'
const endpoint = 'http://127.0.0.1:4001'
let socket = false

      /*
      fetch(historyURL)
        .then( (resp) => resp.json() )
        .then( data => {
          console.log('fetch data:', data.length);
          console.log('fetch wd:', data.length);

          setWeatherData( [...data, ...weatherData] );    // prependData
        })
        .catch(error => console.error('Fetch Error:', error));
      */

function App() {

  const [historyData, setHistoryData] = useState([])
  useEffect(() => {
    if (!socket) {
      console.log('fetch history');
      async function fetchUrl() {
        const data = await fetch(historyURL);
        const hist = await data.json();
        setHistoryData(hist);
      }
      fetchUrl();
    }
  }, [historyData]);

  const [weatherData, setWeatherData] = useState([])
  useEffect(() => {
    console.log("weatherData useEffect() len:", weatherData.length);

    if (!socket) {
      console.log('setup socket:', endpoint);

      socket = io(endpoint)
    }

    socket.on("FromAPI", data => {
        console.log('fromAPI:', data);
        console.log('wd.length:', weatherData.length);
        setWeatherData([...weatherData, data]); // appendData   <<-- this can not be in a conditional
      })

  },[weatherData])

  const getLastElement = (arr) => {
    const i = arr.length - 1
    return (i>=0) ? arr[i] : false;
  }

  const showLastTime = (arr) => {
    const i = arr.length - 1
    return (i>=0) ? arr[i].hms : "--";
  }

  var last_element = getLastElement(weatherData);
  const allData = [...historyData, ...weatherData]
  const time  = allData.map( a => a.hms )
  const temp  = allData.map( a => a.temperature )
  const humid = allData.map( a => a.humidity )

  console.log('before render hd, wd, time:', historyData.length, weatherData.length, time.length);
  console.log('before render last hd, wd:', showLastTime(historyData), showLastTime(weatherData));

  return (
    <div style={{ textAlign: "center" }}>
      <Demo time={time} temp={temp} humid={humid} />
      {last_element
          ? <p>The temperature in Benton is: {last_element.temperature} °F</p>
          : <p>Loading...</p>}
      <footer><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></footer>
    </div>
  );
}

export default App;
