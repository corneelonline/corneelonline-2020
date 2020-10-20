<template>
  <Layout>
    <PageIntro 
      v-bind:title="$page.post.title"
      v-bind:headline="$page.post.headline"
      v-bind:intro="$page.post.introduction_text"
    />
    <section class="services-overview">
      <ServiceExcerpt v-for="edge in $page.services.edges" :key="edge.node.id">
        <h3>{{edge.node.title}}</h3>
        <div v-html="edge.node.content" />
      </ServiceExcerpt>
    </section>
    <section class="big-image services">
      <g-image :src="$page.post.big_image_one" alt="control room" />
    </section>
    <section class="process">
      <h2>Hoe ik het doe</h2>
      <div class="process-step" v-for="process_step in $page.post.process_steps" :key="process_step.step_nr">
        <div class="process-step__nr">
          <span>{{ process_step.step_nr }}</span>
        </div>
        <div class="process-step__body">
          <h3>{{ process_step.title }}</h3>
          <p>{{ process_step.description }}</p>
        </div>
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  post: webpage(id: "f30f003e2ef8095e79939ac605ccf56f") {
    title
    fileInfo {
      name
    }
    headline
    introduction_text
    big_image_one
    process_steps {
      step_nr
      title
      description
    }
    seo_title
    seo_description
  }
  services: allService(sortBy: "sort_order", order: ASC) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>

<script>
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'
import BigImage from '~/components/layout/BigImage.vue'
import ServiceExcerpt from '~/components/service/Excerpt.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.post.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.post.seo_description
        },
        {
          property: "og:title",
          content: this.$page.post.seo_title
        },
        {
          property: "og:description",
          content: this.$page.post.seo_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: this.$page.post.fileInfo.name
      }
    }
  },
  components: {
    PageIntro,
    ContactMe,
    BigImage,
    ServiceExcerpt
  }
}
</script>

<style scoped lang="scss">
// --------------------------------------
// services overview
// --------------------------------------
.services-overview {
  @include container-narrow-half;
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: var(--color-gray-light);
}
// --------------------------------------
// big image
// --------------------------------------
.big-image {
  width: 100%;
  padding: 0;

  &.services {
    position: relative;
    &::before {
      @include top-triangle(var(--color-gray-light));
    }
  }
}
// --------------------------------------
// process steps
// --------------------------------------
.process {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
    
  @media (min-width: $md) {
    padding-right: calc(50% - 230px);
  }

  h2 {
    @extend .headline;
    margin-bottom: 2rem;
  }
}
.process-step {
  position: relative;

  @media (min-width: $sm) {
    display: flex;
    background: var(--color-white);
    background: linear-gradient(90deg, var(--color-white) 36px, var(--color-orange) 36px, var(--color-white) 38px, var(--color-white) 38px);
  }
  @media (min-width: $md) {
    background: var(--color-white);
    background: linear-gradient(90deg, var(--color-white) 48px, var(--color-orange) 48px, var(--color-white) 50px, var(--color-white) 50px);
  }
  @media (min-width: $lg) {
    background: var(--color-white);
    background: linear-gradient(90deg, var(--color-white) 80px, var(--color-orange) 80px, var(--color-white) 82px, var(--color-white) 82px);
  }

  &:last-of-type {
    @media (min-width: $sm) {
      display: flex;
      background: var(--color-white);
    }
  }

  &__nr {
    padding-bottom: 1rem;
    
    @media (min-width: $sm) {
      padding-right: 2rem;
    }
    @media (min-width: $lg) {
      padding-left: 2rem;
      padding-right: 2.45rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      font-family: var(--ff-header);
      @include font-size(1.375); // 22px
      color: var(--color-white);
      background-color: var(--color-orange);
      z-index: 2;
    
      @media (min-width: $sm) {
        width: 72px;
        height: 72px;
        @include font-size(2.5); // 40px
      }
      @media (min-width: $md) {
        width: 96px;
        height: 96px;
        @include font-size(3.125); // 50px
      }
    }
  }

  &__body {
    @media (min-width: $sm) {
      padding-top: 1rem;
    }
  }

  h3 {
    @extend .excerpt-header;
  }
}
</style>