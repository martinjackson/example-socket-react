
// taken from: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
// Author: Connor Wilson
//  Tech Lead at @JoinLeague, Instructor Ops Lead at @itsbridgeschool. Building things and teaching folks in Toronto.


// How to Use:
//    const [data, loading] = useFetch(pastDataURL);



import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log('setData:', json);

    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);
  return [data, loading];
}

export { useFetch };
