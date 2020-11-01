import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

// NodeJS -> fs.readFileSync returns contents of the selected path.
const getProject = fileName => fs.readFileSync(path.resolve("static/projects", `${fileName}.md`), "utf-8");

export function get(req, res, next) {
	const { slug } = req.params;

	// get the markdown text
	const project = getProject(slug);

	// function that expose helpful callbacks
	// to manipulate the data before convert it into html
	const renderer = new marked.Renderer();


	// parse the md to get front matter
	// and the content without escaping characters
	const { data, content } = grayMatter(project);

	const html = marked(content, { renderer });

	if (html) {
		// NodeJS 'res.writeHead' sends a response to the header
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		// returns the content of the file
		res.end(JSON.stringify({ html, ...data }));

	} else {
		res.writeHead(404, {
			"Content-Type": "application/json"
		});

		res.end(
			JSON.stringify({
			message: `Not found`
			})
		);
	}
}