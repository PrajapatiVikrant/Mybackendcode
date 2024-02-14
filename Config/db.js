const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
//mongoose.connect('mongodb+srv://Education:education9580@cluster0.znwasga.mongodb.net/?retryWrites=true&w=majority');
