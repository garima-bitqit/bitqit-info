<template>
  <div class="back">
    <!--<div id="video_box">-->
      <!--<div id="video_overlays"></div>-->
      <!--<div>-->
        <!--<video id="player" src="https://ak8.picdn.net/shutterstock/videos/1010363528/preview/stock-footage-abstract-background-with-shining-bokeh-sparkling-particles-golden-progressive-particle-bookeh.webm" type="video/webm" onclick="this.play();"></video>-->
      <!--</div>-->
    <!--</div>-->
    <!--<video controls preload="true" autoplay loop muted>-->
      <!--<source src="https://ak8.picdn.net/shutterstock/videos/1010363528/preview/stock-footage-abstract-background-with-shining-bokeh-sparkling-particles-golden-progressive-particle-bookeh.webm" type="video/webm" >-->
    <!--</video>-->
    <!-- Material form login -->
    <div class="pad1">
    <div class="card ">

      <h2>
        <strong>Log-in</strong>
      </h2>

      <!--Card content-->
      <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
        <form class="text-center" style="color: #757575;">

          <div class="md-form mar">
            <label>Name</label>
            <input type="text" v-model="namefield"  class="form-control"  placeholder="">
          </div>

          <!-- Password -->
          <div class="md-form mar">
            <label>Password</label>
            <input type="password" v-model="passfield" id="materialLoginFormPassword" class="form-control" placeholder="">
          </div>

          <div class="d-flex justify-content-around">

            <div>
              <!-- Forgot password -->
              <b-button style="" variant="link" @click="send()">Forgot password</b-button>
            </div>

          </div>

          <!-- Sign in button -->
          <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  @click="checkData">Sign in</button>

          <!-- Register -->
          <p>Not a member?
            <router-link :to="{name:'register'}">Register</router-link>
          </p>


        </form>
        <!-- Form -->

      </div>

    </div>
    <!-- Material form login -->
</div>
  </div>
</template>

<script>

   export default {
    name: 'Data',
    props: {
      name2: {
        type:String,
      },
      pass2: {
        type:String,
      },
    },
    data() {
      return {
        namefield:'',
        passfield:'',
        name1:'garima',
        pass1: 'garima1234',
      };
    },
    methods: {

      checkData() {
        console.log(this.name2);
        console.log(this.pass2);
        if (this.namefield === this.name1 && this.passfield === this.pass1) {
          this.$router.push({
            name: 'HelloWorld',
            params: { HelloWorld: 1 },
          });
        }
        else if (this.namefield === this.name2 && this.passfield === this.pass2) {
          this.$router.push({
            name: 'HelloWorld',
            params: { HelloWorld: 1 },
          });
        }
        else if(this.namefield==='' || this.passfield===''){
          alert("name and pass both fields are required");
        }
        else if(this.namefield!==this.name1 || this.passfield!==this.pass1){
          alert("name or pass is incorrect");
        }
        else if(!(this.namefield===NaN)){
          alert("name cant be only digits. It should be combination of both or only alphabets");
        }

      },

      send() {
        if(this.namefield===this.name1) {
          this.$router.push({
            name: 'password',
            params: { field: this.namefield },

          });
        }
        else if(this.namefield===''){
          alert("please provide name");
        }
        else {
            alert("You are not registered with us.kindly register first");
        }

      },
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mar{
    text-align: left;
    color: #fff;
  }

  .mar label{
font-size: 12px;
    font-weight: 600;
  }

  .pad1{
    padding-top:100px;
    padding-bottom:600px ;
    padding-left:550px ;
    padding-right:550px;
  }
  .mar{
    margin-top: 20px;
  }
  .back {
    background-image: url("http://www.1zoom.me/big2/635/295721-alexfas01.jpg"), linear-gradient(#eb01a5, #d13531);;
    height: 100%;
    width: 100%;
    background-size: cover;

  }
  input{
    background-color: aliceblue;
  }

  .card h2 strong{
    color: #fff;
  }

  .b1{
    /*background-image: url("https://ae01.alicdn.com/kf/HTB1PjezXiOYBuNjSsD4q6zSkFXam/Small-size-backgrounds-for-baby-Cake-backdrop-photography-background-white-wood-floor-backdrop-D-3516.jpg_640x640.jpg");*/
  }
  .card{
    background-color:rgba(0,0,0,.075);
    border: 0px solid black;
    box-shadow: 0px 0px 40px #000;
  }
  .form-control{
    border-radius: 0rem;
  }

  .md-form input{
    height: 35px;
    border-radius: 3px !important;
    border: none !important;
  }

  h2{
    text-align:center;
    padding-top:30px;
    font-size: 2.5rem;
    font-family: auto;
    font-weight: 300;
  }
  p{
    color:white;
    font-size: 12px;
    font-weight: 600;
  }
  .btn-outline-info{
    color: #17a2b8;
  background-color: #fd107d;
    border-color: #fd107d !important;
    border-radius: 3px !important;
  }
  .btn{
    color:white;
  }

  .btn-outline-info:not(:disabled):not(.disabled):active, .show>.btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #fd107d;
    border-color: #fd107d !important;
  }

  .justify-content-around button{
    text-align: center;
    font-size: 12px;
    font-weight: 600;

  }

  .btn-outline-info{
    height: 35px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
  }
  a{
    color:#fd107d;
  }
  d-flex justify-content-around b-button{
    color:#fd107d;
  }
  #bgVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    z-index: -100;
    background-size: cover;
  }
  #video_box{
    float:left;
  }
  #video_overlays {
    position:absolute;
    float:left;
    width:640px;
    min-height:370px;
    background-color:#000;
    z-index:300000;
  }


</style>
