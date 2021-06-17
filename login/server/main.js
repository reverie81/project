const Koa = require('koa')
const koaBody = require('koa-body') // ctx 获取数据
const cors = require('koa2-cors') // 解决跨域
const route = require('koa-route') // 路由
const user = require("./user.js") // 模块
const app = new Koa()
app.use(koaBody())
app.use(cors())
// 注册
app.use(route.post('/reg',async ctx=>{
    // console.log(ctx.request.body) // 输出接收的信息
    let username=ctx.request.body.username // 获取用户名
    let password=ctx.request.body.password // 获取密码
    let newuser = new user({
        username:username,
        password:password,
    })
    // 查找用户名
	let findname=await user.findOne({username:username})
	// 验证用户名  
	if(findname){
		//用户名重复
		ctx.response.body={errCode:1,errMsg:"用户名重复"}
	}else{
		newuser.save()//执行保存
		ctx.response.body={errCode:0,errMsg:"注册成功"}
	}
}))
// 登录
app.use(route.post('/login',async ctx=>{
	// console.log(ctx.request.body) // 输出接收的信息
    let username=ctx.request.body.username;
	let password=ctx.request.body.password;
    let finduser=await user.findOne({
		username:username,//前面的是模型   后面的是变量
		password:password
	})
	//表示登录成功  如果查找不到  用户名或者密码错误
    if(finduser){
        ctx.response.body={
			errCode:0,
			errMsg:"登录成功"
		}
	}else{
		//数据不存在  用户名或者密码错误
		ctx.response.body={
			errCode:1,
			errMsg:"用户名或者密码错误"
		}
	}
}))
app.listen(3000)