const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const verifyToken = require('../middleware/auth')
//create a post
router.post("/", verifyToken, async (req, res) => {
    const { title, desc, url, img } = req.body;

//update a post

    try {
        const newPost = new Post({
            title,
            desc,
            url: url.startsWith('https://') ? url : `https://${url}`,
            img,
            user: req.userId
        })
        await newPost.save();
        res.status(200).json({ message: 'Post success!', post: newPost });
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});

//get a post
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user', ['username']);
        res.status(200).json({ success: true, posts });
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});

//update a post
router.put("/:id", verifyToken, async (req, res) => {
    const { title, desc, url, img } = req.body;

    //Simple valadation
    if (!title)
        return res.status(400).json('Title is required');
    try {
        let updatedPost = {
            title,
            desc: desc || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            img,
        }
        const postUpdateCondition = { _id: req.params.id, user: req.userId }

        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })

        //user not authorised to update post
        if (!updatedPost)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        res.json({
            success: true,
            message: 'Update success!', post: updatedPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});

//delete a post
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const postDeleteCondition = { _id: req.params.id, user: req.userId }
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

        //user not authorised to update post
        if (!deletedPost)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        res.json({
            success: true,
            message: 'Delete success!', post: deletedPost
        })

    } catch (error) {
        console.log(error)
        res.status(500).json('Internal server error');
    }
});
module.exports = router
