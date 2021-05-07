const fetch = require("node-fetch")

let animals = ["cat", "dog", "bird", "panda", "redpanda", "koala", "fox", "whale", "kangaroo", "bunny"]

module.exports = {
  getAsync : async function(type){
    if(!type) throw new TypeError("No arguments provided!")
    if(typeof type != "string" && typeof type != "object") throw new TypeError("Invalid type of arguments! Arguments must be a string or an array!")
    let img = `https://random-api.nitcord.repl.co/api/img/${type}`
    let fact = `https://random-api.nitcord.repl.co/api/facts/${type}`
    if(typeof type == "object"){
      let data = []
      let filteredType = type.filter(function(item, pos){
        return type.indexOf(item) == pos;
      })
      for(var i = 0; i < filteredType.length; i++){
        if(animals.includes(filteredType[i].toLowerCase())){
          img = `https://random-api.nitcord.repl.co/api/img/${filteredType[i]}`
          fact = `https://random-api.nitcord.repl.co/api/facts/${filteredType[i]}`
          const imgData = await fetch(img).then(lang => lang.json())
          const factData = await fetch(fact).then(lang => lang.json())
          let object = {}
          object["name"] = filteredType[i].toLowerCase()
          object["image"] = imgData.link
          object["fact"] = factData.fact
          data[i] = object
        } else{
          throw new TypeError("Invalid argument! Invalid Animal Name Found in the object!")
        }
      }
      return data
    }
    if(type.toLowerCase() == "random"){
      let random = animals[Math.floor(Math.random() * animals.length)]
      img = `https://random-api.nitcord.repl.co/api/img/${random}`
      fact = `https://random-api.nitcord.repl.co/api/facts/${random}`
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())

      const data = {}
      data["name"] = random
      data["image"] = imgData.link
      data["fact"] = factData.fact

      return data;
    }
    if(animals.includes(type.toLowerCase())){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())

      const data = {}
      data["name"] = type.toLowerCase()
      data["image"] = imgData.link
      data["fact"] = factData.fact

      return data;
    } else{
      throw new TypeError("Invalid Arguments found! Please enter a valid animal as the type!")
    }
  }
}
