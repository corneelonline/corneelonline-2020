<template>
  <div class="project__teaser">
    <g-link :to="project.path">
      <figure class="project-img">
        <g-image :src="project.mainImage.asset.url" alt="project img" />
        <figcaption>{{ project.title }}</figcaption>
      </figure>
    </g-link>
  </div>
</template>

<script>
export default {
  name: "ProjectTeaser",
  props: {
    project: Object,
  },
  methods: {
    getPath(slug) {
      return `/projecten/${slug}/`;
    },
  },
};
</script>

<style scoped lang="scss">
.project__teaser {
  width: 100%;
  height: 172px;

  @media (min-width: $md) {
    height: 158px;
  }
  @media (min-width: $lg) {
    height: 202px;
  }

  .project-img {
    display: block;
    width: 240px;
    height: 172px;
    background-image: url("~@/assets/images/bg/laptop.svg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    margin: 0 auto;

    @media (min-width: $md) {
      width: 220px;
      height: 158px;
    }
    @media (min-width: $lg) {
      width: 285px;
      height: 202px;
    }

    img {
      position: absolute;
      top: 15px;
      left: 20px;
      width: 83%;

      @media (min-width: $md) {
        top: 13px;
        left: 19px;
      }
      @media (min-width: $lg) {
        top: 17px;
        left: 24px;
      }
    }
  }
}
.project__teaser a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  figcaption {
    display: none;
  }
}
.project__teaser a:hover {
  figcaption {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(51, 51, 51, 0.9);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--color-white);
    font-family: var(--ff-header);
    font-weight: var(--fw-normal);
    text-transform: uppercase;
    text-align: center;
    @include font-size(0.9);
  }
}
</style>
