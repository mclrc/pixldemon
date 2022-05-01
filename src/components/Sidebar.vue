<template>
  <div id="sidebar" :class="{scrolled: scrolled, collapsed: collapsed}">
    <nav>
      <div>
        <header>
          <h1>
            <span>pixl</span>demon
          </h1>
        </header>
        <div id="hamburger-menu">
          <div>
            <span id="route-name">{{routeName}}</span>
            <button aria-label="hamburger menu" id="hamburger" @click="collapsed = !collapsed"></button>
          </div>
        </div>
      </div>
      <ul :class="{'slide-in-contents': !collapsed}">
        <li class="nav-entry" v-for="route in routes" :key="route.name">
          <router-link :to="route.path">{{route.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import variables from "../styles/_variables.scss";

export default {
  name: "Sidebar",
  data() {
    return {
      scrolled: false,
      scrollThreshold: 5,
      collapsed: true,
      routeName: this.$route.name,
      routes: [
        {
          name: "Home",
          path: "/"
        },
        /*{
          name: "About Me",
          path: "/about"
        },*/
        {
          name: "Portfolio",
          path: "/portfolio"
        },
        {
          name: "Contact",
          path: "/contact"
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      this.collapsed = true;
      this.routeName = this.$route.name;
      window.scrollTo(0, 0);
    }
  },
  created() {
    const func = () =>
      (this.scrolled =
        document.firstElementChild.scrollTop > this.scrollThreshold);
    window.addEventListener("scroll", func);
    func();
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_globals.scss";

#sidebar {
  align-self: flex-start;
  position: sticky;
  top: $top-padding;
  width: $sidebar-width;
  max-width: $sidebar-max-width;
  display: flex;
  flex-direction: column;

  padding-right: 1rem;
  padding-left: 1rem;

  user-select: none;

  background-color: white;
  z-index: 10;
}
header,
ul {
  margin: 0 auto;
  max-width: $sidebar-content-width;
}
ul {
  transition-timing-function: ease-in;
  height: auto;
}
header {
  text-align: right;
  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    font-weight: 900;
    font-size: 3rem;
    font-weight: lighter;
    margin: 0.4rem 0;
    color: $accent-color-1;
    span {
      color: black;
    }
  }
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0;
}

.nav-entry {
  margin: 1.3rem 0;
  list-style: none;
  white-space: nowrap;
  a {
    color: black;
    font-weight: 300;
    text-decoration: none;
    font-size: 1.4rem;
    transition: 0.2s;

    opacity: 0.8;
    &:hover,
    &.router-link-exact-active {
      opacity: 1;
    }

    &::after {
      display: block;
      content: "";
      background-color: black;
      height: 1px;
      width: 0px;
      transition: 0.2s;
      margin: 0 auto;
    }

    &:hover::after,
    &.router-link-exact-active::after {
      width: 100%;
    }

    &.router-link-exact-active {
      color: $accent-color-1 !important;
    }
    &.router-link-exact-active::after {
      background-color: $accent-color-1;
    }
  }
}

#hamburger-menu {
  display: none;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #route-name {
    font-size: 1.4rem;
  }
}
#hamburger {
  background: none;
  border: none;
  outline: none;
  position: relative;
  height: 1.1rem;
  width: 2rem;
  padding: 1rem;
  box-sizing: content-box;
  margin: 0;
  margin-right: -1rem;

  cursor: pointer;

  &::before,
  &::after {
    display: block;
    position: absolute;
    content: "";
    height: 4px;
    width: 2rem;
    background-color: black;
    transition: 0.3s;
    transform-origin: 51% 51%;
  }
  &::before {
    top: 1rem;
  }
  &::after {
    bottom: 1rem;
  }
}
#sidebar:not(.collapsed) #hamburger {
  &::before {
    top: calc(50% - 2px);
    transform: rotate(225deg);
  }
  &::after {
    bottom: calc(50% - 2px);
    transform: rotate(-225deg);
  }
}
@media screen and (max-width: $breakpoint) {
  #sidebar {
    width: 100%;
    max-width: none !important;
    position: fixed;
    top: 0;
    padding: 0.8rem 0;
  }
  header,
  ul {
    max-width: $max-content-width;
    width: auto;
  }
  header {
    text-align: center;
    padding-right: 3rem;
    h1 {
      font-size: 2rem;
    }
  }
  nav {
    max-width: $max-content-width;
    margin: 0 $content-margin;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  ul {
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }
  .nav-entry {
    margin: 0.5rem 1rem;
    font-size: 1rem;
  }
  .nav-entry:last-child {
    margin-right: 0;
  }
  .nav-entry:first-child {
    margin-left: 0;
  }
  #sidebar.scrolled {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    #background-cover {
      opacity: 1;
    }
  }
}
@media screen and (max-width: $breakpoint2) {
  #hamburger-menu {
    display: block;
  }
  #sidebar:not(.collapsed) {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  }
  nav {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    justify-content: space-between;
  }
  header {
    padding: 0;
    margin: 0;
  }
  ul {
    flex-direction: column !important;
    align-items: center;
    flex: auto;
    transition: 0.2s;
    overflow: hidden;
    max-height: 0;
  }
  #sidebar:not(.collapsed) ul {
    max-height: 28rem;
  }
  #sidebar.collapsed ul {
    max-height: 0;
  }
  .nav-entry {
    margin: 1.6rem 0 !important;
  }
}
</style>
