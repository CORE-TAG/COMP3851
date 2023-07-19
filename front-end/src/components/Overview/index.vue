<template>
  <div class="block">
    <el-carousel trigger="click" height="63em">
      <el-carousel-item v-for="url in images" :key="url">
        <img :src="url" object-fit="cover" width="100%" height="100%" />
      </el-carousel-item>
    </el-carousel>
    <Musk></Musk>
  </div>
</template>

<script>
import Musk from "@/components/Musk/index.vue";
import requests from "@/api/index.js";

export default {
  name: "Overview",
  components: {
    Musk,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    let that = this;
    requests({
      method: "get",
      url: "overviews",
    }).then(function (response) {
      that.images = response.results;
    });
  },
  methods: {},
};
</script>

<style></style>
