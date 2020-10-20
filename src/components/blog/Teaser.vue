<template>
  <article class="blog-post--teaser">
    <g-link class="post-details" :to="post.path">
      <figure class="cover-image">
        <g-image src="https://res.cloudinary.com/corneel-online/image/upload/v1602597715/corneel/control-room-02_lgjso2.jpg" alt="blog cover image" />
      </figure>
      <ul class="tags">
        <li>Development</li>
        <li>CMS</li>
        <li>WordPress</li>
      </ul>
      <h2>{{post.title}}</h2>
    </g-link>
  </article>
</template>

<script>
export default {
  name: 'BlogTeaser',
  props: {
    post: Object
  }
}
</script>

<style scoped lang="scss">
.blog-post--teaser {
  background-color: var(--color-white);
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  .post-details {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  h2 {
    @extend .h4;
    color: var(--color-orange);
    margin-left: 1rem;
  }

  .cover-image {
    margin-bottom: 1rem;
  }

  .tags {
    margin: 0 1rem;
  }
}
.blog-post--teaser:first-of-type {
  background-color: transparent;

  .cover-image {
    order: 1;
  }

  .tags {
    order: 2;
    margin: 0;
  }

  h2 {
    order: 0;
    @extend .h3;
    color: var(--color-orange);
    margin-left: 0;
  }
}
.tags {
  li {
    @include tag;
  }
}
</style>