import { createServer} from 'http'

const PORT = 3000
async function handler( request, response){
    return response.end('hey')
}

createServer(handler).listen(PORT, () => console.log(`Products API is running at ${PORT}`))