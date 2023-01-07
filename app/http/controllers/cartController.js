const { update } = require("../../models/menu")

function cartController() {
    return {
        index(req, res) {
            res.render("cart")
        },
        update(req, res) {
            /*let cart = {
                items:{
                    fodId: {item: foodObject, qty:0}
                },
                totalQty:0,
                totalPrice:0
            }*/
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
                let cart = req.session.cart
            }
            return res.json({ data: "allok" })
        }
    }
}

module.exports = cartController