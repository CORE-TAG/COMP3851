<template lang="">
  <div>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      round
      style="margin: 10px"
      @click="back"
      >返回</el-button
    >
    <el-row
      style="display: flex; justify-content: center; margin: 0 20vh 0 20vh"
    >
      <el-card style="width: 100%"
        ><p>Q: What is the primary purpose of this website?</p>
        <p>
          A: The primary purpose of this website is to assist new students in
          familiarizing themselves with PSB Academy in Singapore, its
          facilities, student societies, academic, and social resources. It aims
          to provide all necessary information to ease the transition and
          integrate new students into campus life.
        </p></el-card
      >
    </el-row>
    <el-row
      style="display: flex; justify-content: center; margin: 20px 20vh 0 20vh"
    >
      <el-card style="width: 100%"
        ><p>
          Q: I'm a new student. How can I find out more about the different
          facilities at the school?
        </p>
        <p>
          A: Our website features a dedicated section for school facilities.
          Here, you can find detailed information about various facilities,
          including their location, open hours, and any relevant policies.
        </p></el-card
      >
    </el-row>
    <el-row
      style="display: flex; justify-content: center; margin: 20px 20vh 0 20vh"
    >
      <el-card style="width: 100%"
        ><p>
          Q: I'm interested in joining student clubs and societies. Where can I
          find more information?
        </p>
        <p>
          A: We have a 'Student Societies' page that provides an overview of all
          student-led clubs and societies. Each listing provides a brief
          description of the society, its mission, and information on how to
          join or who to contact for more information.
        </p></el-card
      >
    </el-row>
    <el-row
      style="display: flex; justify-content: center; margin: 20px 20vh 0 20vh"
    >
      <el-card style="width: 100%"
        ><p>Q: How can I access the campus map?</p>
        <p>
          A: You can access the campus map through the 'Interest Map' section of
          our website. This map is equipped with a Google API feature that shows
          the exact geographical location of different campus facilities and
          landmarks.
        </p></el-card
      >
    </el-row>
    <el-row
      style="display: flex; justify-content: center; margin: 20px 20vh 0 20vh"
    >
      <el-card style="width: 100%"
        ><p>
          Q: I'm having trouble finding my way to school. Is there any guidance
          on the best routes?
        </p>
        <p>
          A: Yes, we have a 'New Student Guide' section that includes pictures
          and texts explaining the best routes to reach the school from
          different parts of the city.
        </p></el-card
      >
    </el-row>
    <el-row
      style="
        display: flex;
        justify-content: center;
        margin: 20px 20vh 20px 20vh;
      "
    >
      <el-card style="width: 100%"
        ><p>
          Q: I'm looking for affordable and delicious food options near the
          school. Where can I find this information?
        </p>
        <p>
          A: Our website's 'Interest Map' section also includes information
          about local amenities, including the best, most affordable food
          options around the campus.
        </p></el-card
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "QAadA",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang=""></style>
