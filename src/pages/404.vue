<template>
  <Layout>
    <section class="page-intro">
      <h1>Pagina niet gevonden</h1>
    </section>
    <section class="page-content">
      <h2>Helaas, de pagina die je zoekt kan niet worden gevonden</h2>
      <g-image src="~/assets/images/layout/not-found.jpg" class="main-img-notfound"/>
      <p>Er is iets misgegaan. De pagina die je zoekt bestaat niet (meer).</p>
      <p>Wat kunt u doen om te vinden wat u zoekt?</p>
      <ul>
        <li>Controleer de URL en probeer het opnieuw.</li>
        <li>Kijk in in navigatiemenu of je daar de juiste pagina kunt vinden.</li>
        <li>Kom je er helemaal niet uit? Neem dan <a href="/contact/">contact</a> op. Ik kan je vast verder helpen.</li>
      </ul>
      <p>Misschien vind je hier wat je zoekt:</p>
      <p class="button-group">
        <a href="/" class="button">Naar de homepage</a>
        <a href="/diensten/" class="button">Diensten</a>
        <a href="/projecten/" class="button">Projecten</a>
        <a href="/blog/" class="button">Blog</a>
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '404 Not Found',
      bodyAttrs: {
        class: "not-found"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-intro {
  @include container-narrow;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.page-content {
  padding-top: 4rem;

  h2 {
    @extend .headline;
  }

  .button-group {
    .button {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}
.main-img-notfound {
  margin-bottom: 2rem;
}
</style>