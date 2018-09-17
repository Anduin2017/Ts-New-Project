# 常用命令总结

## npm

```bash
$ npm init
```

将当前目录初始化为一个新的node项目工作区。

```bash
$ npm install
```

在项目目录中运行，恢复项目的依赖项。

```bash
$ npm install --global node-static
```

任意目录运行，全局安装一个npm组件。

```bash
$ npm install --save jquery
```

在项目目录中运行，在项目中安装一个浏览器依赖项。

```bash
$ npm install --save-dev gulp
```

在项目目录中运行，在项目中安装一个开发者依赖项。

```bash
$ npm install jquery
```

在项目目录中运行，在项目中安装一个依赖项，但不存储到`package.json`中。

```bash
$ npm start
```

运行`package.json`中注册的`start`脚本。

更多命令应当参考[官方文档](https://docs.npmjs.com/cli/npm)


## Angular CLI

```bash
$ ng new myapp
```

在当前目录中新建一个名为`myapp`的新`angular`项目。

```bash
$ ng serve --open
```

在angular项目目录中执行，启动当前项目。`--open`表示是否同时启动浏览器。

```bash
$ ng build --prod
```

在angular项目目录中执行，发布一个生产版本。`--prod`表示是否采用生产等级。

更多命令应当参考[官方文档](https://github.com/angular/angular-cli/wiki)

## TypeScript

```bash
$ tsc ./app.ts
```

编译当前目录下的app.ts

```bash
$ tsc --init
```

将当前目录初始化为一个新的TypeScript项目目录。

```bash
$ tsc
```

编译当前目录下的TypeScript项目。

更多命令应当参考[官方文档](https://www.typescriptlang.org/docs/home.html)

## Visual Studio Code

```bash
$ code .
```

使用VSCode打开当前目录并将其作为一个项目。

```bash
$ code ./app.js
```

使用VSCode打开当前路径下的app.js文件

更多命令应当参考[官方文档](https://code.visualstudio.com/docs/editor/command-line)