const Menu = require('../../models/menu');
function menuController(){
    return {
        async index(req,res) {
            const food = await Menu.find()
            return res.render("menu",{food:food})
            /*Menu.find().then(function(food){
                console.log(food);
                return res.render("menu",{food:food})
            })*/
        }
    }
}

module.exports = menuController