<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <u-navbar>
                <u-logo slot="left" color="inverse">{{ logo }}</u-logo>
                <u-navbar-item v-for="item in navbar" :key="item.text" :to="item.to" :href="item.href" :target="item.target">{{ item.text }}</u-navbar-item>
            </u-navbar>
        </div>
    </header>
    <main :class="$style.body">
        <div :class="$style.wrap">
            <router-view></router-view>
        </div>
    </main>
</div>
</template>

<script>
// external
import Vue from 'vue';
import ILineAwesome from 'i-line-awesome.vue';
Vue.component('i-line-awesome', ILineAwesome);

export default {
    data() {
        return {
            logo: this.$docs.logo,
            navbar: this.$docs.navbar,
            theme: window.theme,
        };
    },
    methods: {
        onSelectTheme($event) {
            if ($event.value !== window.theme) {
                localStorage.setItem('theme', $event.value);
                location.reload();
            }
        },
    },
};
</script>

<style module>
.root {}

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $navbar-height;
    /* background: #1c2b41; */
    background: white;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
    z-index: $z-index-layout;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: $navbar-height;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    /* width: 1180px;
    margin: 0 auto; */
}

.color {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #67aaf5;
    border: 1px solid white;
    vertical-align: -2px;
    margin-right: 6px;
}

.color[color="dark"] {
    background: #4a89e8;
}

.color[color="seagreen"] {
    background: #2cb78e;
}
</style>
