<template>
  <div class="lalalaa">
    <h4>{{ article.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'RelatedArticle',
  props: {
    item: String,
    article: Object,
  },
  // data () {
  //   return {
  //     postpath: '',
  //   }
  // },
  // mounted: function () {
  //   let arr = this.item.split("/");
  //   console.dir(arr);
  //   let filename = arr[2].split(".");
  //   console.dir(filename);

  //   this.postpath = `/blog/${filename[0]}/`;
  // }
}
</script>

<style scoped lang="scss">

</style>