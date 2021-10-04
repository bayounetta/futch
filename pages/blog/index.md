---
layout: base
---

## Blog posts, baked with love!

<div>
{%- for post in collections.post reversed -%}
  <div className="post" key={{post.fileSlug}}>
    <div className="postTitle">
      <a href={{post.url}}>{{post.data.title}}</a>
      <span> - </span>
      <span className="postDate">{{post.data.date}}</span>
    </div>
    <div className="postExcerpt">{{post.data.description}}</div>
  </div>
{%- endfor -%}
</div>
