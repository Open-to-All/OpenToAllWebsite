# Overview

This is the static part (i.e. not the map) of AccessMap's website!

This repo is a [Gatsby](https://gatsbyjs.org) static site generator.

# Writing blog posts

## Markdown files

Blog posts get rendered from markdown files in `content/blog`. These posts
should be written as `index.md` files within a folder in `content/blog` so that
the renderer can find them and to make it easier to add static content to posts
such as images.

## Frontmatter

Markdown files, especially ones used for blog posts, have something called
`frontmatter`, the metadata for the post. Our posts require these `frontmatter`
entries:

- `title`: the title of the post.

## Permalinks (slugs)

For a static site, especially a blog, we want human-readable URIs for every
post, and for them to *never change*. That way, people can reference the posts
on social media, search engines can index them consistently, and we can get
consistent analytics for page views. The permanent, human-readable URIs for
blogs are called 'slugs', and we attempt to generate them with this logic:

- If `slug` is set in the frontmatter of the markdown file, this overrides all
other settings and directly creates the slug. e.g., if `slug: "cool-post"` is
set, then it will be located at `oursite.com/blog/cool-post`.

- From the `title` key in the frontmatter of the markdown file, slugified:
spaces and special unicode characters get turned into dashes, so if the title
is "Cool post", the URI will be `oursite.com/blog/Cool-post`. If you ever
change or plan on changing the title of your post after publishing it, you
*must* set the `slug` frontmatter to avoid breaking links on social media, etc.

- From the directory name of the blog post. This should never occur, as the
`title` frontmatter is required of all posts. But this fallback is still
defined, just in case, so if the markdown file is at
`content/blog/2017-07-29/index.md` and all else fails, the URI will be
`oursite.com/blog/2017-07-29`.

# Adding new pages and links

(TODO)

## Links

If you want your new page to appear in the top navbar, edit the `navLinks`
section of `data/SiteConfig.js` and add a new object with the `label` and
`link` keys. A nav link can optionally have a `children` key as well, to
produce a nav link drop-down with multiple options. The value of `children`
should be an array of objects that look just like a nav link. No further
nesting is currently supported.
