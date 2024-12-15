function FindProxyForURL(url, host) {
    return "PROXY 127.0.0.1:9999";  // 将所有流量指向一个无效的本地代理，阻止所有连接
}
