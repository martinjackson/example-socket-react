var fs = require('fs');

// load the data from previous runs
const loadData = fname => {
  if (fs.existsSync(fname)) {
    return JSON.parse( fs.readFileSync(fname) )
  }
  else
    return []
}

let weatherData = loadData('weatherData.json')
const addData = data => {
   weatherData.push(data);
   const content = JSON.stringify(weatherData)
   fs.writeFile('weatherData.json', content, error => { if (error) console.error(error)} );
}

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var cors = require('cors');

const axios = require("axios");
const port = process.env.PORT || 4001;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.get("/history", (req, res) => {
  res.send(weatherData).status(200);
});

const majSecretKey = '0186b17a48891f9b47ade63d70c8005c'
const tampa = '43.7695,11.2558'
const benton = '34.5645,-92.5868'    // 34.5645° N, 92.5868° W
const url = `https://api.darksky.net/forecast/${majSecretKey}/${benton}`

// < 1,000 calls per day, 86,400 sec/day, every 86.4 seconds === 1000 calls per day
const delay=90000; // 90000;    // milliSeconds


const formatT = (secs) => {
  const d = new Date(secs*1000)
  return d.toLocaleTimeString()
}

const getApiAndEmit = async socket => {
  try {
    // console.log('Request DarkSky');

    // Getting the data from DarkSky
    const res = await axios.get(url);

    const {time, icon, dewPoint, humidity, pressure, windSpeed, temperature, uvIndex, visibility, ozone}
      = res.data.currently

    const hms=formatT(time)
    const info = {time, hms, icon, dewPoint, humidity, pressure, windSpeed, temperature, uvIndex, visibility, ozone}
    addData(info);

    const MSG = "FromAPI"
    console.log('emit:', MSG, info.temperature, time, hms);
    socket.emit(MSG, info);

  } catch (error) {
    console.error(`Error: ${error.code}`);
    console.error(`Stack: ${error.stack}`);

  }
};

let interval=false;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  getApiAndEmit(socket) // initial call
  interval = setInterval(() => getApiAndEmit(socket), delay);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});
server.listen(port, () => console.log(`CORS-enabled web server listening on port ${port}`));
