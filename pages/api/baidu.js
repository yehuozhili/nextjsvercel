/*
 * @Author: yehuozhili
 * @Date: 2021-02-06 15:01:20
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-02-06 15:01:22
 * @FilePath: \nextjsvercel\pages\api\baidu.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

// restream parsed body before proxying
var restream = function (proxyRes, req, res, options) {
	proxyRes.headers["Access-Control-Allow-Origin"] = "*";
	proxyRes.headers["Access-Control-Allow-Headers"] = "*";
	proxyRes.headers["Access-Control-Allow-Methods"] =
		"GET, POST, PUT, OPTIONS";
};

const apiProxy = createProxyMiddleware({
	target: "https://kaifa.baidu.com/",
	changeOrigin: true,
	pathRewrite: { "^/api/baidu": "/rest/v1/search" },
	secure: false,
	onProxyRes: restream,
});

module.exports = function (req, res) {
	apiProxy(req, res, (result) => {
		console.log("result:", result);
		if (result instanceof Error) {
			throw result;
		}
		throw new Error(
			`Request '${req.url}' is not proxied! We should never reach here!`
		);
	});
};
