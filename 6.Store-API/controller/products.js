const { query } = require('express')
const Product= require('../model/products')

// const getAllProductsStatic = (req,res) => {
//     res.status(200).send('Get all products')
// }

// const getAllProducts = (req,res) => {
//     res.status(200).send('Get products based on query parameter')
// }

// const createNewProduct = (req,res) => {
    //     res.status(201).send('New product created')
    // }
    
const getAllProducts = async (req,res) => {
    try {
        console.log(req.query)
        const {featured,name,company} = req.query
        const queryObject = {}
        if (featured){
            queryObject.featured = featured === 'true' ? true : false
        }
        // if (name) {
        //     queryObject.name = name
        // }
        if (name) {
            searchName = `/^${name}/`
            queryObject.name = `/^${name}/`
            console.log(searchName, typeof searchName)
        }
        if (company) {
            queryObject.company = company
        }

        console.log(queryObject)

        // const product = await Product.find({featured: featured,name:name})
        // const product = await Product.find({name: /^a/ })
        const product = await Product.find({name: {$regex: searchName }})
        // const product = await Product.find(queryObject)

        res.status(200).json({totalProducts: product.length, product})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected happened'})
    }


}
    
const getAllProductsStatic = async (req,res) => {
    try {
        // const product = await Product.find({})
        console.log(req.query)
        const product = await Product.find(req.query)
        res.status(200).json({totalProducts: product.length, product})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected happened'})
    }
}


// const getAllProductsStatic = async (req,res) => {
// try {
// const product = await Product.find({})
// res.status(200).json({totalProducts: product.length, product})
// } catch (error) {
// console.log(error)
// res.status(500).json({msg: 'Something unexpected happened'})
// }
// }

const createNewProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json({msg: `${req.body.length} got added`, product:{product}})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected happened'})
    }
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
    createNewProduct
}