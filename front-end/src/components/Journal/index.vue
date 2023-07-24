<template lang="">
  <div>
    <h1 style="display: flex; justify-content: center">Journal</h1>
    <el-row>
      <el-card class="card">
        <p>Dear new PSB students,</p>
        <p>
          Welcome to our big family! I am your senior and the writer of this
          letter. I hope this letter can answer some of the questions you may
          have when you first arrive in a new environment and help you integrate
          into our campus faster and better.
        </p>

        <p>
          First of all, I would like to recommend Pizza Hut on the third floor
          of the school. I personally love the pizza and grilled chicken wings
          there, they taste really good. As PSB students, we also have a special
          offer - just show your student ID and get a 20% discount. I'm always
          full of energy and feel like my whole body is rejuvenated after every
          Pizza Hut meal. This is a little secret that you can't miss.
        </p>

        <p>
          And then I want to say something about immigration. If you are an
          international student, I would recommend that you go to ICA as early
          as possible to take care of the paperwork. It's very popular there and
          if you go late, you might need to wait in a long line. I don't think
          anyone likes to waste time on queuing, right? So make sure you get up
          early and go ahead of others to process it.
        </p>
        <p>
          The next thing I would like to remind you is that you may need to use
          your bank card to pay before you get your student card. I suggest you
          get a DBS card. All they need is your IPA to process it, which is very
          convenient. Also, when you apply for a bank card, remember to email
          your school for proof of address documents.
        </p>
        <p>
          Lastly, I would like to tell you a good news. The food court on the
          third floor of the school has great discounts. You can find a wide
          variety of food there at affordable prices, and it's definitely good
          value for money.
        </p>
        <p>
          I hope this letter will help you have a good start when you first
          arrive on campus. Of course, if you have any questions about your life
          or studies, feel free to ask us seniors for help. We will be happy to
          help you answer your questions and spend this wonderful university
          time together.
        </p>
        <p>
          We wish you all the best in your life at PSB University and look
          forward to meeting you on campus!
        </p>
        <p>Blessings to you.</p>
        <p>Your seniors</p>
      </el-card>
    </el-row>
    <el-row style="display: flex; justify-content: center; margin-top: 20px">
      <video
        src="@/assets/exp.mp4"
        style="width: 80%; height: 700px"
        controls
      ></video>
    </el-row>
    <el-row
      :gutter="30"
      style="display: flex; justify-content: center; margin-top: 20px;margin-bottom:20px"
    >
      <el-col :span="6"
        ><el-card style="height: 250px"
          ><p>Testimonial from John Li:</p>
          <p>
            "PSB Academy provided a transformative learning experience. The
            real-world curriculum and globally-recognized partnerships prepared
            me for my future. The professors are knowledgeable and helpful,
            making PSB an ideal place to study."
          </p></el-card
        ></el-col
      >
      <el-col :span="6"
        ><el-card style="height: 250px">
          <p>Testimonial from Mei Wong:</p>
          <p>
            "Studying at PSB Academy was enriching. The multicultural
            environment fostered an international mindset, and the practical
            focus of the curriculum made learning engaging and relevant. I
            gained invaluable industry exposure."
          </p>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card style="height: 250px">
          <p>Testimonial from Ananya Patel:</p>
          <p>
            "PSB Academy offers a rigorous academic program with strong student
            support. The passionate professors nurtured my critical thinking
            skills. Studying in a cosmopolitan city like Singapore broadened my
            horizons and enriched my life experiences."
          </p>
        </el-card></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Journal",
};
</script>
<style lang="less" scoped>
.card {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1.1em;
}
</style>
