<template>
  <div>
    <h1 style="display: flex; justify-content: center">Clubs</h1>
    <el-row :gutter="20" style="padding: 0 20px 0 20px; height: 45em">
      <el-col :span="14">
        <img :src="club.cover" class="image" />
      </el-col>
      <el-col :span="10" style="margin-top: -15px">
        <h1>{{ club.title }}</h1>
        <div class="content" v-html="club.content"></div>
      </el-col>
    </el-row>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :pageSize="1"
      @current-change="changePage"
      style="display: flex; justify-content: center; margin-top: 10px"
    >
    </el-pagination>
  </div>
</template>

<script>
import requests from "@/api/index.js";

export default {
  name: "Clubs",
  data() {
    return {
      clubs: [],
      club: {},
      total: 0,
    };
  },
  mounted() {
    let that = this;
    requests({
      method: "get",
      url: "news",
      params: {
        limit: 999999,
      },
    }).then(function (response) {
      that.total = response.count;
      that.clubs = response.results;
      requests({
        method: "get",
        url: "news/" + that.clubs[0].id,
      }).then(function (response1) {
        that.club = response1;
      });
    });
  },
  methods: {
    changePage(page) {
      let that = this;
      requests({
        method: "get",
        url: "news/" + that.clubs[page].id,
      }).then(function (response) {
        that.club = response;
      });
    },
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 45em;
  display: block;
  object-fit: cover;
}
.content {
  font-size: 20px;
}
</style>
