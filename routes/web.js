const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/cartController');
const homeController = require('../app/http/controllers/homeController');
const menuController = require('../app/http/controllers/menuController');

function initRoutes(app) {
    homeController().index
    app.get('/', homeController().index)
    app.get('/login', authController().login)
    app.get('/menu', menuController().index)
    app.get('/cart', cartController().index)
    app.post('/update-cart',cartController().update)
    
    app.get('/about', (req,res)=>{
        res.render("about");
    });
    
    app.get('/contact', (req,res)=>{
        res.render("contact");
    });
    
    app.get('/waffle', (req,res)=>{
        res.render("waffle");
    });
    
    app.get('/pancakes', (req,res)=>{
        res.render("pancakes");
    });
    
    app.get('/burger', (req,res)=>{
        res.render("burger");
    });
    
    app.get('/cookies', (req,res)=>{
        res.render("cookies");
    });
    
}

module.exports = initRoutes