const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

const git = simpleGit();

async function generateBlogPost() {
  // Fetch the latest commits
  const log = await git.log();
  const commits = log.all;

  // Prepare the content for the blog post
  let content = '---\n';
  content += 'slug: auto-generated-post\n';
  content += 'title: Auto-Generated Post\n';
  content += 'authors:\n';
  content += '  - name: Auto Generator\n';
  content += '    title: Script\n';
  content += '    url: https://github.com/your-repo\n';
  content += '    image_url: https://github.com/your-repo.png\n';
  content += 'tags: [auto-generated]\n';
  content += '---\n\n';
  content += '## Commits Included in This Release\n\n';

  commits.forEach(commit => {
    const { date, message, author_name } = commit;
    content += `- **${message}** - *${author_name}* on ${new Date(date).toLocaleString()}\n`;
  });

  // Define the path for the new blog post
  const blogPostPath = path.join(__dirname, '..', 'blog', `${new Date().toISOString().split('T')[0]}-auto-generated.md`);

  // Write the content to the new blog post file
  fs.writeFileSync(blogPostPath, content, 'utf8');
  console.log(`Blog post created at ${blogPostPath}`);
}

generateBlogPost().catch(err => {
  console.error('Failed to generate blog post:', err);
  process.exit(1);
});