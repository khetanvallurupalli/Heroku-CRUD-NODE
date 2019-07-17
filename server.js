/**
 * 
 * @Server
 * 
 */

const app = require('./src/app')
    , env = require('./src/config/env')
    , PORT = env.SERVER_PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));