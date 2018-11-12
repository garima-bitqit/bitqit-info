<template>
  <div class="back">
    <!-- Material form login -->
    <div class="pad1">
    <div class="card">

      <h2 class=" b1">
        <strong>Change password</strong>
      </h2>

      <!--Card content-->
      <div class="card-body px-lg-5 pt-0">
        <!-- Form -->
        <form class="text-center" style="color: #757575;">
          <!-- Password -->
          <div class="md-form mar">
            <label>Password</label>
            <input type="password" v-model="passfield" id="materialLoginFormPassword" class="form-control" placeholder="">

          </div>
          <div class="mar">
          <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  @click="sendData()">Submit</button>
            </div>
        </form>
      </div>

    </div>
    <!-- Material form login -->

  </div>
    </div>
</template>

<script>

  export default {
    name: 'password',
    props : {
      field: {
        type: String,
      },
    },
    data() {
      return {
        passfield:'',
      };
    },

    methods: {
      sendData() {
        if(this.passfield!=='') {
          this.$router.push({
            name: 'register1',
            params: { name2: this.field, pass2: this.passfield },
          });
        }
        else{
          alert("please provide password");
        }
      }
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
    padding-top: 20px;
  }
  .back {
    background-image: url("https://wallpapertag.com/wallpaper/full/9/4/7/266371-large-background-1920x1200-for-android-50.jpg"), linear-gradient(#eb01a5, #d13531);;
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
    background-color: #183d5f;
    border: 0px solid black;
    box-shadow: 0px 0px 40px #000;
    padding-bottom:40px;
  }
  .form-control{
    border-radius: 30px;
  }

  .md-form input{
    height: 35px;
    border-radius: 30px !important;
    border: none !important;
  }

  h2{
    text-align:center;
    padding-top:30px;
    font-size: 2.5rem;
    font-family: auto;
    font-weight: 100;
  }
  p{
    color:white;
    font-size: 12px;
    font-weight: 600;
  }
  .btn-outline-info{
    color: #17a2b8;
    background-color: #2a6492;
    border-color: #2a6492 !important;
    border-radius: 30px !important;
  }
  .btn{
    color:white;
  }

  .btn-outline-info:not(:disabled):not(.disabled):active, .show>.btn-outline-info {
    color: #fff;
    background-color:#2a6492;
    border-color: #2a6492 !important;
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


</style>
