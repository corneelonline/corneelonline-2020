<template>
  <footer class="page-footer" role="contentinfo">
    <g-link class="logo inverted" to="/">{{ $static.metadata.siteName }}</g-link>
    <nav id="footnav" class="nav">
      <g-link class="nav__link" to="/algemene-voorwaarden/">Algemene voorwaarden</g-link>
      <g-link class="nav__link" to="/privacyverklaring/">Privacyverklaring</g-link>
      <g-link class="nav__link" to="/colofon/">Colofon</g-link>
    </nav>
    <p class="copy">&copy; 2015 - {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}</p>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.page-footer {
  background-color: var(--color-background-footer);
  padding: 20px;
}
</style>