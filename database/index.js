const server = require("./src/server")

const {Character,Film} = require("./src/database")


// Metodos
// Film.list().then((res)=>console.log(res))
// Character.get(1).then((res)=>console.log(res))
// Character.list().then((res)=>console.log(res))
// Character.insertMany({
//     _id:"300",
//     name:"gaston Schmitz",
//     birth_year:"1987"
// }).then((res)=>console.log(res))

server.listen(8004,()=>{
    console.log("Database service on PORT 8004");
})