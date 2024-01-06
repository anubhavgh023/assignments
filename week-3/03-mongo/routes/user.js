const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        await User.create({
            username: username,
            password: password,
        });

        res.json({
            msg: "User created successfully."
        })

    } catch (err) {
        res.json({
            msg: `${err.message}`
        })
    }
});

router.get('/courses', async (req, res) => {
    try {
        const response = await Course.find();
        res.json({
            msg: response
        })
    } catch (err) {
        res.json({
            msg: `${err.message}`
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const courseId = req.params.courseId;
    try {
        await User.updateOne(
            {
                username: username,
                password: password,
            },
            { $push: { purchasedCourses: courseId } }
        )
        res.json({
            msg: `Purchased course successfully.`
        })
    } catch (err) {
        res.json({
            msg: `${err.message}`
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    try {
        const response = await User.findOne({ username: username, password: password }).populate('purchasedCourses', 'title');
        res.json({
            msg: response
        })
    } catch (err) {
        console.error(err);
    }
});

module.exports = router