<template>
  <div class="searchapiview annonaview">
    <div class="searchview" v-if="rendered">
      <input v-for="(item, index) in fielddata" v-on:change="search()" v-bind:key="index" v-model="fielddata[index].param" v-bind:placeholder="item.name"/>
      <iiifannotation :key="renderurl" v-if="renderurl" v-bind:annotationurl="renderurl" v-bind:styling="stylingstring" v-bind:manifesturl="manifesturl"></iiifannotation>
    </div>
    <div v-else>
      Error with {{manifesturl}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import shared from './shared';
import iiifannotation from './iiifannotation'

export default {
  name: 'searchapi',
  components: {
    iiifannotation
  },
  props: {
    'fields':{type: String, required: false},
    'manifesturl':{type: String, required: true},
    'searchapi':{type: String, required: false},
    'styling': {type: String, required: false}
  },
  data: function() {
    return {
      renderurl: '',
      stylingstring: '',
      apiurl: '',
      manifest: '',
      rendered: true, 
      fielddata: []
    }
  },
  created() {
    this.fielddata = this.fields ? JSON.parse(this.fields.replace(/'/g, '"')) : [{'name': 'Query', 'key': 'q'}];
    this.settings = shared.getsettings(this);
    this.settings.table_view != false ? this.settings.table_view = true : '';
    for (var key in this.settings){
      this.stylingstring += `${key}:${this.settings[key]};`
    }
    if (!this.searchapi){
      axios.get(this.manifesturl).then(response => {
        this.manifest = response.data;
        if (response.data && response.data.service){
          var servicedata = response.data.service.filter(elem => elem['@context'].indexOf('http://iiif.io/api/search/0/context.json') > -1);
          this.apiurl = servicedata[0]['@id'];
        } else {
          this.rendered = false;
        }
      }).catch((error) => {this.rendered = false; console.log(error);})
    } else {
      this.apiurl = this.searchapi;
    }
  },
  methods: {
    search: function() {
      var url = new URL(this.apiurl);
      for (var i=0; i<this.fielddata.length;i++){
        var data = this.fielddata[i];
        url.searchParams.append(data.key, data.param);
      }
      this.renderurl = url.href;
    }
  }
}
</script>

<style lang="scss">
@import '../iiif-annotation.scss'
</style>
