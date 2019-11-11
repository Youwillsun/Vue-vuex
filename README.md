# vue-vuex

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 逻辑解读：
vuex仓储在main.js里进行了定义【后期会抽出去】

在App.vue里，拿到了仓储中定义的数据，通过getter函数进行了处理，然后对二者进行了展示

在HellowWorld .vue里，拿到仓储中定义的方法，并进行了调用

---

vuex 的仓储代码抽里出去之后，放到了store.js里，并在这个js里重新引用了vue和vuex，并暴露了store对象

对store进行了分类，分别放置到了app.js中和user.js中，并在store.js里进行了引用
