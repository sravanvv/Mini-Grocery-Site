const express = require('express');
const cors = require('cors'); // Install cors library (npm install cors)
const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables if using .env


const app = express();
//const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Mongoose schema for product data
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your React app's origin
}));

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    productId: { type: String, required: true ,unique: true },
    productName: { type: String, required: true },
    mrp: { type: Number, required: true },
    description: { type: String }
}, {
    _id: false // Disable default _id field
});
 productSchema.virtual('id').get(function() {
     return this.productId;
});
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB database
mongoose.connect('mongodb+srv://vvsravan0331:ZURgq23953CO35bm@cluster0.zj6ds88.mongodb.net/', {
   
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Parse incoming JSON data (middleware)
app.use(express.json());

// GET request to retrieve all products
app.get('/admin/products', async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

  app.get('/admin/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await Product.findOne({ productId });
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ message: 'Error fetching product details' });
    }
  });
  

// POST request to create a new product
app.post('/admin/podt/products', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Data created successfully!' }); // Created (201) status
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(400).json({ message: 'Error creating product' }); // Bad Request (400) for invalid data
    }
});

// PUT request to update a product (replace entire product)
app.put('/admin/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
    // Validate productId (optional)
    if (typeof productId !== 'string') {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
        const updatedProduct = await Product.findOneAndUpdate({ productId }, req.body, { new: true, runValidators: true }); // Return updated document
        if (updatedProduct) {
            res.json(updatedProduct);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
          }
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ message: 'Error updating product' });
    }
});

app.delete('/admin/products/:productId', async (req, res) => {
    const { productId } = req.params;
  
    try {
      const deletedProduct = await Product.findOneAndDelete({ productId });
  
      if (deletedProduct) {
        res.json({ message: 'Product deleted successfully', deletedProduct });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  });
  
app.listen(3000, () => console.log('Server listening on port 3000'));
