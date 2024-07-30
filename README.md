# npm-proxy-cli
可以方便的通过命令行开启/关闭 npm http/https 代理，不支持 socks5。
## 使用
安装
```sh
npm i -g npm-proxy-cli
```
设置代理地址
```shell
nrp registry [url]
# example: nrp registry http://127.0.0.1:7897
```
开启代理
```sh
nrp open
```
关闭代理
```sh
nrp close
```
开启代理后可以通过以下命令查看当前代理是否生效
```sh
# 查看当前 ip
curl myip.ipip.net
# or
curl cip.cc
```
