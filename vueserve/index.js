//npm init -y
//cnpm install express mysql --save-dev
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const session = require('express-session');
// 文件上传的相关配置
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().valueOf() + '-' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop())
	}
});
const upload = multer({ storage: storage });

const mydb = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "movietime"
});
mydb.connect();



const app = express();
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// 启用cookie
let secret = 'app.h5190304.com';
app.use(cookieParser(secret));
// 启用session
app.use(session({
	secret: secret,
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 7 * 24 * 3600000 }
}));

//获取热门商品
app.get("/gethotgoods", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});

//获取玩具商品
app.get("/gettoymodelgoods", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//获取数码商品
app.get("/getdigitalgoods", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//获取服装商品
app.get("/getclothesgoods", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//获取生活商品
app.get("/getlifegoods", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//根据关键字搜索商品
app.get("/searchgoods", function (req, res) {
	let sql = "select * from product where name like '%" + req.query.goodsname + "%' limit 0,10";
	console.log(sql);
	mydb.query(sql, function (err, results) {
		if (err) {
			console.log(err);
		}
		res.send(results);
	})
});
//点击input搜索按钮搜索包含关键字的全部商品
app.get("/searchinput", function (req, res) {
	let sql = "select * from product where name like '%" + req.query.goodsname + "%'";
	console.log(sql);
	mydb.query(sql, function (err, results) {
		if (err) {
			console.log(err);
		}
		res.send(results);
	})
});
//获取新闻
app.get("/getNews", function (req, res) {

	let sql = "select * from news where type =" + `'${req.query.news}'`;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});


//获取猜你喜欢的商品
app.get("/getgsulike", function (req, res) {
	let sql = "select * from product where type =" + `'${req.query.goodsclass}'` + "limit 0,15";

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//获取详情页的商品
app.get("/getdetail", function (req, res) {
	let sql = "select * from product where id =" + req.query.searchid;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
//获取购物车的商品数据
app.get("/serachgoods", function (req, res) {
	let sql = "select * from product where id =" + req.query.goodsid;

	mydb.query(sql, function (err, results) {
		res.send(results);
	})
});
// 注册

app.post("/Registe", function (req, res) {
	var sql = "select * from user where 1 ";
	if (req.body.name) {
		sql += " AND username= '" + req.body.name + "'";
	}
	mydb.query(sql, function (err, results) {
		if (results.length > 0) {
			res.json({
				msg: "username_already_exist"
			})
		} else {
			let newsql = `insert into user(username,password,birthday,email) values ("${req.body.name}","${req.body.pass}","${req.body.value1}","${req.body.email}")`;
			console.log(newsql)
			mydb.query(newsql, (err, results) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.json({
						msg: "reg_success"
					})
				}
			})
		}

	})
});

//订单接口
app.post("/consignee", function (req, res) {
	console.log(req.query)
	let sql = `insert into shopping(people,address,phone,beizhu) values ("${req.body.people}","${req.body.address}","${req.body.phone}","${req.body.beizhu}")`;

	mydb.query(sql, function (err, results) {
		if (err) {
			console.log(err);
			return;
		} else {
			res.json({
				msg: "ok"
			})
		}
	})
});

// 影院数据接口
app.get('/cinema', (req, res) => {
	let sql = `select * from cinema where type = ${req.query.type} `
	mydb.query(sql, function (err, results) {
		res.send(results);
	})
})
//正在上映数据接口
app.get('/movie', (req, res) => {
	let sql = `select * from movie where type = ${req.query.type} `
	mydb.query(sql, function (err, results) {
		res.send(results);
	})
})
// 即将上映电影接口
app.get('/film', (req, res) => {
	let sql = `select * from movie where type = ${req.query.type} `
	mydb.query(sql, function (err, results) {
		res.send(results);
	})
})
// 根据电影id获取电影
app.get('/filmId', (req, res) => {
	let sql = `select * from movie where id = ${req.query.id} `
	mydb.query(sql, function (err, results) {
		res.send(results);
	})
})

//登录
app.post("/Load", function (req, res) {
	var sql = "select * from user where ";
	console.log(req.body)
	sql += ` username="${req.body.name}" `;
	mydb.query(sql, function (err, results) {
		if (results.length == 0) {
			res.json({
				msg: "none"
			})
		} else if (results.length == 1) {
			console.log(results)
			if (results[0].password == req.body.pass) {
				// req.session.id = results[0].id;
				// req.session.name = results[0].username;
				res.json({
					msg: "same",
					userinfo: results[0],
					// myid:results[0].id
				})
				
			} else {
				res.json({
					msg: "different"
				})
			}
		}


	})
});
//提供session信息的路由
// app.get('/checku', (req, res) => {
//     console.log(req.session);
// 	res.json({ id: req.session.id, name: req.session.name });
// 	console.log(req.session.aid)
// });


app.listen(8888, function () {
	console.log("服务成功开启，监听端口8888……")
})