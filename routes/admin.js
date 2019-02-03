const   express     =   require('express'),
        Blog        =   require('../models/Blog'),
        Category    =   require('../models/Category'), 
        router      =   express.Router();
//


router.get('/ekle',(req,res)=>{
    res.render("add");
});

router.post('/ekle',(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const author = req.body.author;

    const blog = new Blog({
        title: title,
        content: content,
        category: category,
        author: author
    });

    const addCategory = new Category({
        name: category
    });

    Category.remove({name:category},(err)=>{
        if(err)console.log(err);
    });
    addCategory.save((err)=>{
        if(err)console.log(err);
    });
    
    blog.save((err)=>{
        if(err)console.log(err);
    });

    res.redirect("/admin/liste");
});

router.get('/guncelle/:id',(req,res)=>{
    Blog.findById(req.params.id,(err,data)=>{
        if(err)console.log(err);
        else{
            res.render("update",{data:data});
        }
    });
});

router.post('/guncelle/:id',(req,res)=>{
    Blog.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            content: req.body.title,
            category: req.body.category,
            author: req.body.category
        },(err)=>{
        if(err)console.log(err);
        else res.redirect('/admin/liste');
    });
});


router.get('/liste',(req,res)=>{
    Blog.find({},(err,data)=>{
        if(err)console.log(err);
        else{
            res.render("list",{data:data});
        }
    });
});

router.get('/sil/:id',(req,res)=>{
    Blog.findById(req.params.id,(err,blog)=>{
        if(err)console.log(err);
        else{
            blog.remove(()=>{
                res.redirect("/admin/liste");
            });
        }
    });
});

module.exports = router;