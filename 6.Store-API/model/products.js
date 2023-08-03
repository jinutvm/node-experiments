const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required : [true,'product name must be provided'],
        maxLength : [20, 'Name cannot be greater than 20 chars']
    },
    featured: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: [true,' product price must be provided']
    },
    rating: {
        type: Number,
        default : 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        // To limit the possible values in company field
        // enum: ['ikea','liddy','caressa','macros']
        // For providing custom error 
        enum: {
            values : ['ikea','liddy','caressa','marcos'],
            message: `{VALUE} is not supported`
        }
    }
})

module.exports = mongoose.model('Product',ProductSchema)