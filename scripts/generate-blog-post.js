const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

const git = simpleGit();

async function generateBlogPost(author, subject, body) {
  // Prepare the content for the blog post
  let content = `---
slug: auto-generated-post
title: ${subject}
${ author ? 
  `authors: ${author}` :
  `
  authors :
    - name: Auto Generator
    title: Script
    url: https://github.com/your-repo
    image_url: https://github.com/your-repo.png
  `
}
tags: [auto-generated]
---\n\n`;
  
  content += `## ${subject}\n\n`;
  content += `${body || 'No additional details provided.'}\n\n`;
  content += `*Commit made by ${author}*\n\n`;

  // Define the path for the new blog post
  const blogPostPath = path.join(__dirname, '..', 'blog', `${Date.now()}-auto-generated.md`);

  // Write the content to the new blog post file
  fs.writeFileSync(blogPostPath, content, 'utf8');
  console.log(`Blog post created at ${blogPostPath}`);
}

async function main() {

  let author_name = process.argv[2];
  let message = process.argv[3];
  let body = process.argv[4];

  const match = message.match(/^(?<type>feat|fix|docs|style|refactor|test|chore)\((?<scope>.+)\):\s(?<subject>.+)$/);

  console.log({ message , match })

  if (match) {
    const { author, subject } = match.groups;
    await generateBlogPost( author_name, subject, body);
  } else {
    console.log('No valid commit found to generate the blog post.');
  }
}

main().catch(err => {
  console.error('Failed to generate blog post:', err);
  process.exit(1);
});
