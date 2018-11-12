<template>
  <div class="back">
    <div class="pad1">
    <!-- Material form login -->
    <div class="card">

      <h2 class="b1" >
        <strong>Register</strong>
      </h2>

      <!--Card content-->
      <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
        <form class="text-center" style="color: #757575;">

          <div class="md-form mar">
            <label>Name</label>
            <input type="text" v-model="namefield"  class="form-control" placeholder="">

          </div>
          <!-- Password -->
          <div class="md-form mar">
            <label>Password</label>
            <input type="password" v-model="passfield" id="materialLoginFormPassword" class="form-control" placeholder="">

          </div>

          <div class="d-flex justify-content-around">

          </div>

         <div class="mar">
          <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  @click="checkData()">Submit</button>
</div>
          <!-- Register -->

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
    name: 'register',
    data() {
      return {
        namefield:'',
        passfield:'',
      };
    },
    methods: {
      checkData() {
        if(this.namefield==='' || this.passfield===''){
          alert("name and pass both fields are required and name should not contain only numbers");
        }
        else {
          this.$router.push({
            name: 'register1',
            params: { name2:this.namefield , pass2:this.passfield},
          });
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
    background-image: url("http://digitalresult.com/wp-content/uploads/2015/09/funny-desktop-hd-wallpapers-63.jpeg");
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
    background-color:#0e677b;
    border: 0px solid black;
    box-shadow: 0px 0px 40px #000;
    padding-bottom:40px;
    border-radius:30px;
  }
  .form-control{
    border-radius: 0rem;
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
    font-weight: 300;
  }
  p{
    color:white;
    font-size: 12px;
    font-weight: 600;
  }
  .btn-outline-info{
    color: #17a2b8;
    background-color: #17acc3;
    border-color:#17acc3 !important;
    border-radius: 30px !important;
  }
  .btn{
    color:white;
  }

  .btn-outline-info:not(:disabled):not(.disabled):active, .show>.btn-outline-info {
    color: #fff;
    background-color: #17acc3;
    border-color:  #17acc3 !important;
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
    color:#17acc3;
  }
  d-flex justify-content-around b-button{
    color:  #17acc3;
  }


</style>
