### Git同步本地项目文件到
1. github上创建仓库，并复制一个提交代码的地址
2. git init 
3. git add .
4. git commit -m "提交说明"
5. git remote add origin http://....
6. git push -u origin master

### 本地仓库上传到线上仓库

在线创建一个github仓库、写入仓库名称，项目描述，点击创建

创建一个本地文件夹，命名与线上仓库同名，用git命令窗口进入

第一步： 输入`git init`初始化文件夹变成git仓库，产生.git文件夹

第二步：将本地仓库与线上仓库相连
```
git remote add origin 输入你的git仓库地址复制代码
```
第三步：在你准备上传你的项目之前，最好更新一下项目，确保没有和远程仓库的代码有冲突
```
git pull --rebase origin master
```
第四步：把要上传的文件移入本地仓库中上传
```
git add . 添加目录下所有发生改变的文件
git commit -m '注释信息'或者 git commit -v 是显示有哪些更改的
git push -u origin master 本地仓库代码提交至远程仓库
```
现在我们的本地仓库已经与线上仓库同步了



### 解决输入两次密码

### git base here 基本使用
1. cd：改变目录
2. pwd：显示当前所在的目录路径
3. ls（ll）：都是列出当前目录中的所有文件，只不过ll（两个ll）列出的内容更为详细
4. touch：新建一个文件
5. rm：删除一个文件
6. mkdir：新建一个目录
7. rm -r：删除一个文件夹
8. mv：移动文件, mv index.html src index.html 是我们要移动的文件, src 是目标文件夹,这样写,必须保证文件和目标文件夹在同一目录下
9. reset：重新初始化终端/清屏
10. clear：清屏
11. history：查看命令历史
12. help：帮助
13. exit：退出
14. `>>、>`：`>>` 追加内容， `>` 覆盖原有的内容
15. cat：显示文件内容

## Git 配置
1. 查看git环境详细配置 `git config -l`
```
#查看系统config
git config --system --list
　　
#查看当前用户（global）配置
git config --global  --list
 
#查看当前仓库配置信息
git config --local  --list
```
2. 设置用户名与邮箱（用户标识，必要）
```
$ git config --global user.name "zhangguo"  #名称
$ git config --global user.email zhangguo@qq.com   #邮箱
```

## Git使用
### 1. 建立全新仓库
```
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]
```

### 2. 克隆远程仓库
```
# 克隆一个项目和它的整个代码历史(版本信息)
$ git clone [url]
```

### 3. 查看文件状态
```
#查看指定文件状态
git status [filename]

#查看所有文件状态
git status
```

### 4. 添加文件与目录
```
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .
```

### 5. 移除文件与目录（撤销add）
```
#直接从暂存区删除文件，工作区则不做出改变
git rm --cached <file>
```

### 6. 提交
```
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区，跳过了add,对新文件无效
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```



