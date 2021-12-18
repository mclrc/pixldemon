<template>
  <div id="portfolio-wrapper">
    <div class="slide-in-contents page-content">
      <h1>Stuff I Made</h1>
      <p>
        Here are some of my past projects. It's far from everything, but
        everything worth mentioning.
      </p>
      <div id="items" class="container">
        <div
          class="item"
          v-for="(item, index) in items"
          :key="item.name + index"
        >
          <h3 class="item-title">{{ item.name }}</h3>

          <p class="item-description">{{ item.description }}</p>
          <p class="links">
            <a
              v-for="link in item.links"
              :href="link.url"
              :key="link.url + Math.random()"
              >{{ link.label }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      items: [
        {
          name: "traj-propagate",
          description:
            "SPICE-integrated n-body astronimical object and spacecraft trajectory propagation tool",
          links: [
            {
              label: "Github",
              url: "https://github.com/pixldemon/traj-propagate",
            },
          ],
        },

        {
          name: "respondix",
          description:
            "Lightweight, zero-dependency, proxy-based reactivity library",
          links: [
            { label: "Github", url: "https://github.com/pixldemon/respondix" },
            { label: "npm", url: "https://www.npmjs.com/package/respondix" },
          ],
        },
        {
          name: "naivdom",
          description:
            "Simple virtual DOM implementation including a basic patching algorithm",
          links: [
            { label: "Github", url: "https://github.com/pixldemon/naivdom" },
            { label: "npm", url: "https://www.npmjs.com/package/naivdom" },
          ],
        },
        {
          name: "tinytemplatec",
          description:
            "VDOM-agnostic HTML template compiler with support for vue-like directives",
          links: [
            {
              label: "Github",
              url: "https://github.com/pixldemon/tinytemplatec",
            },
            {
              label: "npm",
              url: "https://www.npmjs.com/package/tinytemplatec",
            },
          ],
        },
        {
          name: "yaduil",
          description:
            "Tiny, vue-inspired front-end view library. Made up of tinytemplatec, naivdom and respondix.",
          links: [
            { label: "Github", url: "https://github.com/pixldemon/yaduil" },
            { label: "npm", url: "https://www.npmjs.com/package/yaduil" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

main {
  max-width: 900px;
}
#items {
  display: grid;
  grid-gap: 14px;
  width: 100%;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  .item {
    border-radius: 0px;
    min-height: 200px;
    transition: 0.2s;
    background-color: white;

    :not(:last-child) {
      margin-right: 0.4rem;
    }

    h3 {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
    }
    .links {
      a {
        font-size: 0.9em;
      }
      a:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>