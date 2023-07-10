import multer from 'multer'
import express from "express";
const app = express();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
let upload = multer({ storage: storage });
 
app.get('/', (req, res) => {
   /*  imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    }) */
});