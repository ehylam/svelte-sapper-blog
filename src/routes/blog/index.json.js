import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => fs.readdirSync("static/posts").map(fileName => {
	console.log(fileName);
	const post = fs.readFileSync(path.resolve("static/posts", fileName), "utf-8");
	return grayMatter(post).data;
});

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	const posts = getAllPosts();
	res.end(JSON.stringify(posts));
}
