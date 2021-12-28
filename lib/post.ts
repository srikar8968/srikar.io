import fs from 'fs'
import { join } from 'path'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
};

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const mdxSource = fs.readFileSync(fullPath, 'utf8')
  const { frontmatter, code } = await bundleMDX({
    source: mdxSource.trim(),
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkToc]
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeAutolinkHeadings, rehypePrism]

      return options
    }
  });

  type Items = {
    [key: string]: string
  };

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = code
    }
    if(field === 'readingTime') {
      items[field] = readingTime(code).text
    }

    if (frontmatter[field]) {
      items[field] = frontmatter[field]
    }
  })

  return items
};

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const promises = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  const posts = await Promise.all(promises);
  
  return posts
}