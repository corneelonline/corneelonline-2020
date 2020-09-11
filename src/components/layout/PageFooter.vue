<template>
  <footer class="page-footer" role="contentinfo">
    FOOTER
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