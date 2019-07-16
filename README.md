<h1 align="center">Welcome to example-socket-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/martinjackson/example-socket-react#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/martinjackson/example-socket-react/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/martinjackson/example-socket-react/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/martin_jackso">
    <img alt="Twitter: martin_jackso" src="https://img.shields.io/twitter/follow/martin_jackso.svg?style=social" target="_blank" />
  </a>
</p>

> an Example of a React/Nodejs app with React Hooks and socket.io messages, getting Dark Skies API data

### 🏠 [Homepage](https://github.com/martinjackson/example-socket-react#readme)

## Install

```sh
cd socket-io-client; npm install; cd ../socket-io-server; npm install
```

## Usage

```sh
cd socket-io-client; npm start&cd ../socket-io-server; npm start&
```

## Run tests

```sh
npm run test
```

## Author

👤 **Martin A. Jackson**

* Twitter: [@martin_jackso](https://twitter.com/martin_jackso)
* Github: [@martinjackson](https://github.com/martinjackson)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/martinjackson/example-socket-react/issues).

## Show your support

Give a ⭐️ if this project helped you!

## Articles that lead to this example
[React Hooks: Managing Web Sockets with useEffect and useState by Ross Bulat](https://medium.com/@rossbulat/react-hooks-managing-web-sockets-with-useeffect-and-usestate-2dfc30eeceec)
[How to Fetch Data with React Hooks in a Minute by Connor Wilson](https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6)
[How to fetch data with React Hooks? by rwieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)

## Future notes
This example uses a 90 second timer on the NodeJS side to simulate the data flow if a [Webhook](https://en.wikipedia.org/wiki/Webhook) were is used.
For a real Webhook, This application would need a server that could receive an HTTP Post with data updates.
Not to hard to do if there is a NodeJS server behind the webpage.


## 📝 License

Copyright © 2019 [Martin A. Jackson](https://github.com/martinjackson).<br />
This project is [ISC](https://github.com/martinjackson/example-socket-react/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

```bash
npx readme-md-generator
```
