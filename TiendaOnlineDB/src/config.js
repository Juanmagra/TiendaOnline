import bodyParser from 'body-parser'
import logger from 'morgan'
import {config} from 'dotenv'
const SETTINGS = config()
console.log(SETTINGS)

export default app =>{
    app.disable('x-powered-by');
    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.env = app.get('env')
    app.locals.config = app.get('config')

    console.log(app.locals.config);
    if(SETTINGS.parsed.ENV !== 'test'){
        app.use(logger('combined'))                  
    }
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
 
}
