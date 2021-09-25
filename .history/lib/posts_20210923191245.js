import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import superjson from 'superjson';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const jsonString = parse(
    stringify('https://jsonplaceholder.typicode.com/posts')
  );
  const res = await fetch(jsonString);
  return res.json();
}
