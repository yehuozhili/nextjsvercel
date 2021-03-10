/*
 * @Author: yehuozhili
 * @Date: 2021-02-06 14:54:57
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-03-10 15:42:25
 * @FilePath: \nextjsvercel\pages\api\hello.js
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 200;
	res.json({ name: "John Doe" });
};
