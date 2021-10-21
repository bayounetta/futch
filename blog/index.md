---
layout: page
title: blog
---

## Blog posts, baked with love!

<div class="blog">
{%- for post in collections.blog reversed -%}
  <div key={{post.fileSlug}}>
    <div class="title">
      <a href={{post.url}}>{{post.data.title}}</a> -
      <span class="date">{{post.date | toReadableDate }}</span>
    </div>
    <div class="excerpt">{{post.data.excerpt}}</div>
  </div>
{%- endfor -%}
</div>
