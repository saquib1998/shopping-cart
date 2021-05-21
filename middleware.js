const Product = require("./models/product");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You Need To Login First");
        return res.redirect("/login");
    }
    next();
};

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product.author.equals(req.user._id)) {
        req.flash("error", "You do not have permisison to do that");
        return res.redirect(`/products/${id}`);
    }
    next();
};
