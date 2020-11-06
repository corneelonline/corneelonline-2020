<template>
  <Layout>
    <section class="page-intro">
      <h1>{{ $page.about.title }}</h1>
    </section>
    <section class="about-me-intro">
      <div class="about-me-intro__body">
        <PortableText :blocks="$page.about._rawBody"/>
        <g-link to="/contact/" class="button">Verder kennismaken?</g-link>
      </div>
      <div class="about-me-intro__img">
        <g-image :src="$page.about.aboutMeImage.asset.url" alt="foto van Marco Verheul" />
      </div>
    </section>
    <section class="about-me-info">
      <div class="about-me-info__mission">
        <PortableText :blocks="$page.about._rawMission"/>
      </div>
      <div class="about-me-info__team">
        <PortableText :blocks="$page.about._rawTeam"/>
      </div>
    </section>
    <section class="big-image about">
      <g-image :src="$page.about.bigImage.asset.url" alt="control room" />
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  about: sanityAboutMe(id: "aboutMe") {
    title
    aboutMeImage {
      asset {
        url
      }
    }
    bigImage {
      asset {
				url
      }
    }
    _rawBody
    _rawMission
    _rawTeam
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
import PortableText from '~/components/sanity/PortableText.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.about.seo.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.about.seo.meta_description
        },
        {
          property: "og:title",
          content: this.$page.about.seo.seo_title
        },
        {
          property: "og:description",
          content: this.$page.about.seo.meta_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: "over-corneel"
      }
    }
  },
  components: {
    PortableText,
    ContactMe
  }
}
</script>

<style lang="scss" scoped>
.about-me-intro {
  @include container;
  padding-top: 0;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: $md) {
    @include container-narrow;
    padding-bottom: 3rem;
  }
  @media (min-width: $lg) {
    @include container-narrow;
    padding-bottom: 3rem;
    flex-direction: row;
    justify-content: space-between;
  }

  &__body {
    order: 1;

    @media (min-width: $lg) {
      order: 0;
      width: 45%;
    }
    /deep/ p:first-of-type {
      @extend .highlighted-text;
    }
  }
  &__img {
    order: 0;
    margin-bottom: 2rem;

    @media (min-width: $lg) {
      order: 1;
      width: 45%;
    }
  }
}
.about-me-info {
  @include container;
  background-color: var(--color-gray-light);
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: $md) {
    @include container-narrow;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  @media (min-width: $lg) {
    @include container-narrow;
    padding-top: 3rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }

  &__mission,
  &__team {
    @media (min-width: $lg) {
      width: 45%;
    }
    @media (min-width: $xl) {
      width: 40%;
    }

    h2 {
      @extend .h3;
    }
  }
}
// --------------------------------------
// big image
// --------------------------------------
.big-image {
  width: 100%;
  padding: 0;
  margin-bottom: 4rem;

  &.about {
    position: relative;
    &::before {
      @include top-triangle(var(--color-gray-light));
    }
  }
}
</style>