const   mongoose    =   require('mongoose'),
        Schema      =   mongoose.Schema;
        

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20,'{PATH} alanı `{VALUE}`, {MAXLENGTH } karakterden küçük olmalıdır.'],
        minlength: [2,'{PATH} alanı `{VALUE}`, {MINLENGTH } karakterden büyük olmalıdır.']
    }
});

module.exports = mongoose.model('category',CategorySchema);