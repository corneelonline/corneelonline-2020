<template>
  <Layout>
    <section class="home-intro">
      <h1>Web development met een missie</h1>
      <p>Laat je website maken zoals het hoort: snel, clean, functioneel, vindbaar, veilig en 100% maatwerk.</p>
      <g-link to="/projecten/" class="button">Bekijk recente projecten</g-link>
    </section>
    <section class="home-services">
      <h2>Wat ik doe</h2>
      <div class="home-services__body">
        <p>Corneel Online creëert <strong>prachtige websites</strong> en webapplicaties voor organisaties die een echte toegevoegde waarde willen bieden.</p>
        <p>Met een ijzersterk netwerk van webprofessionals help ik organisaties die een echte toegevoegde waarde willen bieden. Voor wie de boodschap of de beleving leidend is en niet alleen de winst. Ik ontwikkel doordachte (mobiele) websites en webapplicaties.</p>
      </div>
      <h2>Corneel Online houdt zich bezig met:</h2>
      <div class="home-services__teasers">
        <ServiceTeaser title="Web development" />
        <ServiceTeaser title="Web design" />
        <ServiceTeaser title="Content management systemen" />
        <ServiceTeaser title="Advies &amp; ondersteuning" />
      </div>
    </section>
    <section class="big-image">
      <g-image src="https://res.cloudinary.com/corneel-online/image/upload/v1602512524/corneel/control-room-01_vqykci.jpg" alt="control room" />
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
      <div class="about-corneel__body">
        <h2>Over Corneel</h2>
        <p>Ik ben Marco Verheul, web developer bij Corneel Online, mijn Haarlems webbureau. Ik ontwikkel doordachte (mobiele) websites en webapplicaties zoals het hoort: snel, clean, functioneel, vindbaar, veilig en 100% maatwerk.</p>
        <p>Ik werk rechtstreeks voor opdrachtgevers, maar je kan me ook op freelance basis inhuren. </p>
      </div>
      <div class="about-corneel__image">
        [IMAGE]
      </div>
    </section>
    <section class="contact-me">
      <div class="contact-me__body">
        <h3>Wat houdt je bezig?</h3>
        <p>Heb jij een interessant project? En wil je erover praten?</p>
        <p>Of je nou een starter bent of een doorgewinterd bedrijf, ik hoor het graag als ik je een leuke uitdaging voor me hebt.</p>
      </div>
      <div class="contact-me__details">
        <p>
          Marco Verheul<br>
          T. 06 2846 1106<br>
          E. marco@corneelonline.nl
        </p>
      </div>
    </section>
    <section class="big-image">
      [IMAGE]
    </section>
  </Layout>
</template>

<script>
import ServiceTeaser from '~/components/service/Teaser.vue'
import ProjectSlider from '~/components/project/Slider.vue'

export default {
  metaInfo: {
    title: 'Web Developer te Haarlem'
  },
  components: {
    ServiceTeaser,
    ProjectSlider
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
</style>
