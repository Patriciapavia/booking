import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import sessions from './data/sessions.js';
import User from './models/userModel.js';
import Session from './models/sessionModel.js';
import Order from './models/orderModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    // await User.deleteMany();

    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;
    const sampleProducts = sessions.map((product) => {
      return { ...product, user: adminUser };
    });
    await Session.insertMany(sampleProducts);
    console.log('Data Imported! ');
    process.exit();
  } catch (error) {
    console.error(`Error ${error}`);
    process.exit(1);
  }
};

// const destroytData = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();
//     console.log('Data Detroyed! ');
//     process.exit();
//   } catch (error) {
//     console.error(`Error ${error}`);
//     process.exit(1);
//   }
// };

if (process.argv[2] === '-d') {
  destroytData();
} else {
  importData();
}
