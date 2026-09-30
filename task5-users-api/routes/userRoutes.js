const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// GET all users
router.get("/", async (req, res) => {
    try {
        const filter = {};

        if (req.query.role) {
            filter.role = req.query.role;
        }

        if (req.query.age) {
            filter.age = Number(req.query.age);
        }

        const users = await User.find(filter);

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }

const users = await User.find();
res.status(200).json(users);
});

// GET user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }

});
// PUT update user by ID
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

//patch update user by ID
router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });              

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }   

});
// DELETE user by ID
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }       


        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }       
});
// POST create user
router.post("/", async (req, res) => {
const user = await User.create(req.body);
res.status(201).json(user);
});

module.exports = router;

