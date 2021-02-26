<template>
  <div class="video-container">
    <iframe
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
      videoId: getId(this.url),
    };
  },
  props: {
    url: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    videoEmbedUrl: function() {
      return "https://www.youtube.com/embed/" + this.videoId;
    },
  },
};
</script>
<style lang="scss" scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 2rem;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
