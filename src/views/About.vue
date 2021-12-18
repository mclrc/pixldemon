<template>
  <div id="about-wrapper" class="slide-in-contents page-content">
    <h1>Who Am I?</h1>
    <p>
      <img src="/assets/pic.jpg" id="portrait" title="Me :)" />
      I'm currently in high school and will be for another couple of months.
      Once I graduate, I plan to spend at least a year or two in a foreign
      country, travelling and getting to know new people. Maybe I'll try to get
      a scholarship and study abroad, too. In any case, I want to study some
      combination of computer science, software engineering and maybe physics.
    </p>
    <TypingElement />
    <p>
      I could tell you what I think I'll want to do after, but it's almost
      certain to change until then. What I am reasonably sure about is that I
      will try to pursue a career in software engineering at some point, which
      has been a dream of mine for close to half my lifetime now.
    </p>
    <p>
      Software and programming have always fascinated me, since way before I
      really understood anything about them. Originally, I wanted to create my
      own games, or improve the ones I loved. So when one day, I was lucky
      enough to stumble upon an advert for a programming book for children in a
      magazine my grandmother had bought me, ten-or-so year old me was smart
      enough to say hey, lets give it a shot. My dad gladly bought me the book,
      and so here we are, with programming among my biggest passions in life.
    </p>
  </div>
</template>

<script>
import TypingElement from "@/components/TypingElement.vue";

export default {
  name: "About",
  components: {
    TypingElement,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

#portrait {
  max-height: 50vh;
  max-width: 40%;
  border-radius: 4px;
  height: auto;
  float: right;
  margin-left: 3rem;
}

@media only screen and (max-width: 1080px) {
  #portrait {
    float: none;
    margin: 0;
    max-width: none;
  }
}
@media only screen and (max-width: $breakpoint2) {
  #portrait {
    max-height: none;
    width: 100%;
  }
}
</style>