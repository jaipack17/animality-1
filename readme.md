# animality

Easy to use random animal api. Get facts and images of numerous animals!

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install `animality`

```bash
$ npm i animality
```

# Require

```javascript
const animality = require("animality");
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

## Get information of a specific animal

```javascript
const animality = require("animality");

const animals = ["cat", "dog", "bird", "panda", "redpanda", "koala", "fox", "whale", "kangaroo", "bunny"]; //all available animals

const animal = "cat"; //replace cat with any animal you want from the array "animals"

animality.getAsync(animal).then(data => {
  console.log(data); //returns an object
})
```
## Output:
```json
{
  "image": "random cat image link",
  "fact": "random cat fact"
}
```

## Get information of a random Animal

```javascript
const animality = require("animality");

const animal = "random";

animality.getAsync(animal).then(data => {
  console.log(data); //returns an object
})
```
## Output:

```json
{
  "name": "animal name",
  "image": "random animal image link",
  "fact": "random animal fact"
}
```
## Get information of multiple animals at once

```javascript
const animality = require("animality");

const animals = ["cat", "dog", "kangaroo"];

animality.getAsync(animals).then(data => {
  console.log(data); //returns an array of objects
})
```
## Output:

```json
[
  {
    "name": "cat",
    "image": "random cat image link",
    "fact": "random cat fact"
  },
  {
    "name": "dog",
    "image": "random dog image link",
    "fact": "random dog fact"
  },
  {
    "name": "kangaroo",
    "image": "random kangaroo image link",
    "fact": "random kangaroo fact"
  }
]
```
