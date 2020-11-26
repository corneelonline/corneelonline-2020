<template>
  <Layout>
    <PageIntro 
      v-bind:title="$page.service.title"
      v-bind:headline="$page.service.introductionTitle"
      v-bind:intro="$page.service._rawIntroductionText"
    />
    <section class="services-overview">
      <ServiceExcerpt v-for="edge in $page.services.edges" :key="edge.node.id" v-bind:class="edge.node.serviceClass">
        <h3>{{edge.node.title}}</h3>
        <PortableText :blocks="edge.node._rawBody"/>
      </ServiceExcerpt>
    </section>
    <section class="big-image services">
      <g-image src="~/assets/images/layout/control-room-02.jpg" alt="control room" />
    </section>
    <section class="process">
      <h2>Hoe ik het doe</h2>
      <div class="process-step" v-for="step in $page.service.steps" :key="step.stepNumber">
        <div class="process-step__nr">
          <span>{{ step.stepNumber }}</span>
        </div>
        <div class="process-step__body">
          <h3>{{ step.stepTitle }}</h3>
          <PortableText :blocks="step._rawStepDescription" class="process-step__desc"/>
        </div>
      </div>
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  service: sanityServicesPage(id: "servicesPage") {
    title
    introductionTitle
    _rawIntroductionText
    steps {
      stepNumber
      stepTitle
      _rawStepDescription
    }
    seo {
      seo_title
      meta_description
    }
  }
  services: allSanityService(sortBy: "sortOrder", order: ASC) {
    edges {
			node {
        title
        serviceClass
        _rawBody
      }
    }
  }
}
</page-query>

<script>
import PortableText from '~/components/sanity/PortableText.vue'
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'
import BigImage from '~/components/layout/BigImage.vue'
import ServiceExcerpt from '~/components/service/Excerpt.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.service.seo.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.service.seo.meta_description
        },
        {
          property: "og:title",
          content: this.$page.service.seo.seo_title
        },
        {
          property: "og:description",
          content: this.$page.service.seo.meta_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: "diensten"
      }
    }
  },
  components: {
    PortableText,
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
      width: 3.25rem; //52px;
      height: 3.25rem; //52px;
      border-radius: 50%;
      font-family: var(--ff-header);
      @include font-size(1.375); // 22px
      color: var(--color-white);
      background-color: var(--color-orange);
      z-index: 2;
    
      @media (min-width: $sm) {
        width: 4.5rem; //72px;
        height: 4.5rem; //72px;
        @include font-size(2.5); // 40px
      }
      @media (min-width: $md) {
        width: 6rem; //96px;
        height: 6rem; //96px;
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