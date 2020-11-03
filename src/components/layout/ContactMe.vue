<template>
  <section class="contact-me">
    <div class="contact-me__wrapper">
      <div class="contact-me__body">
        <h3>Wat houdt je bezig?</h3>
        <p>Heb jij een interessant project?<br>En wil je erover praten?</p>
        <p>Of je nou een starter bent of een doorgewinterd bedrijf, ik hoor het graag als ik je een leuke uitdaging voor me hebt.</p>
      </div>
      <div class="contact-me__details">
        <p>
          <strong>Marco Verheul</strong><br>
          T. 06 2846 1106<br>
          E. <a href="mailto:marco@corneelonline.nl">marco@corneelonline.nl</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe'
}
</script>

<style scoped lang="scss">
.contact-me {
  height: 28.125rem; //450px;
  background: var(--color-gray-lighter);
  background: linear-gradient(0deg, var(--color-gray-lighter) 75%, var(--color-white) 75%, var(--color-white) 100%);
  color: var(--color-white);
  
  @media (min-width: $md) {
    height: 51.25rem; //820px;
    background: linear-gradient(0deg, var(--color-gray-lighter) 85%, var(--color-white) 85%, var(--color-white) 100%);
  }
  @media (min-width: $lg) {
    height: 38.25rem; //612px;
    background: linear-gradient(0deg, var(--color-gray-lighter) 88%, var(--color-white) 88%, var(--color-white) 100%);
  }

  &__wrapper {
    height: 100%;
    background-image: url('~@/assets/images/double-bubble-sm.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 17.625rem 26.625rem; //282px 426px;
    position: relative;
  
    @media (min-width: $md) {
      background-image: url('~@/assets/images/double-bubble-md.svg');
      background-size: 42.0625rem 49.3125rem; //673px 789px;
    }
    @media (min-width: $lg) {
      background-image: url('~@/assets/images/double-bubble-lg.svg');
      background-size: 62.25rem 32rem; //996px 512px;
    }
  }

  h3 {
    color: var(--color-white);

    @media (min-width: $lg) {
      margin-bottom: 1rem;
    }
  }

  &__body {
    width: 200px;
    position: absolute;
    top: 70px;
    left: calc(50% - 6.25rem);
  
    @media (min-width: $md) {
      width: 374px;
      top: 140px;
      left: calc(50% - 14.125rem);
    }
    @media (min-width: $lg) {
      width: 374px;
      top: 140px;
      left: calc(50% - 22.625rem);
    }

    p {
      @include font-size(0.875);
  
      @media (min-width: $md) {
        @include font-size(1);
      }
    }

    p:first-of-type {
      @media (min-width: $md) {
        @include font-size(1.375); // 22px
        margin-bottom: 0.5rem;
      }
    }
    
    p:last-of-type {
      text-indent: -9000px;
      height: 0;
  
      @media (min-width: $md) {
        text-indent: 0;
        height: auto;
      }
    }
  }

  &__details {
    width: 200px;
    position: absolute;
    bottom: 100px;
    left: calc(50% - 6.25rem);
  
    @media (min-width: $md) {
      width: 374px;
      bottom: 160px;
      left: calc(50% - 1rem);
    }
    @media (min-width: $lg) {
      width: 23.375rem; //374px;
      bottom: 15.875rem; //254px;
      left: calc(50% + 7.5rem);
    }

    a {
      color: var(--color-white);
    }
  }
}
</style>