<template>
  <Layout>
    <section class="page-intro">
      <h1>Projecten</h1>
    </section>
    <section class="project-single">
      <g-link to="/projecten/" class="button-back">Terug</g-link>
      <h2 class="project-title" v-html="$page.sanityProject.title"/>
      <div class="project-img">
        <figure class="main-image">
          <g-image :src="$page.sanityProject.mainImage.asset.url" alt="project img" />
        </figure>
      </div>
      <div class="project-desc">
        <div class="project-desc__details">
          <dl>
            <dt>Opdrachtgever</dt>
            <dd>{{$page.sanityProject.client}}</dd>
            <dt>Team</dt>
            <dd>{{$page.sanityProject.team}}</dd>
            <dt>Diensten</dt>
            <dd>{{$page.sanityProject.services}}</dd>
            <dt>Opgeleverd</dt>
            <dd>{{$page.sanityProject.deliveryDate}}</dd>
          </dl>
          <a v-if="$page.sanityProject.visitWebsite.length" :href="$page.sanityProject.visitWebsite" class="button" target="_blank">Bezoek website</a>
        </div>
        <div class="project-desc__content">
          <block-content :blocks="$page.sanityProject._rawIntroductionText"/>
        </div>
      </div>
      <div class="project-body" v-if="$page.sanityProject._rawBody">
        <PortableText :blocks="$page.sanityProject._rawBody" />
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  sanityProject(path: $path) {
    id
    title
    mainImage {
      asset {
        url
      }
    }
    _rawIntroductionText
    client
    team
    services
    deliveryDate(format: "YYYY")
    visitWebsite
    _rawBody(resolveReferences: {maxDepth: 10})
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
      title: this.$page.sanityProject.seo.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.sanityProject.seo.meta_description
        },
        {
          property: "og:title",
          content: this.$page.sanityProject.seo.seo_title
        },
        {
          property: "og:description",
          content: this.$page.sanityProject.seo.meta_description
        },
        {
          property: "og:image",
          content: this.$page.sanityProject.main_image
        }
      ],
      bodyAttrs: {
        class: "project"
      }
    }
  },
  components: {
    PortableText,
    ContactMe
  }
}
</script>

<style scoped lang="scss">
.page-intro {
  @include container-narrow-half;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.project-single {
  @include container;
  background-color: var(--color-orange-light);
  border-bottom: 3rem solid var(--color-white);
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  @media (min-width: $lg) {
    @include container-narrow;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .button-back {
    margin-bottom: 2rem;
  }

  .project-title {
    @extend .headline;
    margin-bottom: 2rem;
  }
}
.project-img {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
  
  @media (min-width: $sm) {
    justify-content: center;
  }
}
.main-image {
  display: block;
  width: 12.75rem; //204px;
  height: 8.9375rem; //143px;
  margin-bottom: 1rem;
  background-image: url('~@/assets/images/bg/laptop.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  
  @media (min-width: $sm) {
    width: 35.625rem; //570px;
    height: 22.5rem; //360px;
  }
  @media (min-width: $md) {
    width: 47.5rem; //760px;
    height: 29.375rem; //470px;
  }
  @media (min-width: $lg) {
    width: 46.25rem; //740px;
    height: 32.5rem; //520px;
  }
  @media (min-width: $xl) {
    width: 60rem; //960px;
    height: 42.5rem; //680px;
  }

  img {
    position: absolute;
    top: 0.75rem; //12px;
    left: 1.125rem; //18px;
    width: 10.5rem; //68px;
  
    @media (min-width: $sm) {
      top: 1.875rem; //30px;
      left: calc(50% - 13.75rem); //212px
      width: 26.5rem; //424px;
    }
    @media (min-width: $md) {
      top: 2.5rem; //40px;
      left: calc(50% - 17.3125rem); //277px
      width: 34.625rem; //554px;
    }
    @media (min-width: $lg) {
      top: 2.625rem; //42px;
      left: calc(50% - 19.1875); //307px
      width: 38.375rem; //614px;
    }
    @media (min-width: $xl) {
      top: 3.625rem; //58px;
      left: calc(50% - 25rem); //400px
      width: 50rem; //800px;
    }
  }
}
.project-desc {
  @media (min-width: $md) {
    @include container-narrow;
  }
  @media (min-width: $lg) {
    @include container;
    display: flex;
    justify-content: space-between;
  }
  
  &__details {
    margin-bottom: 2rem;

    @media (min-width: $lg) {
      width: 45%;
    }

    dl {
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      font-family: var(--ff-header);

      @media (min-width: $lg) {
        margin-bottom: 4rem;
      }
    }
    dt {
      padding: .25rem 0 0;
      color: var(--color-orange);
      width: 100%;
  
      @media (min-width: $sm) {
        padding: .25rem 0;
        border-bottom: 1px solid var(--color-orange);
        width: 35%;
      }

      &:last-of-type {
        border-bottom: none;
      }
    }
    dd {
      padding: 0 0 .25rem;
      border-bottom: 1px solid var(--color-orange);
      width: 100%;
  
      @media (min-width: $sm) {
        padding: .25rem 0;
        width: 65%;
      }

      &:last-of-type {
        border-bottom: none;
      }
    }
  }

  &__content {
    @media (min-width: $lg) {
      width: 45%;
    }
  }
}
.project-body {
  @media (min-width: $md) {
    @include container-narrow;
  }
  @media (min-width: $lg) {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>