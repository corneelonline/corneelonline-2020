<template>
  <Layout>
    <section class="page-intro">
      <h1>Contact</h1>
    </section>
    <section class="page-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      <form method="post" name="Contact Form">
      <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </p>
      <p>
        <label for="comments">Comments:</label><br/>
        <textarea name="comments" id="comments"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
      </form>
    </section>
  </Layout>
</template>

<script>
// see: https://snipcart.com/blog/netlify-forms
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
