<template>
  <div id="contact-wrapper" class="slide-in-contents page-content">
    <h1>Contact Me</h1>
    <p>
      If you are interested in collaborating with me or want to connect for any
      other reason, here is how you can reach me.
    </p>
    <ul class="slide-in-contents">
      <li v-for="avenue in avenues" :key="avenue.name">
        <span class="avenue">{{ avenue.name }}</span>
        <span v-if="!avenue.link" class="address">{{ avenue.address }}</span>
        <a v-else :href="avenue.link" class="address">{{ avenue.address }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      avenues: [
        {
          name: "Email",
          address: "moritzamando@protonmail.com",
        },
        {
          name: "Twitter",
          address: "@pixldemon (DMs open)",
          link: "https://twitter.com/pixldemon",
        },
        {
          name: "Github",
          address: "pixldemon",
          link: "https://github.com/pixldemon",
        },
        {
          name: "Discord",
          address: "pixldemon#3043",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

ul {
  list-style: none;
  padding: 0;
}
li {
  color: $text-color;
  margin: 1rem 0;
}
.avenue,
.address {
  font-weight: 300;
  font-size: 1.4em;
}
.avenue {
  display: block;
  opacity: 0.7;
}

@media only screen and (min-width: $breakpoint) {
  .address,
  .avenue {
    display: inline-block;
  }
  .avenue {
    width: 10rem;
    margin-right: 2rem;
    text-align: right;
  }
}
</style>