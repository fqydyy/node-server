module.exports = app => {
  const mongoose = app.mongoose;
  const AuthSchema = new mongoose.Schema({
    uid: { type: Number, unique: true  },
    name: { type: String, required: true  },
    pwd: { type: String, required: true  }
  });
  return mongoose.model('Auth', AuthSchema, 'auth');
}