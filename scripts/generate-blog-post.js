const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

const git = simpleGit();

async function generateBlogPost(author, subject, body) {
  // Prepare the content for the blog post
  let content = `---
slug: auto-generated-post
title: Auto-Generated Post
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
  const blogPostPath = path.join(__dirname, '..', 'blog', `${new Date().toISOString().split('T')[0]}-auto-generated.md`);

  // Write the content to the new blog post file
  fs.writeFileSync(blogPostPath, content, 'utf8');
  console.log(`Blog post created at ${blogPostPath}`);
}

async function main() {
  // Fetch the latest commit
  const log = await git.log();
  const lastCommit = log.latest;

  const { author_name, message, body } = lastCommit;
  const match = message.match(/^(?<type>feat|fix|docs|style|refactor|test|chore)\((?<scope>.+)\):\s(?<subject>.+)$/);

  if (match) {
    const { author, subject, body } = match.groups;
    await generateBlogPost( process.argv[2] || author, process.argv[3] || subject, process.argv[4] || body);
  } else {
    console.log('No valid commit found to generate the blog post.');
  }
}

main().catch(err => {
  console.error('Failed to generate blog post:', err);
  process.exit(1);
});
