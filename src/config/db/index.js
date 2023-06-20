const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://baolgx:Xuanbao%4095@cluster0.3nbutv2.mongodb.net/');
    }catch(er){
        console.log('connect fail')
    }
    

}

module.exports = { connect }