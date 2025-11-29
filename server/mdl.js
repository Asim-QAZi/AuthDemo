const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String},
    username:{type:String,
        required:true
    },
    role:{type:String},
    password:{type:String}
})


module.exports=mongoose.model("backdb1",userSchema);