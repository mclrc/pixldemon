<template>
  <div id="home-wrapper">
    <div class="slide-in-contents page-content" id="home-content-wrapper">
      <h1>Hello There!</h1>
      <p>
        My name is Moritz. I’m a german tech enthusiast in my teens. Since I
        fell in love with computers and programming a few years ago, I have
        tried to learn all that I can about a variety of topics related to
        computer science and software engineering.
      </p>
      <p>
        The goal of this site is to catalog my development journey, but also to
        motivate myself to create more cool stuff to put on here.
      </p>
      <h2>My Arsenal</h2>
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
        I've also written my own front-end library,
        <a href="https://github.com/pixldemon/yaduil">yaduil</a>, but that's
        more of an experiment that an attempt to create something useful in
        practice. Writing basic tooling myself is something I love. Not because
        it's productive, but because it's fun and teaches you a lot.
      </p>
      <p>
        In the past, I've done mainly web and gamedev, but am currently dabbling
        in physics simulations with
        <a href="https://github.com/pixldemon/traj-propagate">traj-propagate</a
        >, a trajectory propagation tool for astronomical objects and
        spacecraft.
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
          description: "For less headaches with anything JS",
        },
        {
          icon: "/assets/vue.png",
          title: "Vue.js",
          description: "For lightning fast, dynamic UI",
        },
        {
          icon: "/assets/rusticon.png",
          title: "Rust",
          description: "For performance, convenience and safety",
        },
        {
          icon: "/assets/pythonicon.png",
          title: "Python",
          description: "For quick data processing and scripting",
        },
        {
          icon: "/assets/archicon.png",
          title: "Arch Linux",
          description: "For freedom and productivity",
        },
        {
          icon: "/assets/cliicon.png",
          title: "The Command Line",
          description: "For getting things done",
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