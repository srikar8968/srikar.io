import Author from './author'

type PostType = {
  title: string,
  date: string,
  slug: string,
  featureImage?: string,
  readingTime: string,
  author?: Author,
  excerpt?: string,
  content: string
};

export default PostType