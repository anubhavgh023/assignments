const { Admin, Course } = require("../db");
const { Router } = require("express");
const { adminMiddleware, isAdminValid, isAdminCourseValid } = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', isAdminValid, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await Admin.create({
            username: username,
            password: password,
        });

        res.json({
            msg: "Admin created successfully.",
        })
    } catch (err) {
        res.json({
            msg: `${err.message}`,
        })
    }
});

router.post('/courses',isAdminCourseValid,adminMiddleware, async (req, res) => {
    //course data
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imgLink = req.body.imgLink;
    const published = req.body.published;

    try {
        await Course.create({
            title,
            description,
            price,
            imgLink,
            published,
        })

        res.json({
            msg: 'Course created successfully.'
        })

    } catch (err) {
        res.status(403).json({
            msg: `${err.message}`
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const response = await Course.find({});

        res.json({
            msg: response
        })

    } catch (err) {
        res.json({
            msg: `${err.message}`
        })
    }
});

module.exports = router;