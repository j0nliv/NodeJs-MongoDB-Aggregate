const   express =   require('express'),
        Blog    =   require('../models/Blog'),
        Category=   require('../models/Category'),
        router  =   express.Router();
//




router.get('/',(req,res)=>{
    Blog.find({},(err,data)=>{
        if(err)console.log(err);
        else{
            res.render("home",{data:data});
        }
    });
});

router.get('/:category',(req,res)=>{
    Blog.find({category:req.params.category},(err,data)=>{
        Blog.aggregate([
            {
                $match: {
                    category: req.params.category
                }
            },
            {
                $group: {
                    _id: "$category",
                    adet: {$sum:1}
                }
            }
        ],(err,result)=>{
            console.log(result);
            res.render("category",{data:data,result:result});
        });
    });
});

module.exports = router;