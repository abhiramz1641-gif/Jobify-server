// 1 import json-server
const jsonServer=require('json-server')

// 5 import cors
const cors=require('cors')

// 2 create a server using json-server
const server=jsonServer.create()

// 3 setup a middleware
const middleware=jsonServer.defaults()

// 4 setup router
const router=jsonServer.router('db.json')

// 6 implement use
server.use(cors())
server.use(middleware)
server.use(router)

// 7 create a port
const PORT = process.env.PORT || 3000

// 8 starting a server
server.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
    
})