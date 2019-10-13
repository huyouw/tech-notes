---
key1: hello
key2: world
---

### 代码测试
```javascript
// 创建请求
function getJsonp(url, callback) {
    const tag = document.createElement('script');
    tag.setAttribute('src', `${url}?callback=${callback}`);
    document.querySelector('head').appendChild(tag);
}
```
