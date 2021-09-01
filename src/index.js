import app from './app'

//import '.database/connections'

app.listen(app.get('port'))

console.log('server on port', app.get('port'))