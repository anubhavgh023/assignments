const { Admin } = require("../db");
const z = require("zod");

//Middleware for checking data received
const adminSchema = z.object({
    username: z.string().email({ message: "Invalid username." }),
    password: z.string().min(3, { message: "Invalid password" }),
})

function isAdminValid(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const response = adminSchema.safeParse({
        username: username,
        password: password,
    })

    if (!response.success) {
        res.status(403).json({
            msg: "Invalid username or password",
        })
    } else {
        next();
    }
}

//Middleware for checking course data
const courseSchema = z.object({
    title: z.string(),
    description: z.string().min(10),
    price: z.number(),
    imgLink: z.string().url(),
    published: z.boolean(),
})

function isAdminCourseValid(req, res, next) {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imgLink = req.body.imgLink;
    const published = req.body.published;

    const response = courseSchema.safeParse({
        title: title,
        description: description,
        price: price,
        imgLink: imgLink,
        published: published,
    })

    if (!response.success) {
        console.log(response.error);
        res.status(403).json({
            msg: "Invalid Course format",
        })
    } else {
        next();
    }
}


// Middleware for handling auth and if? admin is present or not
function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    //checking if admin is present.
    Admin.findOne(
        {
            username: username,
            password: password
        }
    ).then((admin) => {
        if (admin) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin not found."
            })
        }
    }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = {
    adminMiddleware,
    isAdminValid,
    isAdminCourseValid,
};