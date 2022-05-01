<template>
  <div id="home-wrapper">
    <div class="slide-in-contents page-content" id="home-content-wrapper">
      <h1>Hello There!</h1>
      <p>
        My name is Moritz. I make stuff with computers sometimes, and when I make something that I think is worth sharing,
        this is where I put it. Have a look around!
      </p>
      <TypingElement />
      <h2>Technologies I use</h2>
      <div id="stack-wrapper">
        <div id="items">
          <div class="stack-item" v-for="item in items" :key="item.title">
            <img :src="item.icon" :alt="item.title" />
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <PrimaryButton
          label="Take a Look at My Work!"
          @click="$router.push('portfolio')"
        />
      </div>
      <p>
        I dabble in a lot of different technologies, trying whatever I'm currently interested in. Generally, I like writing things
        mostly from the ground up and understanding the underlying tech, which is why I sometimes make my own libraries or tools.
        Having fun and expanding my knowledge is my primary goal. I don't usually care about making something actually useful, as
        long as I learned something from building it.
      </p>
    </div>
  </div>
</template>

<script>
import TypingElement from "@/components/TypingElement";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "Home",
  components: {
    TypingElement,
    PrimaryButton,
  },
  data() {
    return {
      items: [
        {
          icon: "/assets/tsicon.jpg",
          title: "Typescript",
          description: "For anything that needs to run in a browser. The language I'm the most proficient in.",
        },
        {
          icon: "/assets/vue.png",
          title: "Vue",
          description: "For websites that need dynamic UI. My favorite front-end framework.",
        },
        {
          icon: "/assets/rusticon.png",
          title: "Rust",
          description: "For making things fast and having fun at the same time. Currently my favorite language.",
        },
        {
          icon: "/assets/pythonicon.png",
          title: "Python",
          description: "For automation and quick scripting. Or when I just want to quickly try something.",
        },
        {
          icon: "/assets/archicon.png",
          title: "Arch Linux",
          description: "For customization and peace of mind. An OS that actually respects you."
        },
        {
          icon: "/assets/cliicon.png",
          title: "The Terminal",
          description: "Because it's simply the best.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
#items {
  display: grid;
  grid-gap: 14px;
  width: 100%;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  .stack-item {
    min-height: 200px;
    transition: 0.2s;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    :not(:last-child) {
      margin-right: 0.4rem;
    }
    img {
      height: 120px;
      margin-bottom: 1rem;
    }
    p,
    h3 {
      margin: 0.3rem 0;
      text-align: center;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.4 !important;
      color: $text-color;
      text-align: center;
    }
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}

#home-wrapper {
  width: 100%;
  position: relative;
}

hr {
  margin: 1rem 0;
  border: none;
}
</style>
