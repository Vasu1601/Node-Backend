const cors = require('cors')

const configureCors = ()=> {
    return cors({
        origin: (origin, callback)=> {
            const allowedOrigins = [
                'http://localhost/3000', //local development
                'https:aptiedge.com' //allowed ones
            ]

            if(!origin || allowedOrigins.indexOf(origin) !== -1){
                callback(null, true) //giving permission so that request can be allowed 
            }else{
                callback(new Error("No response from the server"))
            }
        },

        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept-Version'
        ],
        exposedHeaders: []
    })
}