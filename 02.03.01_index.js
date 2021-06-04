// Tạo Project và Ghi nhận thông tin liên quan
// npm init --y
// npm install --save express
// Mở thư viện fs, express
// const fs = require("fs");
const express = require("express");
// Tham số - Web lắng nghe tại xport
xport = process.env.PORT || 3000;
// Tạo App Web
const app = express();
const router = express.Router();
// Routing WEB

//--- Home
router.get('/home',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Home !");
    }
);

//--- Profile
router.get('/profile',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Profile !");
    }
);

//--- Login
router.get('/login',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Login !");
    }
);

//--- Logout
router.get('/logout',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Logout !");
    }
);

// START WEB
app.use("/", router);
app.listen(xport,
    (err) => {
        console.log("\n Tạo Web tại ", xport, " với ", err);
    }
);