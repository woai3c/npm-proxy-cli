# npm-proxy-cli
可以方便的通过命令行开启/关闭 npm http/https 代理，不支持 socks5。
## 使用
安装
```shell
npm i -g npm-proxy-cli
```
设置代理地址
```shell
nrp registry [url]
# nrp registry http://127.0.0.1:58591
```
开启代理
```shell
nrp open
```
关闭代理
```shell
nrp close
```