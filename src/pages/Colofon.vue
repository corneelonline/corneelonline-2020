<template>
  <Layout>
    <SocialHead
      :title="$page.content.seo.seo_title"
      :description="$page.content.seo.meta_description"
      :path="canonicalUrl"
    />
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
  content: sanityDefaultPage(id: "c430ba20-a1a2-4982-a77b-8e1716489164") {
    title
  	slug {
      current
    }
    _rawBody
    seo {
      seo_title
      meta_description
    }
  }
}
</page-query>

<script>
import SocialHead from "~/components/common/SocialHead.vue";
import PortableText from "~/components/sanity/PortableText.vue";
import ContactMe from "~/components/layout/ContactMe.vue";

export default {
  components: {
    SocialHead,
    PortableText,
    ContactMe,
  },
  computed: {
    canonicalUrl() {
      return (
        process.env.GRIDSOME_BASE_URL +
        "/" +
        this.$page.content.slug.current +
        "/"
      );
    },
  },
};
</script>
