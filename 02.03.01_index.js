// Tạo Project và Ghi nhận thông tin liên quan
// npm init --y
// npm install --save express
// Mở thư viện fs, express
// const fs = require("fs");
const express = require("express");
var path = require('path');
// Tham số - Web lắng nghe tại xport
xport = process.env.PORT || 3000;
// Tạo App Web
const app = express();
const router = express.Router();
// Routing WEB
// MVC

//--- Home
router.get('/',
    (req, res) => {
        res.sendFile(__dirname + "/view/home.html");
    }
);

//--- Profile
router.get('/profile',
    (req, res) => {
        res.sendFile(__dirname + "/view/profile.html");
    }
);

//--- Login
router.get('/login',
    (req, res) => {
        res.sendFile(__dirname + "/view/login.html");
    }
);

//--- Logout
router.get('/logout',
    (req, res) => {
        res.sendFile(__dirname + "/view/logout.html");
    }
);

// START WEB
app.use("/", router);
app.listen(xport,
    (err) => {
        console.log("\n Tạo Web tại ", xport, " với ", err);
    }
);