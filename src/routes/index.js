const newsRouter = require ('./new')
const homeRoute = require('./site')

function route(app){

    app.use('/news',newsRouter)

    app.use('/',homeRoute)
    
    app.get('/testpage', (req, res) => {
        res.render('testpage');
    })
    
   
}

module.exports =  route;