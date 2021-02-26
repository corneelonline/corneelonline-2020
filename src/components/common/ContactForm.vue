<template>
  <form
    method="post"
    name="Contact Form"
    class="contact-form"
    action="/bedankt"
    netlify-honeypot="hpfield"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="Contact Form" />
    <div class="form-group">
      <label for="name">Naam</label>
      <input type="text" name="name" id="name" />
    </div>
    <div class="form-group">
      <label for="email">E-mailadres</label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="form-group">
      <label for="comments">Bericht</label>
      <textarea name="comments" id="comments"></textarea>
    </div>
    <input class="hidden" name="hpfield" />
    <div class="form-group">
      <button type="submit" class="button">Verzend bericht</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss">
// ---------------------------------------
// contact form
// ---------------------------------------
.contact-form {
  margin-bottom: 2rem;

  .form-group {
    padding-bottom: 1rem;
  }

  label {
    display: block;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    border: 1px solid var(--color-gray-lighter);
    padding: 0.5rem 1rem;
  }
  textarea {
    height: 10rem;

    @media (min-width: $md) {
      height: 15rem;
    }
  }
}
</style>
