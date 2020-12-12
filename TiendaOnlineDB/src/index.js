import express from 'express';
import config from './config.js';
import router from './router.js';


let _server

const server = {
    start() {
        const app = express()
        config(app)
        router(app)
        _server = app.listen('9000', () => {
            const address = _server.address()
            const host = address.address==='::'
            ?'localhost'
            :address
            const port = app.locals.config.PORT
            
            if (process.env.NODE_ENV !== 'test') {
                console.log('Servidor abierto en http://${host}:${port}')
            }
        })
        return _server
    }, close() {
        _server.close()

    }

}

export default server

server.start()



