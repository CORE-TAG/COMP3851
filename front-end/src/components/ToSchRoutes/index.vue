<template lang="">
  <div>
    <h1 style="display: flex; justify-content: center">Navigation</h1>
    <h2>Elevators</h2>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="8" v-for="item in elevators" :key="item.id">
        <div style="margin-top: 15px">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="showDetail1(item.id)"
          >
            <img :src="item.image" class="image" />
            <div style="padding: 14px">
              <span>{{ item.brief }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <h2>Circle Line</h2>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="8" v-for="item in circleLines" :key="item.id">
        <div style="margin-top: 15px">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="showDetail1(item.id)"
          >
            <img :src="item.image" class="image" />
            <div style="padding: 14px">
              <span>{{ item.brief }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <h2>Dowtown Line</h2>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="8" v-for="item in downtownLines" :key="item.id">
        <div style="margin-top: 15px">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="showDetail1(item.id)"
          >
            <img :src="item.image" class="image" />
            <div style="padding: 14px">
              <span>{{ item.brief }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <h2>Bus</h2>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="8" v-for="item in buss" :key="item.id">
        <div style="margin-top: 15px">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click.native="showDetail1(item.id)"
          >
            <img :src="item.image" class="image" />
            <div style="padding: 14px">
              <span>{{ item.brief }}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <RoutesDetail
      :show="show"
      :idUrl="idUrl"
      @close="() => (show = false)"
    ></RoutesDetail>
  </div>
</template>
<script>
import requests from "@/api/index.js";
import RoutesDetail from "@/components/RoutesDetail/index.vue";

export default {
  name: "ToSchRoutes",
  components: {
    RoutesDetail,
  },
  data() {
    return {
      elevators: [],
      circleLines: [],
      downtownLines: [],
      buss: [],
      show: false,
      idUrl: "",
    };
  },
  mounted() {
    let that = this;
    requests({
      method: "get",
      url: "elevator",
    }).then(function (response) {
      that.elevators = response.results;
    });
    requests({
      method: "get",
      url: "circle-line",
    }).then(function (response) {
      that.circleLines = response.results;
    });
    requests({
      method: "get",
      url: "downtown-line",
    }).then(function (response) {
      that.downtownLines = response.results;
    });
    requests({
      method: "get",
      url: "bus",
    }).then(function (response) {
      that.buss = response.results;
    });
  },
  methods: {
    showDetail0(id) {
      this.show = true;
      this.idUrl = "elevator/" + id;
    },
    showDetail1(id) {
      this.show = true;
      this.idUrl = "circle-line/" + id;
    },
    showDetail2(id) {
      this.show = true;
      this.idUrl = "downtown-line/" + id;
    },
    showDetail3(id) {
      this.show = true;
      this.idUrl = "bus/" + id;
    },
  },
};
</script>
<style lang="less" scoped>
.image {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
}
</style>
