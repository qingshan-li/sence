# turbo-web-v5
前端第5版

[软件设计]](https://www.yuque.com/hyz-weber/qs0q9f/yzhzdt)
[功能列表]](https://www.yuque.com/hyz-weber/qs0q9f/wcxe9b#5vZN)
[组件列表]](https://www.yuque.com/hyz-weber/qs0q9f/nrbw5n#m2nA)
## 发展路线
* 2017 v1 http://123.57.3.79:3760/TURBO-UTOSS/turbo-utoss-web
* 2019 v2 http://123.57.3.79:3760/GeneralProduct/hyz-turbo-web
* 2020 v3 http://39.106.22.246:3000/bip-web/turbo-web-v3
* 2021 v5 http://39.106.22.246:3000/bip-web/turbo-web-v5

v5 主要技术栈：
整体架构：[vue3 + ts](https://vuejs.org/)
图表库：[G2/G2Plot](https://g2plot.antv.vision/zh/examples/gallery)
组件库：[AntDesignVue](https://2x.antdv.com/)
动画库：[animejs](https://animejs.com/)
样式库：[tailwind](https://tailwindcss.com/)
图标库： [iconpark](https://iconpark.oceanengine.com/)

## 项目安装

注意不要用`npm install`了。

```
yarn install
```

### 开发模式

```
yarn start
```

然后根据对话框，选择项目和产品。项目是单选，产品可以多选。

#### 组件开发
```
yarn add-actor
```
快速添加组件模板，标识用`s_`开头

### 编译模式

```
yarn build
```

若在测试环境，则执行如下命令，会自动部署升级
```
yarn build:rd
```

同样选择要编译的产品，会打包到指定项目的端口下去。
新建一个纯编译文件的项目`bip-web-dist`用于存放各打包静态文件。
文件目录用各现场的端口来命名，比如天德楼宇那么文件都放到 33100 目录下。

## 代码组织
采用monorepo架构，分成四大模块：
* `@projects`: 项目包，里面的子目录用项目标识命名。`default是默认公司产品线`，项目下面的子目录叫`产品`，比如`default/scene是公司产品线的场景引擎产品`，产品里面通过路由从其他模块来配置不同的功能点。
* `@modules`：模块包，比较独立的相关代码库，比如停车场、视频管理等。里面有个`shared`模块存放公共信息。
* `@components`：组件包，比较独立的业务组件，比如摄像头、编辑器等。
* `@themes`: 样式包，默认`light`主题，平时开发设计到颜色都尽量用变量来写，方便主题切换。
  
## 项目、产品和模块
* 模块(`module`)：独立的业务，或者大系统的一级菜单可视为模块，比如照明系统、停车场、组态等。
* 产品(`product`)：由一系列模块组成。有公共产品，比如建模、鉴权等；业务产品，比如IBMS、UTOSS等。通过路由来自由选模块，形成不同的产品。
* 项目(`project`)：由一系列产品组成。比如天德项目，包括了建模、鉴权、IBMS等。通过配置文件来自由选产品，形成不同项目。编译时只编指定产品代码。

## lerna

采用lerna来支持monorepo架构，平常开发时只需要掌握这几个命令即可
### 创建新的组件包

- lerna create @components/pkg1
- lerna create @modules/basicFile C:\Users\青山\Desktop\sence\packages\@modules 安装到指定路径下

注意：创建完后需要执行`yarn install`
### 给组件包添加依赖

- lerna add axios --scope=@tools/http 添加依赖包
- lerna add axios --scope=@tools/http --dev 添加开发模式依赖包

