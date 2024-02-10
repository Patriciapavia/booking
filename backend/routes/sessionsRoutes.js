import express from 'express';
import asyncHandler from 'express-async-handler';
import Sessions from '../models/sessionsModel.js';
const router = express.Router();

// @desc Fetch all sessions

// @route GET /api/sessions

//@ access public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const sessions = await Sessions.find({});
    res.json(sessions);
  })
);

export default router;
