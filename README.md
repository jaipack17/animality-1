<div align="center">  
<br />
  <p>
    <a href="https://www.npmjs.com/package/ruxe"><img style="margin-top: -4%" src="https://raw.githubusercontent.com/jaipack17/animality-1/main/assets/logo.png" width="546" alt="animality" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/animality"><img src="https://img.shields.io/npm/v/animality.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/animality"><img src="https://img.shields.io/npm/dt/animality.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

A simple API wrapper that generates images & facts of any animal

# Installation

Use the package manager [npm](https://www.npmjs.com/) to install `animality`.

```bash
$ npm i animality
```

# Require

```js
const animality = require('animality');
```

# Usage

### Animals: 
* `cat`
* `dog` 
* `bird` 
* `panda` 
* `redpanda` 
* `koala` 
* `fox` 
* `whale` 
* `kangaroo` 
* `bunny`
* `lion`
* `bear`
* `frog`
* `duck`
* `penguin`

## Get one or multiple animal images and facts

```js
const animality = require('animality');

// Singular animal.
const animal = 'cat';

animality.getAsync(animal).then(console.log);
/*
  Output:
  {
    name: 'cat',
    image: 'An image URL here',
    fact: 'A fact here'
  }
*/

// Multiple animals can also be used.
const animals = ['cat', 'dog', 'panda'];

animality.getAsync(animals).then(console.log);
/*
  Output:
  [
    {
      name: 'cat',
      image: 'An image URL here',
      fact: 'A fact here'
    },
    {
      name: 'dog',
      image: 'An image URL here',
      fact: 'A fact here'
    },
    {
      name: 'panda',
      image: 'An image URL here',
      fact: 'A fact here'
    }
  ]
*/

// A random animal type.
const animal = 'random';

animality.getAsync(animal).then(console.log);
/*
  Output:
  {
    name: 'redpanda',
    image: 'An image URL here',
    fact: 'A fact here'
  }
*/
```
