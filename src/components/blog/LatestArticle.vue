<template>
  <article class="blog-post--latest">
    <g-link class="post-details" :to="post.path">
      <h2>{{ post.title }}</h2>
      <figure class="cover-image">
        <g-image :src="post.main_image" alt="blog cover image" />
      </figure>
      <ul class="tags">
        <li>Development</li>
        <li>CMS</li>
        <li>WordPress</li>
      </ul>
    </g-link>
  </article>
</template>

<script>
export default {
  name: "BlogLatestArticle",
  props: {
    post: Object,
  },
};
</script>
