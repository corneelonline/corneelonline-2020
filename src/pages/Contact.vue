<template>
  <Layout>
    <SocialHead
      :title="$page.sanityContact.seo.seo_title"
      :description="$page.sanityContact.seo.meta_description"
      :path="canonicalUrl"
      body-class="contact"
    />
    <PageIntro
      v-bind:title="$page.sanityContact.title"
      v-bind:headline="$page.sanityContact.introductionTitle"
      v-bind:intro="$page.sanityContact._rawIntroductionText"
    />
    <section class="page-content">
      <div class="page-content__intro">
        <h3>Heb je een vraag of opmerking?</h3>
        <p class="highlighted-text">
          Vul dan onderstaand formulier in; dan reageer ik zo snel mogelijk!
        </p>
      </div>
      <div class="page-contact">
        <div class="page-contact__form">
          <ContactForm />
        </div>
        <div class="page-contact__details">
          <h4>Contactgegevens</h4>
          <p>Corneel Online<br />Marco Verheul</p>
          <p class="links">
            <a tel="+31628461106" class="phone">06 2846 1106</a><br />
            <a href="mailto:marco@corneelonline.nl" class="email"
              >marco@corneelonline.nl</a
            >
          </p>
          <h4>Correspondentieadres</h4>
          <p>Mercuriusstraat 7<br />2024 TL Haarlem</p>
          <p>Kvk 34289767<br />BTW NL002172594B84</p>
        </div>
      </div>
    </section>
    <section class="big-image contact">
      <g-image
        src="~/assets/images/layout/control-room-02.jpg"
        alt="control room"
      />
    </section>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  sanityContact(id: "contact") {
    title
  	slug {
      current
    }
    introductionTitle
    _rawIntroductionText
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
import SocialHead from "~/components/common/SocialHead.vue";
import PageIntro from "~/components/layout/PageIntro.vue";
import ContactForm from "~/components/common/ContactForm.vue";
import ContactMe from "~/components/layout/ContactMe.vue";

export default {
  // metaInfo() {
  //   return {
  //     title: this.$page.sanityContact.seo.seo_title,
  //     meta: [
  //       {
  //         name: "description",
  //         content: this.$page.sanityContact.seo.meta_description,
  //       },
  //       {
  //         property: "og:title",
  //         content: this.$page.sanityContact.seo.seo_title,
  //       },
  //       {
  //         property: "og:description",
  //         content: this.$page.sanityContact.seo.meta_description,
  //       },
  //       {
  //         property: "og:image",
  //         content: "/assets/img/screenshot-home.jpg",
  //       },
  //     ],
  //     bodyAttrs: {
  //       class: "contact",
  //     },
  //   };
  // },
  components: {
    SocialHead,
    PageIntro,
    ContactForm,
    ContactMe,
  },
  computed: {
    canonicalUrl() {
      return (
        process.env.GRIDSOME_BASE_URL +
        "/" +
        this.$page.sanityContact.slug.current +
        "/"
      );
    },
  },
};
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

  h3,
  h4 {
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
  background-image: url("~@/assets/images/icons/icon-mail.svg");
}
a.phone {
  background-image: url("~@/assets/images/icons/icon-phone.svg");
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
