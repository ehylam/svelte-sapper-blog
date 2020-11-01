import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllProjects = () => fs.readdirSync("static/projects").map(fileName => {
	const project = fs.readFileSync(path.resolve("static/projects", fileName), "utf-8");
	// gets post and return it as an object data
	return grayMatter(project).data;
});

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	const projects = getAllProjects();
	res.end(JSON.stringify(projects));
}
