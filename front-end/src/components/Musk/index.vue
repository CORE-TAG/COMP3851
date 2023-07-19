<template lang="">
  <div
    id="musk"
    style="
      z-index: 1500;
      position: fixed;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
    "
    v-if="show"
  >
    <el-row
      :gutter="20"
      style="
        display: flex;
        justify-content: center;
        height: 100%;
        background-color:rgb(255,128,0,0.3);
      "
    >
      <el-col :span="10">
        <div>
          <p style="font-size: 35px; color: white; margin-top: 200px">
            Welcome to PSB University Freshman Portal!
          </p>
          <!-- Divider -->
          <hr class="hr-light" />
          <!-- Description -->
          <p style="font-size: 25px; color: white">
            Are you a new student at PSB University? Our website is specifically
            designed to assist newcomers like you in navigating campus life and
            the surrounding environment. We understand that starting university
            can be overwhelming, which is why we offer a comprehensive range of
            services to address any challenges you may encounter.
            <br />
            <br />
            Our portal serves as a one-stop solution, providing essential
            information on campus life, course details, accommodation options,
            and much more. Let us walk you through the key features of our
            website:
          </p>
        </div>
        <el-button @click="close()" style="background-color: rgb(0,0,0,0); font-size: 25px; color: white" size="medium" > Get it! </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Musk",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
<style lang=""></style>
