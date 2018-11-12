<template>
  <div class="back">
  <div class="container">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>
          Fields
        </th>
        <th>
          Value
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Title : </td>
        <td>{{r.title_suggest}}</td>
      </tr>
      <tr>
        <td>Author : </td>
        <td>{{r.author_name[0]}}</td>
      </tr>
      <tr>
        <td>Year : </td>
        <td>{{r.publish_year[0]}}</td>
      </tr>
      <tr>
        <td>Place : </td>
        <td>{{r.place[0]}}</td>
      </tr>
      <tr>
        <td>Publisher : </td>
        <td>{{r.publisher[0]}}</td>
      </tr>
      <tr>
        <td>Lang : </td>
        <td>{{r.language[0]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script>
  const Axios = require('axios');

  export default {
    name: 'title1',
    props: {
      title1: {
        type:String,
      },
    },
    data() {
      return {
        r: [],
      };
    },
    created: async function(){
         const resp1 = await
         Axios.get(`http://openlibrary.org/search.json?title=${this.title1}`);
         this.r = resp1.data.docs[0];
         // for(var i =0; i<this.r.length; i++)
         // {
         //   this.arr[i] = this.r[i].title_suggest;
         // }
         this.r = JSON.parse(this.r);
    },

  };
</script>

<style scoped>
  .back{
    background-image: url("http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2v/dp/p02vdpfn.jpg");
    height:1000px;
    width:100%;
    background-size: cover;
    padding-top: 70px;

  }
  element.style {
    padding-top: 50px;
  }
  .container{
    box-shadow: -6px -8px 20px 11px #000;
    background-color: rgba(214, 222, 230, 0.25);
  }
</style>
