<template>
  <div class="service__excerpt">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ServiceExcerpt',
  props: {
    service: Object
  }
}
</script>

<style lang="scss">
.service__excerpt {
  padding-top: 6.4rem;
  padding-bottom: 1rem;
  background-image: url('~@/assets/images/icon-service.svg');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 4.875rem 5.625rem; //78px 90px;
  
  @media (min-width: $sm) {
    padding-top: 0;
    padding-bottom: 2rem;
    padding-left: 6.5rem;
  }
  @media (min-width: $md) {
    padding-top: 0;
    padding-bottom: 4rem;
    padding-left: 8rem; //128px;
    background-size: 6.3125rem 7.375rem; //101px 118px;
  }
  @media (min-width: $lg) {
    padding-left: 10.625rem;
    background-size: 8rem 9.3125rem;
  }
}
</style>