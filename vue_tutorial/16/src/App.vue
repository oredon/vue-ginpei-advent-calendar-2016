<template>
  <div class="container">
    <h1>Form</h1>
    <p class="hash">HASH: {{hash}}</p>

    <g-header></g-header>

    <main role="main">
      <section id="tabContainer1" role="tabpanel" v-show="hash == ''" :aria-hidden="hash == '' ? 'true' : 'false'" label="Home">
        <h1>Home</h1>
        <p>ホームホームホームホームホームホームホーム</p>
        <p>ホームホームホームホームホームホームホーム</p>
        <p>ホームホームホームホームホームホームホーム</p>
        <p>ホームホームホームホームホームホームホーム</p>
        <p><a href="#">ほげほげ</a></p>
      </section>

      <section id="tabContainer2" role="tabpanel" v-show="hash == '#about'" :aria-hidden="hash == '#about' ? 'true' : 'false'" label="About">
        <h1>About</h1>
        <p>アバウトアバウトアバウトアバウトアバウトアバウト</p>
        <p>アバウトアバウトアバウトアバウトアバウトアバウト</p>
        <p>アバウトアバウトアバウトアバウトアバウトアバウト</p>
        <p>アバウトアバウトアバウトアバウトアバウトアバウト</p>
        <p><a href="#">ほげほげ</a></p>
      </section>

      <section id="tabContainer3" role="tabpanel" v-show="hash == '#contact'" :aria-hidden="hash == '#contact' ? 'true' : 'false'" label="Contact">
        <h1>Contact</h1>
        <p>コンタクトコンタクトコンタクトコンタクトコンタクト</p>
        <p>コンタクトコンタクトコンタクトコンタクトコンタクト</p>
        <p>コンタクトコンタクトコンタクトコンタクトコンタクト</p>
        <p>コンタクトコンタクトコンタクトコンタクトコンタクト</p>
        <p><a href="#">ほげほげ</a></p>
      </section>
    </main>
  <!-- container --></div>
</template>

<script>

import Store from './store/index'
import GHeader from './components/GHeader.vue'

export default {
  data: function(){
    return Store.state
  },
  computed: {

  },
  methods: {

  },
  components: { GHeader }
}
</script>
