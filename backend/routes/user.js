const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/utils');
const protect = require('../middleware/authMiddleware');

router.post(
  '/user/register',
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    let userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error('User Already Exists');
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  })
);

router.post(
  '/user/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid Credentials');
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  })
);

router.get(
  '/user/profile',
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    res.json(user);
  })
);

router.put(
  '/user/profile',
  protect,
  asyncHandler(async (req, res) => {
    let user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }
      user.password = user.password;

      await user.save();

      res.json('Success');
    } else {
      throw new Error('User Not Found');
    }
  })
);

module.exports = router;
