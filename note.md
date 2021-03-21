1. react-router-dom

import {Link,HashRouter,Route} from 'react-router-dom';
HashRouter和BrowserRouter
```<Link to='/home'></Link>

<BrowserRouter>
  <Route path='/about'/>
</RowserRouter>

import React from 'react';
```
- 对比

一般组件: `<Home/>`

路由组件：`<Route path="/home" component={Home} />`
