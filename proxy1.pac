function FindProxyForURL(url, host) {
    // 检查 URL 是否为 Douyin 网站
    if (shExpMatch(url, "https://www.douyin.com/*")) {
        return "DIRECT"; // 直接访问
    }

    // 拒绝所有其他访问
    return "PROXY 127.0.0.1:9999"; // 指向不存在的代理地址
}
