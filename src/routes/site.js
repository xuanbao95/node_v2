const express = require('express')
const router = express.Router()
const siteControllerr = require('../app/controllers/SiteController')


//
router.use('/search',siteControllerr.search)
router.use('/',siteControllerr.home)


module.exports = router