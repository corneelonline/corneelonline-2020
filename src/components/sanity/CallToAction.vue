<template functional>
  <div class="call-to-action">
    <h3>{{props.ctaTitle}}</h3>
    <p>{{props.ctaBody}}</p>
    <g-link to="/contact/" class="button">{{props.ctaButtonLabel}}</g-link>
  </div>
</template>