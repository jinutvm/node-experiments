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
        const {featured,name,company, sort:sortReq, fields, numericFilter } = req.query
        const queryObject = {}
        if (featured){
            queryObject.featured = featured === 'true' ? true : false
        }
        if (name) {
            //   queryObject.name = name
            searchName = '^' + name
            queryObject.name = {$regex : searchName, $options: 'i'}
        }
        if (company) {
            searchName = '^' + company
            // queryObject.company = company
            queryObject.company = {$regex : searchName, $options: 'i'}
        }
        // Query object for numeric fields

        if (numericFilter){
            // input - rating>=4.51,price>100
            // Output - {price:{'$gt':100},rating:{'$gte': 4.51}}

            const operatorMap = {
                '>'  : '$gt',
                '>=' : '$gte',
                '<'  : '$lt',
                '<=' : '$lte',
                '='  : '$eq'
            }            

            const reqularExpression = /\b(<|>|>=|=|<|<=)\b/g;

            let filter = numericFilter.replace(reqularExpression,(match)=>`-${operatorMap[match]}-`)
            console.log(filter)

            const options = ['price','rating']

            filter = filter.split(',').forEach(element=>{
                const [field,operator,value] = element.split('-')
                if (options.includes(field)){
                    queryObject[field] = {[operator]:Number(value)}
                }
            })


            console.log(queryObject)
            // Output - {price:{'$gt':100},rating:{'$gte': 4.51}}



        }



        let result = Product.find(queryObject)
        if (sortReq){
            const sortList = sortReq.split(',').join(' ')
            result = result.sort(sortList)
        } else {
            result = result.sort('createdAt')
        }

        if (fields){
            const fieldList = fields.split(',').join(' ')
            result = result.select(fieldList)
        }
        
        //pagination 
        const page = req.query.page || 1
        const limit = req.query.limit || 100
        const skip = (page-1) * limit 

        result = result.skip(skip).limit(limit)

        try {
            // const product = await Product.find(queryObject)
            const product = await result
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
        let product = await Product.find({price:{'$gt':100},rating:{'$gte': 4.51}}).select('name price rating')
        // product.sort(req.query.name)
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