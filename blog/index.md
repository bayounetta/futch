---
layout: page
title: blog
---

## Blog posts, baked with love!

<div>
{%- for post in collections.blog reversed -%}
  <div className="post" key={{post.fileSlug}}>
    <div className="postTitle">
      <a href={{post.url}}>{{post.data.title}}</a>
      <span> - </span>
      <span className="postDate">{{post.date | toReadableDate }}</span>
    </div>
    <div className="postExcerpt">{{post.data.excerpt}}</div>
  </div>
{%- endfor -%}
</div>
