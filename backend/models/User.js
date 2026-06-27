const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Password save karne se pehle hash karne ke liye (Updated for Mongoose v6+)
userSchema.pre('save', async function() {
    // next() hata diya hai kyunki async function mein next ki zaroorat nahi hoti
    if (!this.isModified('password')) return;
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);