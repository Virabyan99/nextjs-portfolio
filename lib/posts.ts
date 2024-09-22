import path from "path";
import fs from 'fs'
import matter from "gray-matter"


const rootDirectory = path.join(process.cwd(), 'content', 'posts')
export async function getPostBySlug(slug: string) {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents =  fs.readFileSync(filePath, {encoding: 'utf8'})

    const  {data, content} = matter(fileContents)

    return {metadata: {...data, slug}, content}
}