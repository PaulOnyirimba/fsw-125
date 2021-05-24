const express = require('express');
const inventoryItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let inventoryItems = [
    {name: "banana", type: "food", price: 200},
    {name: "pants", type: "clothing", price: 2500},
    {name: "basket ball", type: "toy", price: 1000},
    {name: "shirt", type: "clothing", price: 800}
];

inventoryItemsRouter
.get('/', (req, res, next) => {
    res.status(200)
    res.send(books)

})

.get('/:inventoryItemsId', (req, res, next) => {
    const inventoryItemsId = req.params.inventoryItemsId;
    const singularinventoryItems = inventoryItems.find(inventoryItems => inventoryItems._id === inventoryItemsId);

    if (!singularinventoryItems) {
        const error = new Error('This item was not found');
        return next(error)
    }
    res.send(singularinventoryItems);
})

.get('search/type', (req, res) => {
    const inventoryItemsType = req.query.type;
    const filteredinventoryItems = inventoryItems.filter(inventoryItems => inventoryItems.type === inventoryItemsType);
    res.staus(200).send(filteredinventoryItems)
})

.post('/', (req, res) => {
    const newinventoryItems = req.body;
    newinventoryItems._id = uuidv4();
    books.push(newinventoryItem)
})