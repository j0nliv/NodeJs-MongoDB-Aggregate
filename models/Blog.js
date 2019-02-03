const   mongoose    =   require('mongoose'),
        Schema      =   mongoose.Schema;
// 

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [2,'{PATH} alanı `{VALUE}`, {MINLENGTH } karakterden büyük olmalıdır.']
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    creation_time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('blog',BlogSchema);