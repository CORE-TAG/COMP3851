<template lang="">
  <div>
    <el-dialog
      title="Detail"
      width="70%"
      :visible="show"
      @close="$emit('close')"
    >
      <el-row :gutter="30" style="margin-top: -20px">
        <el-col :span="12">
          <img :src="detail.cover" class="image" />
        </el-col>
        <el-col :span="12" style="margin-top: -15px">
          <h1>{{ detail.title }}</h1>
          <time class="time">{{ detail.created_time }}</time>
          <div class="content" v-html="detail.content"></div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import requests from "@/api/index.js";
export default {
  name: "DetailCard",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    idUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      detail: {},
    };
  },
  watch: {
    idUrl() {
      let that = this;
      console.log(that.idUrl)
      requests({
        method: "get",
        url: that.idUrl,
      }).then(function (response) {
        that.detail = response;
      });
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.image {
  width: 100%;
  display: block;
  object-fit: cover;
}
.time {
  font-size: 13px;
  color: #999;
}
.content {
    font-size: 16px;
}
</style>
