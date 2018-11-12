<template>
<div class="h">

  <div class="mar1">
          <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Find-books</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav>
                <!--<b-nav-item href="#">Link</b-nav-item>-->
                <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-form @submit.prevent="handleSubmit">
                  <b-form-input size="sm"  type="text" v-model="text" v-validate="'required'" v-on:input="debounceInput" name="text" class="form-control mr-sm-2" :class="{ 'is-invalid': submitted && errors.has('firstName') }" placeholder="Name"/>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="getData()">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Search by" right>
                  <b-dropdown-item >Author</b-dropdown-item>
                  <b-dropdown-item ><router-link :to="{name:'Hello'}">title</router-link></b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>

                  <template slot="button-content">
                    <em>User</em>
                  </template>

                  <b-dropdown-item><router-link :to="{name:'register'}">profile</router-link></b-dropdown-item>
                  <b-dropdown-item><router-link :to="{name:'Data'}">Sign out</router-link></b-dropdown-item>

                </b-nav-item-dropdown>
              </b-navbar-nav>

            </b-collapse>
          </b-navbar>

      </div>

  <div  class="mar2" v-if="click1===true" >
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-for="p in paginatedData">
                        {{p.title_suggest}}
                            <b-button @click="getTitle(p.title_suggest)" variant="primary">
                                <span class="glyphicon glyphicon-th-list"></span>
                                  Print</b-button>
                      </li>
                    </ul>
                </div>


          <div class="mar3" v-if="click1===true">
            <button @click="firstPage()" class="btn btn-primary" :disabled="pageNumber===0">
              1
            </button>
            <button @click="secondPage()" class="btn btn-primary" >
              2
            </button>
            <button @click="thirdPage()" class="btn btn-primary">
              3
            </button>
          <button @click="prevPage" class="btn btn-primary" :disabled="pageNumber===0">
             <<<
           </button>
          <button @click="nextPage" class="btn btn-primary" :disabled="pageNumber >= pageCount -1">
             >>>
          </button>
         </div>

</div>
</template>

<script>
  import _ from 'lodash';
  const Axios = require('axios');
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: '',
      kkk: 'nasa',
      response: '',
      pageNumber: 0,
      click1: false,
      submitted: false,
      filterKey: '',
    };
  },

  methods: {
    async getData() {
      const resp = await Axios.get(`http://openlibrary.org/search.json?author=${this.text}`);
      let spch = /[A-z\s]/ig;
      let dig = /[0-9]/g;
      let ln = this.text.length;
      let j = 1;
      for (let i = 0; i < ln; i++) {
        let k = this.text.slice(i, j);
        if (spch.test(k) === false) {
          this.click1 = false;
          alert("Invalid name");
          this.response.docs = '';
          break;
        }
        else{
          this.click1 = true;
          this.response = resp.data.docs;
          this.response = JSON.parse(this.response);

        }

        j++;
      }

    },
    // this.$router.push({
    //   name: 'Data',
    //   params: { Data: this.response},
    // });


    debounceInput: _.debounce(function () {
      this.getData();
    }, 10),


    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate()
        .then(valid => {
          if (!valid) {
            alert('it should not be empty :-)');
          }
        });
    },

    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    firstPage(){
      this.pageNumber=0;
    },
    secondPage(){
      this.pageNumber=1;
    },

    thirdPage(){
      this.pageNumber=2;
    },


    getTitle(data1) {
      this.$router.push({
        name: 'title1',
        params: { title1: data1 },
      });
    },
  },
    computed: {
      pageCount() {
        let l = this.response.length;
        return Math.floor(l / 5);
      },
      paginatedData() {
        const start = this.pageNumber * 5,
          end = start + 5;
        return this.response.slice(start, end);
      }
    },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h{
    height:800px;
    background: url("https://www.incimages.com/uploaded_files/image/970x450/getty_549933903_2000133320009280405_105293.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mar1{
    height:10%;
  }
  .mar2{
    margin: 90px;
    color: #040404;
    background-color: #f8f9fa5e;
  }
  .mar3{
    height:10%;
  text-align: center;
  }
  .list-group-item{
    background-color: #fff0;
    border: 1px solid rgba(0,0,0,.125);
  }

  .flip-box {
    /*background-color: transparent;*/
    /*width: 300px;*/
    /*height: 200px;*/
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin: 90px;
    color: #040404;
    background-color: #f8f9fa5e;
  }

  /* This container is needed to position the front and back side */
  .flip-box-inner  list-group-item{
    background-color: #fff0;
    border: 1px solid rgba(0,0,0,.125);
    position: relative;
    /*width: 100%;*/
    /*height: 100%;*/
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-box-front {
    background-color: #fff0;
    color: white;
  }

  /* Style the back side */
  .flip-box-back {
    background-color: #fff0;
    color: white;
    transform: rotateY(180deg);
  }

</style>
