<template>
  <div>
    <h1 style="display: flex; justify-content: center">School News</h1>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="8" v-for="item in news.results" :key="item.id">
        <div style="margin-top: 15px">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.cover" class="image" />
            <div style="padding: 14px">
              <span>{{ item.title }}</span
              ><br />
              <div class="bottom clearfix">
                <time class="time">{{ item.created_time }}</time>
                <el-button
                  type="text"
                  class="button"
                  @click="showDetail(item.id)"
                  >Detail</el-button
                >
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="news.count"
      :pageSize="limit"
      @current-change="changePage"
      style="display: flex; justify-content: center; margin-top: 10px"
    >
    </el-pagination>
    <DetailCard :show="show" :idUrl="idUrl" @close="() => (show = false)"></DetailCard>
  </div>
</template>

<script>
import requests from "@/api/index.js";
import DetailCard from "@/components/DetailCard/index.vue";

export default {
  name: "News",
  components: {
    DetailCard,
  },
  data() {
    return {
      news: {},
      limit: 6,
      show: false,
      idUrl: "",
    };
  },
  mounted() {
    let that = this;
    requests({
      method: "get",
      url: "news",
      params: {
        limit: that.limit,
      },
    }).then(function (response) {
      console.log(response);
      that.news = response;
    });
  },
  methods: {
    changePage(page) {
      let that = this;
      requests({
        method: "get",
        url: "news",
        params: {
          limit: that.limit,
          offset: (page - 1) * that.limit,
        },
      }).then(function (response) {
        console.log(response);
        that.news = response;
      });
    },
    showDetail(id) {
      this.show = true;
      this.idUrl = "news/"+id;
    },
  },
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
