const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
   res.status(200).json({
       message:'Handaling GET Req route /products'
   });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handaling POST Req route /products'
    });
 });

 router.get('/:productId',(req,res,next)=>{
     const id = req.params.productId;
     if(id === 'special'){
         res.status(200).json({
             message:'You Discoverd a special id'
         });
     }else{
        res.status(200).json({
            message:'You Passed an id'
        });
     }
 });

router.patch('/:productId',(req,res,next)=>{
        res.status(200).json({
            message:'Product Updated'
        });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Product Deleted'
    });
});



module.exports = router;