import express from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../models/sessionModel.js';
import protect from '../middleware/authMiddleware.js';
import User from '../models/userModel.js';

const router = express.Router();

// @desc book new session
// @route POST /api/sessions
//@ access private

router.post(
  '/',
  protect,
  asyncHandler(async (req, res) => {
    const { title, image, duration, date } = req.body;
    const order = new Order({
      title,
      image,
      duration,
      date: date,
      user: req.user._id,
    });
    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
  })
);

// @desc get session by id
// @route GET /api/sessions/:id
//@ access private

router.get(
  '/:id',
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    const userId = user._id;
    const orders = await Order.find({ user: userId });
    if (orders) {
      res.json(orders);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  })
);

// @desc delete session by id
// @route GET /api/sessions/:id
//@ access private
router.delete(
  '/:id',
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      await Order.findOneAndDelete({ _id: req.params.id });
      res.json({ message: 'Session removed' });
    } else {
      res.status(404);
      throw new Error('Session not found');
    }
  })
);

export default router;
