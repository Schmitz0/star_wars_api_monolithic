const server = require('./src/server')
const axios = require("axios")

const PORT = 8001;


server.listen(PORT,()=>{
    console.log(`Characters service listening on port ${PORT}`);
})

