const Course = require('../controllers/modals/Course')


class SiteController{
   async home(req, res){
        try{
            const response = await Course.find({})
            console.log(response);
        }catch(er){
            console.log(er);
        }
        

            res.render('home')
   }

    //[GET] /new/:slug
    search(req, res){
        res.render('search')
    }
}


module.exports = new SiteController