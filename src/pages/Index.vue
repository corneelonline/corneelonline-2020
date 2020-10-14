<template>
  <Layout>
    <section class="home-intro">
      <h1>{{$page.post.introduction_title}}</h1>
      <p v-html="$page.post.introduction_text"/>
      <g-link to="/projecten/" class="button">Bekijk recente projecten</g-link>
    </section>
    <section class="home-services">
      <h2>{{$page.post.services_title}}</h2>
      <div class="home-services__body" v-html="$page.post.services_text"/>
      <h2>Corneel Online houdt zich bezig met:</h2>
      <div class="home-services__teasers">
        <ServiceTeaser title="Web development" />
        <ServiceTeaser title="Web design" />
        <ServiceTeaser title="Content management systemen" />
        <ServiceTeaser title="Advies &amp; ondersteuning" />
      </div>
    </section>
    <section class="big-image">
      <g-image src="https://res.cloudinary.com/corneel-online/image/upload/v1602598164/corneel/control-room-01_smz913.jpg" alt="control room" />
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
      <h2>Over Corneel</h2>
      <div class="about-corneel__image">
        <g-image src="https://res.cloudinary.com/corneel-online/image/upload/v1602584134/corneel/Foto-Marco_s953tj.jpg" alt="foto van Marco Verheul" />
      </div>
      <div class="about-corneel__body">
        <p>Ik ben Marco Verheul, web developer bij Corneel Online, mijn Haarlems webbureau. Ik ontwikkel doordachte (mobiele) websites en webapplicaties zoals het hoort: snel, clean, functioneel, vindbaar, veilig en 100% maatwerk.</p>
        <p>Ik werk rechtstreeks voor opdrachtgevers, maar je kan me ook op freelance basis inhuren. </p>
      </div>
    </section>
    <ContactMe />
    <BigImage>
      <g-image src="https://res.cloudinary.com/corneel-online/image/upload/v1602597715/corneel/control-room-02_lgjso2.jpg" fit="outside" alt="control room" />
    </BigImage>
  </Layout>
</template>

<page-query>
query {
  post: webpage(id: "14b844fa207042add04d39881b895615") {
    title
    introduction_text
    services_title
    services_text
    introduction_title
    call_to_action_label
    about_corneel_title
    about_corneel_image
    about_corneel_text
    big_image_url
    about_corneel_image_url
    big_image_url_two
    seo_title
    seo_description
  }
}
</page-query>

<script>
import ServiceTeaser from '~/components/service/Teaser.vue'
import ProjectSlider from '~/components/project/Slider.vue'
import BigImage from '~/components/layout/BigImage.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo: {
    title: 'Web Developer te Haarlem'
  },
  components: {
    ServiceTeaser,
    ProjectSlider,
    BigImage,
    ContactMe
  }
}
</script>

<style lang="scss">
// -----------------------------------------------
// Home intro
// -----------------------------------------------
.home-intro {
  @include container;
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
    padding-right: 40%;
    padding-bottom: 8rem;
  }
  @media (min-width: $lg) {
    padding-left: calc(50% - 372px);
    padding-right: 35%;
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
.home-services h2 {
  @include header-narrow;
}
.home-services__body {
  @include container-narrow;
  padding-top: 0.5rem;

  @media (min-width: $lg) {
    display: flex;
    justify-content: space-between;
  }

  p {
    @media (min-width: $lg) {
      width: 48%;
    }
  }
}
.home-services__body p:first-child {
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

    p:first-of-type {
      @extend .highlighted-text;

      @media (min-width: $lg) {
        @include font-size(1.375); // 22px
      }
    }
  }
}
</style>
