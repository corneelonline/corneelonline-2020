<template>
  <Layout>
    <PageIntro 
      v-bind:title="$page.sanityContact.title"
      v-bind:headline="$page.sanityContact.introductionTitle"
      v-bind:intro="$page.sanityContact._rawIntroductionText"
    />
    <section class="page-content">
      <div class="page-content__intro">
        <h3>Heb je een vraag of opmerking?</h3>
        <p class="highlighted-text">Vul dan onderstaand formulier in; dan reageer ik zo snel mogelijk!</p>
      </div>
      <div class="page-contact">
        <div class="page-contact__form">
          <form method="post" name="Contact Form" class="contact-form">
            <div class="form-group">
              <label for="name">Naam</label>
              <input type="text" name="name" id="name">
            </div>
            <div class="form-group">
              <label for="email">E-mailadres</label>
              <input type="email" name="email" id="email">
            </div>
            <div class="form-group">
              <label for="comments">Bericht</label>
              <textarea name="comments" id="comments"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="button">Verzend bericht</button>
            </div>
          </form>
        </div>
        <div class="page-contact__details">
          <h4>Contactgegevens</h4>
          <p>Corneel Online<br>Marco Verheul</p>
          <p class="links">
            <a tel="+31628461106" class="phone">06 2846 1106</a><br>
            <a href="mailto:marco@corneelonline.nl" class="email">marco@corneelonline.nl</a>
          </p>
          <h4>Correspondentieadres</h4>
          <p>Mercuriusstraat 7<br>2024 TL Haarlem</p>
          <p>Kvk 34289767<br>BTW NL002172594B84</p>
        </div>
      </div>
    </section>
    <section class="big-image contact">
      <g-image :src="$page.sanityContact.bigImage.asset.url" alt="control room" />
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  sanityContact(id: "contact") {
    title
    introductionTitle
    _rawIntroductionText
    bigImage {
			asset {
        url
      }
    }
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
// see: https://snipcart.com/blog/netlify-forms
import PageIntro from '~/components/layout/PageIntro.vue'
import ContactMe from '~/components/layout/ContactMe.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.sanityContact.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.sanityContact.seo_description
        },
        {
          property: "og:title",
          content: this.$page.sanityContact.seo_title
        },
        {
          property: "og:description",
          content: this.$page.sanityContact.seo_description
        },
        {
          property: "og:image",
          content: ""
        }
      ],
      bodyAttrs: {
        class: "contact"
      }
    }
  },
  components: {
    PageIntro,
    ContactMe
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  @media (min-width: $md) {
    @include container;
  }
  @media (min-width: $lg) {
    @include container-narrow;
    padding-top: 3rem;
  }

  h3, h4 {
    @extend .excerpt-header;
  }

  &__intro {
    @media (min-width: $md) {
      width: 50%;
    }
  }
}
.page-contact {
  @media (min-width: $md) {
    display: flex;
    justify-content: space-between;
  }

  &__form {
    @media (min-width: $md) {
      width: 50%;
    }
  }

  &__details {
    @media (min-width: $md) {
      width: 40%;
      padding-top: 2rem;
    }
  }
}
p.links {
  margin-bottom: 4rem;
}
a.phone,
a.email {
  padding-left: 2.25rem; //36px;
  color: var(--color-text-main);
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 1.375rem 1.375rem; //22px
}
a.email {
  background-image: url('~@/assets/images/icons/icon-mail.svg');
}
a.phone {
  background-image: url('~@/assets/images/icons/icon-phone.svg');
}
// ---------------------------------------
// contact form
// ---------------------------------------
.contact-form {
  margin-bottom: 2rem;

  .form-group {
    // border: 1px dotted blue;
    padding-bottom: 1rem;
  }

  label {
    display: block;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    border: 1px solid var(--color-gray-lighter);
    padding: 0.5rem 1rem;
  }
  textarea {
    height: 10rem;
    
    @media (min-width: $md) {
      height: 15rem;
    }
  }
}
// --------------------------------------
// big image
// --------------------------------------
.big-image {
  width: 100%;
  padding: 0;

  &.contact {
    position: relative;
    &::before {
      @include top-triangle(var(--color-gray-light));
    }
    margin-bottom: 3rem;
  }
}
</style>