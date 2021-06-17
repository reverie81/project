$(function(){
	// 验证用户名密码
	$(".btn").click(function(){
		var username = $(".username").val()
		var password = $(".password").val()
		$.ajax({
			url:"http://127.0.0.1:3000/login",
			type:"post",
			data:{
				username:username,
				password:password
			},
			success:function(res){
				console.log(res)
			}
		})
			
		
	})
})