<template>
  <div>
    <h1 style="display: flex; justify-content: center">Facilities</h1>
    <el-row :gutter="20" style="padding: 0 20px 0 20px; height: 45em;">
      <el-col :span="10" style="margin-top: -15px">
        <h1>{{ facility.title }}</h1>
        <div class="content" v-html="facility.content"></div>
      </el-col>
      <el-col :span="14">
        <img :src="facility.cover" class="image" />
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
  name: "Facilities",
  data() {
    return {
      facilities: [],
      facility: {},
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
      that.facilities = response.results;
      requests({
        method: "get",
        url: "news/" + that.facilities[0].id,
      }).then(function (response1) {
        that.facility = response1;
      });
    });
  },
  methods: {
    changePage(page) {
      let that = this;
      requests({
        method: "get",
        url: "news/" + that.facilities[page].id,
      }).then(function (response) {
        that.facility = response;
      });
    },
  },
};
</script>

<style lang="less" scoped>
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
