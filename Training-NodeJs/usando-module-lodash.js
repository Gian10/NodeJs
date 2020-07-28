// comum instanciar o modulo lodash usando _
const _ = require('lodash')

// setInterval(()=>{
//     console.log(_.random(1,50)), 2000
// })

const http = require('http')
http.createServer((request, response)=>{
    response.write("Gian Karlos")
    response.end()
}).listen(8080)


