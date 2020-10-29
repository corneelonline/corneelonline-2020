<template>
  <Layout>
    <section class="home-intro">
      <h1>{{$page.home.introductionTitle}}</h1>
      <block-content :blocks="$page.home._rawIntroductionText" />
      <g-link to="/projecten/" class="button">Bekijk recente projecten</g-link>
    </section>
    <section class="home-services">
      <h2>{{$page.home.servicesTitle}}</h2>
      <block-content :blocks="$page.home._rawServicesText" className="home-services__body"/>
      <h2>Corneel Online houdt zich bezig met:</h2>
      <div class="home-services__teasers">
        <ServiceTeaser 
          v-for="edge in $page.services.edges" 
          :key="edge.node.id" 
          v-bind:title="edge.node.title"
        />
      </div>
    </section>
    <section class="big-image">
      <g-image :src="$page.home.bigImageOne.asset.url" alt="control room" />
    </section>
    <section class="featured-projects">
      <header>
        <h2>Uitgelichte projecten</h2>
      </header>
      <ProjectSlider />
      <footer>
        <g-link to="/projecten/" class="button">Naar alle projecten</g-link>
      </footer>
    </section>
    <section class="about-corneel">
      <h2>{{$page.home.aboutMeTitle}}</h2>
      <div class="about-corneel__image">
        <g-image :src="$page.home.aboutMeImage.asset.url" alt="foto van Marco Verheul" />
      </div>
      <block-content :blocks="$page.home._rawAboutMeText" className="about-corneel__body"/>
    </section>
    <ContactMe />
    <BigImage>
      <g-image :src="$page.home.bigImageTwo.asset.url" alt="control room" />
    </BigImage>
  </Layout>
</template>

<page-query>
query {
  home: sanityHomepage(id: "homepage") {
    title
    introductionTitle
    _rawIntroductionText
    servicesTitle
    _rawServicesText
    aboutMeTitle
    aboutMeImage {
      asset {
        url
      }
    }
    _rawAboutMeText
    bigImageOne {
      asset {
        url
      }
    }
    bigImageTwo {
      asset {
        url
      }
    }
    seo {
      seo_title
      meta_description
    }
  }
  services: allSanityService(sortBy: "sortOrder", order: ASC, filter: { showOnHomepage: { eq: true }}) {
    edges {
			node {
        title
      }
    }
  }
}
</page-query>

<script>
import ServiceTeaser from '~/components/service/Teaser.vue'
import ProjectSlider from '~/components/project/Slider.vue'
import BigImage from '~/components/layout/BigImage.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.home.seo.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.home.seo.meta_description
        },
        {
          property: "og:title",
          content: this.$page.home.seo.seo_title
        },
        {
          property: "og:description",
          content: this.$page.home.seo.meta_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: this.$page.home.title
      }
    }
  },
  components: {
    ServiceTeaser,
    ProjectSlider,
    BigImage,
    ContactMe
  }
}
</script>

<style scoped lang="scss">
// -----------------------------------------------
// Home intro
// -----------------------------------------------
.home-intro {
  @include container-half;
  background-image: url('~@/assets/images/bg/home-intro.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-white);
  padding-top: 2rem;
  padding-bottom: 4rem;
  
  @media (min-width: $sm) {
    padding-bottom: 7rem;
  }
  @media (min-width: $md) {
    padding-bottom: 8rem;
  }
  @media (min-width: $lg) {
    @include container-narrow-half;
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
  @media (min-width: $xl) {
    padding-bottom: 14rem;
  }

  h1 {
    color: var(--color-white);
  }
}
// -----------------------------------------------
// Services
// -----------------------------------------------
.home-services {
  @include container-narrow;
  position: relative;
  z-index: 1;
  padding-top: 1.5rem;

  @media (min-width: $md) {
    padding-top: 5rem;
  }
  
  &::before {
    @include circle-decoration;
  }
}
.home-services__body {
  padding-top: 0.5rem;

  @media (min-width: $lg) {
    display: flex;
    justify-content: space-between;
  }
}
.home-services__body /deep/ p {
  @media (min-width: $lg) {
    width: 48%;
  }
}
.home-services__body /deep/ p:first-of-type {
  @extend .highlighted-text;
}
.home-services__teasers {
  @include container;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: $lg) {
    @include container-narrow;
  }
}
// -----------------------------------------------
// Featured projects
// -----------------------------------------------
.featured-projects {
  padding-top: 1em;
  background-color: var(--color-orange-light);
  position: relative;
  margin-bottom: 80px;

  @media (min-width: $sm) {
    margin-bottom: 110px;
  }
  @media (min-width: $md) {
    margin-bottom: 110px;
  }
  @media (min-width: $lg) {
    margin-bottom: 130px;
  }
  @media (min-width: $xl) {
    margin-bottom: 170px;
  }

  header {
    text-indent: -9000px;
    height: 0;

    @media (min-width: $md) {
      @include container-narrow;
      text-indent: 0;
      height: auto;
    }
  }

  footer {
    text-align: center;
  }

  &::after {
    @include bottom-triangle(var(--color-orange-light));
  }
}
// -----------------------------------------------
// About Corneel
// -----------------------------------------------
.about-corneel {
  @include container-narrow;

  @media (min-width: $lg) {
    display: grid;
    // grid-template-rows: 1fr 10fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "header image"
      "body   image";
    grid-gap: 1rem;
  }

  h2 {
    @media (min-width: $lg) {
      grid-area: header;
      line-height: 1.5rem;
      margin-bottom: 0.75rem;
      align-self: end;
    }
  }

  &__image {
    padding: 1rem 0;

    @media (min-width: $lg) {
      padding: 0;
      grid-area: image;
    }
  }

  &__body {
    @media (min-width: $lg) {
      grid-area: body;
    }
  }

  &__body /deep/ p:first-of-type {
    @extend .highlighted-text;

    @media (min-width: $lg) {
      @include font-size(1.375); // 22px
    }
  }
}
</style>
