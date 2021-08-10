const Product = require("../models/product");
const User = require("../models/user");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const userId = req.user.id;
  req.user
    .createProduct({
      title,
      description,
      price,
      imageUrl,
    })
    .then((re) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then((product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  Product.update(
    {
      title: req.body.title,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
    },
    {
      where: {
        id: req.body.productId,
      },
    }
  )
    .then(() => res.redirect("/admin/products"))
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  Product.destroy({
    where: {
      id: req.body.productId,
    },
  }).then(() => {
    res.redirect("/admin/products");
  });
};

exports.getAddUser = (req, res) => {
  res.render("admin/users", {
    pageTitle: "Add user",
    path: "/admin/add-user",
  });
};

exports.postAddUser = (req, res) => {
  User.create({
    userName: req.body.userName,
  })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });
};
