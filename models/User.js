const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, uniq: true },
  password: { type: String, required: true },
  linls: [{ type: Types.ObjectId, ref: 'Link' }]
});

module.exports = model('User', schema);
