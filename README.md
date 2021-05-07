# animality

Easy to use random animal api. Get facts and images of numerous animals!

## Installation

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
