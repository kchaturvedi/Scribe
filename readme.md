# Scribe
The Serverless Markdown Blogging Framework

## Features
- Serverless deployments
- Blazing fast Server-side Rendering using the [Next.js](nextjs.org) framework
- React front-end for a single-page experience
- Customizable post URLs, summaries, featured images, and tags
- Markdown parser for posts
- Inline HTML support for custom elements
- Support for static elements (like photos) and embed content (like YouTube videos)

## Getting Started
#### Clone the project
```
$ git clone https://github.com/kchaturvedi/Scribe.git
```

#### Install dependencies
```
$ cd Scribe
$ npm i
```

#### Add posts
1. Add any static content to the `/static` directory. Use any folder structure you prefer.
2. Add your markdown post to the `/posts` directory and link to any static content you placed in the `/static` directory.
3. Add the post's metadata to the `/posts/index.js` file.

#### Run development server
```
$ npm run dev
```

#### View in browser
Open [http://localhost:3000](http://localhost:3000) to see your blog running!

## Backlog
- Improve styling for Markdown elements (in progress)
- Fix some rendering issues on smaller screens (in progress)
- Fix alignment issues for post's featured image box (in progress)
- Make configuration and customization easier
- Add custom CMS / database support to dynamically load content without editing any files
- Add 'Related Posts' section at bottom of posts based on post tags
- Create Tags page to view all posts with a particular tag
