<style>
  .gHeader{background: #f8f8f8; border-bottom: 1px solid #e7e7e7; display: flex; height: 50px; line-height: 50px; left: 0; top: 0; position: absolute; width: 100%;}
  .gHeader .gHeader-logo{text-align: center; width: 100px;}
  .gHeader .gHeader-link-list{}
  .gHeader .gHeader-link-list ul{}
  .gHeader .gHeader-link-list .gHeader-link-item{display: inline-block; height: 100%; width: 100px; text-align: center;}
  .gHeader .gHeader-link-list .gHeader-link-item a{display: inline-block;}
  .gHeader .gHeader-link-itemUnderline{background: #69f; bottom: 0; left: 0; display: block; position: absolute; height: 3px; width: 100px; transition: all 100ms 0s linear;}
</style>

<template>
  <div class="gHeader">
    <div class="gHeader-logo">
      LOGO
    </div>
    <nav class="gHeader-link-list" role="navigation" aria-label="global navigation">
      <ul ref="list" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement"><!--
      --><li itemprop="name" class="gHeader-link-item"><a itemprop="url" href="#" aria-controls="tabContainer1" :aria-selected="state.hash == '' ? 'true' : 'false'" :tabindex="state.hash == '' ? '0' : '-1'" @keyup="onMoveKey">Home</a></li><!--
      --><li itemprop="name" class="gHeader-link-item"><a itemprop="url" href="#about" aria-controls="tabContainer2" :aria-selected="state.hash == '#about' ? 'true' : 'false'" :tabindex="state.hash == '#about' ? '0' : '-1'" @keyup="onMoveKey">About</a></li><!--
      --><li itemprop="name" class="gHeader-link-item"><a itemprop="url" href="#contact" aria-controls="tabContainer3" :aria-selected="state.hash == '#contact' ? 'true' : 'false'" :tabindex="state.hash == '#contact' ? '0' : '-1'" @keyup="onMoveKey">Contact</a></li><!--
      --></ul>
      <span :style="underlineStyle" class="gHeader-link-itemUnderline"></span>
    </nav>
  </div>
</template>

<script>
  const KEYCODE_LEFT  = 37;
  const KEYCODE_RIGHT = 39;

  import Store from '../store/index'

  export default {
    data: function(){
      return {
        itemwidth : 999,
        hashes: [],
        state: Store.state
      }
    },
    mounted: function(){
      // ナビゲーション要素からリンクリストアイテムを取得
      let elList = this.$refs.list;
      let elItems = elList.children;
      let elItemsArr = Array.from(elItems)

      // ナビゲーション子要素の幅を取得
      this.itemwidth = elItems[0].clientWidth;

      // ナビゲーション子要素からhrefを取得し、stateに保存
      this.hashes = elItemsArr.map(function(elItem){
        let hash = elItem.children[0].getAttribute("href");
        if(hash === "#"){
          hash = "";
        }
        return hash;
      });
    },
    computed: {
      underlineStyle: function(){
        let left = -1000;

        try{
          left = 40 + this.itemwidth * ( this.hashes.indexOf(this.state.hash) + 1 );
        }catch(e){}

        return {
          transform: 'translateX(' + left + 'px)'
        }
      }
    },
    methods: {
      /**
       * タブ切り替えをキーボードで可能にする
       */
      onMoveKey: function(e){
        let currentIdx = this.hashes.indexOf(this.state.hash);
        switch(e.keyCode) {
          case KEYCODE_LEFT:
            currentIdx--;
            if( currentIdx == -1 ){
              currentIdx = this.hashes.length - 1;
            }
            break;
          case KEYCODE_RIGHT:
            currentIdx++;
            if( currentIdx == this.hashes.length ){
              currentIdx = 0;
            }
            break;
          default:
            break;
        }
        // location.hashを切り替え
        location.hash = this.hashes[currentIdx];
      }
    },
    components: {  }
  }
</script>
