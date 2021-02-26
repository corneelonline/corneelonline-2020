<template>
  <footer class="page-footer">
    <div class="page-footer__branding">
      <g-link class="logo-inverted" to="/">{{
        $static.metadata.siteName
      }}</g-link>
    </div>
    <div class="page-footer__content">
      <div class="page-footer__about">
        <h4>Over Corneel</h4>
        <p>
          Corneel Online is het webbureau van Marco Verheul, professioneel
          websitebouwer te Haarlem.
          <g-link to="/over-corneel/">Lees meer</g-link>
        </p>
      </div>
      <div class="page-footer__blog">
        <h4>Uit het blog</h4>
        <g-link
          v-for="edge in $static.posts.edges"
          :key="edge.node.id"
          :to="edge.node.path"
        >
          {{ edge.node.title }}
        </g-link>
      </div>
      <div class="page-footer__contact">
        <h4>Contact</h4>
        <p>
          Ik vind het leuk om je verder te helpen met jouw project. Of met je
          samen te werken natuurlijk!
          <g-link to="/contact/">Neem contact op</g-link>
        </p>
      </div>
    </div>
    <div class="page-footer__info">
      <nav class="nav page-footer__nav">
        <g-link class="nav__link" to="/algemene-voorwaarden/"
          >Algemene voorwaarden</g-link
        >
        <g-link class="nav__link" to="/privacyverklaring/"
          >Privacyverklaring</g-link
        >
        <g-link class="nav__link" to="/colofon/">Colofon</g-link>
      </nav>
      <p class="copy">
        &copy; 2015 - {{ new Date().getFullYear() }}
        {{ $static.metadata.siteName }}
      </p>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  posts: allSanityPost(sortBy: "publishedAt", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        path
        mainImage {
          asset {
            url
          }
        }
        tags
      }
    }
  }
}
</static-query>

<style scoped lang="scss">
.page-footer {
  // -------------------------------------
  // footer section
  // -------------------------------------
  padding: 2rem;
  background-color: var(--color-background-footer);
  color: var(--color-white);

  @media (min-width: $md) {
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    grid-template-areas: "branding  content  info";
    grid-gap: 3rem;
  }
  @media (min-width: $lg) {
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-areas:
      "branding  content  content  empty"
      "branding  info     info     empty";
    grid-gap: 3rem;
  }

  h4 {
    @include font-size(1.125); //18px
    @media (min-width: $md) {
      @include font-size(1.25); //20px
    }
    @media (min-width: $lg) {
      @include font-size(1.25); //20px
    }
    color: var(--color-white);
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-white) !important;
  }

  p {
    color: var(--color-white);
  }
}
// -------------------------------------
// footer logo
// -------------------------------------
.page-footer__branding {
  padding-bottom: 3rem;

  @media (min-width: $md) {
    grid-area: branding;
  }
}
.logo-inverted {
  display: block;
  width: 6.25rem; //100px;
  height: 5.5rem; //88px;
  text-indent: -9000px;
  background-image: url("~@/assets/images/logo-corneel-inverted.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: $md) {
    width: 5.0625rem; //81px;
    height: 4.4375rem; //71px;
  }

  @media (min-width: $lg) {
    width: 6.25rem; //100px;
    height: 5.5rem; //88px;
  }
}
// -------------------------------------
// footer content cols
// -------------------------------------
.page-footer__content {
  @media (min-width: $md) {
    grid-area: content;
  }
  @media (min-width: $lg) {
    display: flex;
    justify-content: space-between;
  }

  a,
  p {
    @include font-size(0.875);
  }
}
.page-footer__about {
  padding-bottom: 1rem;

  @media (min-width: $lg) {
    width: 31%;
    padding-bottom: 0;
  }
}
.page-footer__blog {
  padding-bottom: 1rem;

  @media (min-width: $lg) {
    width: 31%;
    padding-bottom: 0;
  }

  a {
    display: block;
    margin-bottom: 1rem;
  }
}
.page-footer__contact {
  padding-bottom: 1rem;

  @media (min-width: $lg) {
    width: 31%;
    padding-bottom: 0;
  }
}
.page-footer__info {
  padding-bottom: 1rem;

  @media (min-width: $md) {
    grid-area: info;
  }
  @media (min-width: $lg) {
    display: flex;
  }

  .nav__link {
    @include font-size(0.875);
    display: block;
    font-family: var(--ff-header);
    line-height: 1.15;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 1rem;

    @media (min-width: $lg) {
      display: inline-block;
      margin-right: 1.5rem;
    }
  }

  .copy {
    @include font-size(0.875);
    font-family: var(--ff-header);
    line-height: 1.15;
    text-transform: uppercase;

    @media (min-width: $lg) {
      margin: 0.375rem 0 0 0;
    }
  }
}
</style>
