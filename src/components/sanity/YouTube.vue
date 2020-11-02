<template>
  <div class="youtube-wrapper">
    <iframe 
      width="560" 
      height="315" 
      :src="videoEmbedUrl" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    >
    </iframe>
  </div>
</template>
<script>
import getId from "get-youtube-id";

export default {
  name: "YouTube",
  data() {
    return {
      videoId: getId(this.url)
    };
  },
  props: {
    url: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    videoEmbedUrl: function () {
      return "https://www.youtube.com/embed/" + this.videoId;
    }
  }
};
</script>
<style lang="scss" scoped>
.youtube-wrapper {
  margin-bottom: 2rem;
}
</style>