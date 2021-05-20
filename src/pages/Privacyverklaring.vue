<template>
  <Layout>
    <section class="page-intro">
      <h1>{{ $page.content.title }}</h1>
    </section>
    <div class="page-content--default">
      <PortableText :blocks="$page.content._rawBody" />
    </div>
    <ContactMe />
  </Layout>
</template>

<page-query>
query {
  content: sanityDefaultPage(id: "878c333b-3de8-414b-841b-2a3f1f5817fa") {
    title
    _rawBody
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
import PortableText from "~/components/sanity/PortableText.vue";
import ContactMe from "~/components/layout/ContactMe.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.content.seo.seo_title,
      meta: [
        {
          name: "description",
          content: this.$page.content.seo.meta_description,
        },
        {
          property: "og:title",
          content: this.$page.content.seo.seo_title,
        },
        {
          property: "og:description",
          content: this.$page.content.seo.meta_description,
        },
        {
          property: "og:image",
          content: "/assets/img/screenshot-home.jpg",
        },
      ],
      bodyAttrs: {
        class: "default-page",
      },
    };
  },
  components: {
    PortableText,
    ContactMe,
  },
};
</script>
