const   express     =   require('express'),
        mongoose    =   require('mongoose'),
        bodyparser  =   require('body-parser'),
        app         =   express();
//       


app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));


//Database
mongoose.connect('mongodb://localhost/mongoaggregate');
mongoose.connection.on('open',()=>{
    console.log("Veritabanı bağlantısı başarılı!");
});
mongoose.connection.on('error',(err)=>{
    console.log("Veritabanı hatası. Hata ("+err+")");
});
//Router
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
//Use Route
app.use('/',indexRoutes);
app.use('/admin',adminRoutes);



app.listen(3000,()=>{
    console.log("Server Çalıştı!");
});