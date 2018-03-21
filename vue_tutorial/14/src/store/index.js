import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.filter("textPreview", function(value, length = 128){
  let result = value.slice(0,length);
  if(value.length > length){
    result += "...";
  }
  return result;
})

export default new Vuex.Store({
  state: {
    text: "",
    number: 0,
    radio: "radio1",
    radioOptions: [
      {label: "ラジオ1", value: "radio1"},
      {label: "ラジオ2", value: "radio2"},
      {label: "ラジオ3", value: "radio3"},
    ],
    checkboxes: [
      { label: 'チェック1', value: 'check1', checked: false },
      { label: 'チェック2', value: 'check2', checked: false },
      { label: 'チェック3', value: 'check3', checked: false },
    ],
    select: "select1",
    selectOptions: [
      {label: "セレクト1", value: "select1"},
      {label: "セレクト2", value: "select2"},
      {label: "セレクト3", value: "select3"},
    ],
    multiSelect: [],
    multiSelectOptions: [
      {label: "セレクト1", value: "select1"},
      {label: "セレクト2", value: "select2"},
      {label: "セレクト3", value: "select3"},
    ],
    // input:file
    files: [],
  },
  mutations: {
    /**
     * input:fileでsetされたファイル情報
     * @param  {Object} state 最新のstore.state情報
     * @param  {Array} files FileAPI形式のFileオブジェクトが格納された配列
     */
    setFiles: function(state, files){
      //console.log(state, files)
      state.files = Array.from(files).map(function(file){
        let data = {
          name: file.name,
          size: file.size,
          type: file.type
        }

        //console.log(file)

        // 画像ならプレビュー用のdataURLを取得
        if(file.type.startsWith("image/")){
          data.previewImageSrc = window.URL.createObjectURL(file);
        }

        // テキストならプレビュー用にreaderを使用
        if(file.type.startsWith("text/")){
          data.textContent = "loading...";

          let reader = new FileReader();
          reader.onloadend = function(event){
            data.textContent = event.target.result;
          }
          reader.readAsText(file);
        }

        return data;
      });
    }
  }
})
