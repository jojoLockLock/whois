# whois-js

[![Greenkeeper badge](https://badges.greenkeeper.io/jojoLockLock/whois.svg)](https://greenkeeper.io/)
whois api ,support emoji input
## Install 

```
npm install --save @jojolocklock/whois-js
```

## How to use

```javascript
const whois = require("@jojolocklock/whois-js")

whois("🌶️🐔.ws").then(res => {
  console.info(res)
}).catch(err => {
  console.error(err)
})

```
