const getProducts = (req, res) => {
    res.json([
        {
            id: 1,
            name: "Samsung Galaxy S25",
            category: "Mobile",
            price: 79999
        },
        {
            id: 2,
            name: "Dell Inspiron",
            category: "Laptop",
            price: 64999
        }
    ]);
};

module.exports = { getProducts };
