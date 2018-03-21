<template>
  <div class="container">
    <h1>Form</h1>
    <form @submit.prevent="form_submit" action="/send/hoge" method="POST">
      <div class="form-group">
        <label for="text">テキスト</label>
        <input class="form-control" type="text" name="formtext" id="text" placeholder="ex.)テキストテキスト" v-model="form.text">
      </div>

      <div class="form-group">
        <label for="number">数値</label>
        <input class="form-control" type="number" name="formnumber" id="number" placeholder="ex.)123" v-model.number="form.number">
      </div>

      <div class="form-group">
        <p>ラジオボタン</p>
        <ul class="list-group">
          <li v-for="r in form.radioOptions" class="list-group-item">
            <label>
              <input type="radio" v-model="form.radio" :value="r.value" /> {{r.label}}
            </label>
          </li>
        </ul>
      </div>

      <div class="form-group">
        <p>チェックボックス</p>
        <ul class="list-group">
          <li v-for="c in form.checkboxes" class="list-group-item">
            <label>
              <input type="checkbox" v-model="c.checked" :value="c.value" /> {{c.label}}
            </label>
          </li>
        </ul>
      </div>

      <div class="form-group">
        <label for="select">セレクトボックス（単数）</label>
        <select v-model="form.select" id="select">
          <option v-for="s in form.selectOptions" :value="s.value">{{s.label}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="selectmulti">セレクトボックス（単数）</label>
        <select v-model="form.multiSelect" id="selectmulti" multiple>
          <option v-for="s in form.multiSelectOptions" :value="s.value">{{s.label}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="file">ファイル</label>
        <input type="file" multiple @change="file_change" ref="file" />
      </div>

      <ul v-if="form.files.length > 0">
        <li v-for="(file, index) in form.files">
          #{{index + 1}}
          <ul>
            <li>名前：{{file.name}}</li>
            <li>サイズ：{{file.size}}</li>
            <li>種類：{{file.type}}</li>
            <li v-if="file.previewImageSrc">
              <img :src="file.previewImageSrc" :alt="file.name" class="form-files-imagePreview" />
            </li>
            <li v-if="file.textContent">
              <pre>{{file.textContent | textPreview}}</pre>
            </li>
          </ul>
        </li>
      </ul>

      <button class="btn btn-primary">送信</button>
    </form>
  <!-- container --></div>
</template>

<script>

import Store from './store/index'

export default {
  data: function(){
    return {form: Store.state}
  },
  computed: {

  },
  methods: {
    form_submit: function(event){
      const data = {
        text: this.form.text,
        number: this.form.number,
        radio: this.form.radio,
        checkboxes: this.form.checkboxes
          .filter(v => v.checked)
          .map(v => v.value),
        select: this.form.select,
        multiSelect: this.form.multiSelect
      }
      console.log(data)
      const checkboxes = this.form.checkboxes
        .reduce((o, v) => { o[v.value] = v.checked; return o }, {})
      console.log('checkboxes', checkboxes)
    },
    file_change: function(event){
      const elFile = this.$refs.file;
      const files = elFile.files;
      //console.log(elFile,files)

      // mutationsに処理を委譲
      Store.commit("setFiles", files)
    }
  },
  components: {  }
}
</script>
