// temporary file: cleanup.js
import mongoose from 'mongoose';
import { mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';

mongoose.connect(mongoDBURL).then(async () => {
  await Book.deleteMany({});  // remove all old data
  console.log('Cleaned up books');
  process.exit();
});
