<template>
  <Layout>
    <PageIntro 
      v-bind:title="$page.portfolio.title"
      v-bind:headline="$page.portfolio.introductionTitle"
      v-bind:intro="$page.portfolio._rawIntroductionText"
    />
    <section class="featured-cases">
      <div class="wrapper">
        <h2>Uitgelichte projecten</h2>
        <ProjectExcerpt v-for="edge in $page.featuredProjects.edges" :key="edge.node.id" v-bind:project="edge.node"/>
      </div>
    </section>
    <section class="all-projects">
      <ProjectTeaser v-for="edge in $page.allProjects.edges" :key="edge.node.id" v-bind:project="edge.node"/>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  portfolio: sanityPortfolio(id: "portfolio") {
    title
    introductionTitle
    _rawIntroductionText
  }
  featuredProjects: allSanityProject(sortBy: "deliveryDate", order: DESC, filter: { featured: { eq: true }}) {
    edges {
			node {
        title
        path
        mainImage {
					asset {
            url
          }
        }
        _rawIntroductionText
      }
    }
  }
  allProjects: allSanityProject(sortBy: "deliveryDate", order: DESC, filter: { featured: { eq: false }}) {
    edges {
			node {
        title
        path
        mainImage {
					asset {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'
import ProjectExcerpt from '~/components/project/Excerpt.vue'
import ProjectTeaser from '~/components/project/Teaser.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.portfolio.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.portfolio.seo_description
        },
        {
          property: "og:title",
          content: this.$page.portfolio.seo_title
        },
        {
          property: "og:description",
          content: this.$page.portfolio.seo_description
        },
        {
          property: "og:image",
          content: this.$page.portfolio.main_image
        }
      ],
      bodyAttrs: {
        class: "projecten"
      }
    }
  },
  components: {
    PageIntro,
    ContactMe,
    ProjectExcerpt,
    ProjectTeaser
  }
}
</script>

<style scoped lang="scss">
// -----------------------------------------
// featured projects section
// -----------------------------------------
.featured-cases {
  @include bottom-triangle-margins;
  background-color: var(--color-orange-light);
  padding-top: 2rem;
  padding-bottom: 2rem;

  &::after {
    @include bottom-triangle(var(--color-orange-light));
  }

  .wrapper {
    @include container;

    @media (min-width: $lg) {
      @include container-narrow;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }
}
// -----------------------------------------
// all projects section
// -----------------------------------------
.all-projects {
  padding-bottom: 2rem;

  @media (min-width: $sm) {
    @include container;
    display: grid;
    grid-template-columns: repeat(auto-fill, 204px);
    justify-content: space-evenly;
  }
  @media (min-width: $md) {
    grid-template-columns: repeat(auto-fill, 220px);
    justify-content: space-between;
  }
  @media (min-width: $lg) {
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: space-between;
  }
  @media (min-width: $lg) {
    grid-template-columns: repeat(auto-fill, 311px);
    justify-content: space-evenly;
  }

  & > .project__teaser {
    margin-bottom: 2rem;

    @media (min-width: $sm) {
      width: 204px;
    }
    @media (min-width: $md) {
      width: 220px;
    }
    @media (min-width: $lg) {
      width: 300px;
    }
    @media (min-width: $xl) {
      width: 311px;
    }
    
    .project-img {
      @media (min-width: $md) {
        width: 100%;
      }

      img {
        @media (min-width: $md) {
          top: 13px;
          left: 19px;
        }
        @media (min-width: $lg) {
          top: 18px;
          left: 25px;
          width: 83.5%;
        }
        @media (min-width: $xl) {
          width: 83%;
        }
      }
    }
  }
}
</style>