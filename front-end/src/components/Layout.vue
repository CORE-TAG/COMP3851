<template>
  <div>
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <div style="margin-top: 5px">
            <img src="../assets/logo.png" fit="contain" style="width: 50px" />
            <img src="../assets/psb.png" fit="contain" style="width: 60px" />
          </div>
          <el-menu-item
            v-for="(item, index) in navText"
            :key="index"
            :index="item.id"
            ><a
              @click.prevent="anchor(item.name)"
              style="
                font-family: 'Helvetica Neue';
                font-size: 20px;
                font-weight: bolder;
                width: 100%;
                height: 100%;
                display: flex;
                color: black;
              "
              >{{ item.text }}</a
            ></el-menu-item
          >
          <el-menu-item
            index="9"
            ><a
              style="
                font-family: 'Helvetica Neue';
                font-size: 20px;
                font-weight: bolder;
                width: 100%;
                height: 100%;
                display: flex;
                color: black;
              "
              href="/#/qa"
              >Q&A</a
            ></el-menu-item
          >
        </el-menu>
      </el-header>
      <el-main>
        <Overview id="Overview"></Overview>
        <News id="News"></News>
        <Facilities id="Facilities"></Facilities>
        <Clubs id="Clubs"></Clubs>
        <ToSchRoutes id="Navigation"></ToSchRoutes>
        <SchMap id="Map"></SchMap>
        <RoomRental id="RoomRental"></RoomRental>
        <Journal id="Journal">8</Journal>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Overview from "@/components/Overview/index.vue";
import News from "@/components/News/index.vue";
import Facilities from "@/components/Facilities/index.vue";
import Clubs from "@/components/Clubs/index.vue";
import SchMap from "@/components/SchMap/index.vue";
import RoomRental from "@/components/RoomRental/index.vue";
import Journal from "@/components/Journal/index.vue";
import ToSchRoutes from "@/components/ToSchRoutes/index.vue";
export default {
  name: "Layout",
  components: {
    Overview,
    News,
    Facilities,
    Clubs,
    SchMap,
    RoomRental,
    Journal,
    ToSchRoutes,
  },
  data() {
    return {
      navText: [
        { id: 1, name: "Overview", text: "Overview" },
        { id: 2, name: "News", text: "News" },
        { id: 3, name: "Facilities", text: "Facilities" },
        { id: 4, name: "Clubs", text: "Clubs" },
        { id: 5, name: "Navigation", text: "Navigation" },
        { id: 6, name: "Map", text: "Map" },
        { id: 7, name: "RoomRental", text: "Room Rental" },
        { id: 8, name: "Journal", text: "Journal" },
      ],
    };
  },
  methods: {
    anchor(anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  z-index: 2000;
  position: fixed;
  padding: 0;
  width: 100%;
  .el-menu {
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.el-main {
  padding: 0;
}
</style>
