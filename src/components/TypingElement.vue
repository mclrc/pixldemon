<template>
  <p class="typing-element">
    I love
    <span>&emsp;{{ currentText }}</span>
  </p>
</template>

<script>
export default {
  name: "TypingElement",
  created() {
    this.phraseIndex = Math.floor((this.phrases.length - 1) * Math.random());
    this.write();
  },
  methods: {
    write() {
      if (this.charIndex == 0 && this.currentText !== "") {
        this.currentText = this.currentText.slice(
          0,
          this.currentText.length - 1
        );
        setTimeout(
          this.write.bind(this),
          this.minDelay + Math.random() * (this.maxDelay - this.minDelay)
        );
      } else if (this.charIndex < this.phrases[this.phraseIndex].length) {
        this.currentText += this.phrases[this.phraseIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(
          this.write.bind(this),
          this.minDelay + Math.random() * (this.maxDelay - this.minDelay)
        );
      } else {
        this.charIndex = 0;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        setTimeout(this.write.bind(this), 2000);
      }
    },
  },
  data() {
    return {
      minDelay: 30,
      maxDelay: 50,
      phraseIndex: 0,
      charIndex: 0,
      currentText: "",
      phrases: [
        "web development.",
        "video games.",
        "creating video games.",
        "Linux.",
        "Python.",
        "JavaScript.",
        "Rust",
        "Vue.js.",
        "everything tech.",
        "scuba diving.",
        "computer hardware.",
        "solving problems.",
        "what little C++ I know.",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

@keyframes blink {
  50% {
    opacity: 0;
  }
}
.typing-element {
  font-family: "Source Code Pro", sans-serif;
  line-height: 1 !important;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  white-space: nowrap;

  span {
    margin-left: 1rem;
    white-space: nowrap;
    color: $accent-color-1;
  }
  &::after {
    display: inline-block;
    content: "";
    width: 8px;
    height: 1.3rem;
    margin: 0 0.2rem;
    background-color: $text-color;
    animation: blink 0.9s step-end infinite;
  }
}
</style>