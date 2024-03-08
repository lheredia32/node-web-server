// const { envs } = require('./config/env') --- Manera antigua de importar
import { envs } from './config/env.js'

// const { startServer } = require('./server/server')
import { startServer } from './server/server.js'


const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}

(async() => {
  main()
})()

