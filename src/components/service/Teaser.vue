<template>
  <div class="home-services__teaser">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ServiceTeaser',
  props: ['title']
}
</script>

<style lang="scss">
.home-services__teaser {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  min-height: 140px;
  padding-top: 6.25rem; //100px;
  margin-bottom: 1rem;
  background-image: url('~@/assets/images/icon-service.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 4.875rem 5.625rem; //78px 90px;

  @media (min-width: $md) {
    width: 23%;
    padding-top: 8rem; //128px;
    background-size: 6.3125rem 7.375rem; //101px 118px;
  }
  @media (min-width: $lg) {
    width: 20%;
    padding-top: 8rem; //128px;
    background-size: 6.3125rem 7.375rem; //101px 118px;
  }

  h3 {
    @extend .h4;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>