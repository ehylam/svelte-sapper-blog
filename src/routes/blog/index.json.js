import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => fs.readdirSync("static/posts").map(fileName => {
	const post = fs.readFileSync(path.resolve("static/posts", fileName), "utf-8");
	// gets post and return it as an object data
	return grayMatter(post).data;
});

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	const posts = getAllPosts();
	res.end(JSON.stringify(posts));
}
