<template>
  <div>
    <h1 style="display: flex; justify-content: center">Room Rental</h1>
    <el-row :gutter="20" style="padding: 0 20px 0 20px">
      <el-col :span="6" v-for="item in rooms.results" :key="item.id">
        <div style="margin-top: 15px">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.image" class="image" />
            <div style="padding: 14px">
              <span style="font-size: 20px; font-weight: bolder">{{
                item.name
              }}</span
              ><br />
              <span style="font-size: 17px">📍{{ item.location }}</span>
              <br />
              <a style="font-size: 17px" :href="item.email">📧{{ item.email }}</a>
              <div class="bottom">
                <el-rate
                  :value="item.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <span style="font-size: 17px; font-weight: bold"
                  >${{ item.price }}/month</span
                >
                <!-- <el-button
                  type="text"
                  class="button"
                  @click="showDetail(item.id)"
                  >Detail</el-button
                > -->
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="rooms.count"
      :pageSize="limit"
      @current-change="changePage"
      style="display: flex; justify-content: center; margin-top: 10px"
    >
    </el-pagination>
    <!-- <DetailCard :show="show" :idUrl="idUrl" @close="() => (show = false)"></DetailCard> -->
  </div>
</template>

<script>
import requests from "@/api/index.js";
// import DetailCard from "@/components/DetailCard/index.vue";

export default {
  name: "RoomRental",
  //   components: {
  //     DetailCard,
  //   },
  data() {
    return {
      rooms: {},
      limit: 8,
      show: false,
      idUrl: "",
    };
  },
  mounted() {
    let that = this;
    requests({
      method: "get",
      url: "rooms",
      params: {
        limit: that.limit,
      },
    }).then(function (response) {
      that.rooms = response;
    });
  },
  methods: {
    changePage(page) {
      let that = this;
      requests({
        method: "get",
        url: "rooms",
        params: {
          limit: that.limit,
          offset: (page - 1) * that.limit,
        },
      }).then(function (response) {
        that.rooms = response;
      });
    },
    // showDetail(id) {
    //   this.show = true;
    //   this.idUrl = "rooms/"+id;
    // },
  },
};
</script>

<style scoped>
.score {
  font-size: 17px;
  color: #ffffff;
  border-radius: 5px;
  background-color: #ee6f00;
  padding: 6px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
</style>
