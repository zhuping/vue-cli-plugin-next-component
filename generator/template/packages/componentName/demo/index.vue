<template>
  <div class="page-example">
    <h1 class="page-title"><%=camelName %></h1>
    <section class="page-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="page-example-section__title" v-html="demo.title"></div>
      <div class="page-example-section__describe" v-html="demo.describe"></div>
      <div class="page-example-section__describe" v-html="demo.message"></div>
      <div class="page-example-section__content">
        <component :is="demo"></component>
      </div>
    </section>
  </div>
</template>

<script>
import Demo0 from './cases/demo0';
export default {
  data() {
    return {
      demos: [Demo0]
    }
  }
};
</script>

<style lang="less">
.page-example {
  .page-example-section {
    margin: 50px 0 120px;
    color: #111a34;
    &__title {
      font-size: 51px;
      text-align: left;
      color: #000;
      font-weight: normal;
      -webkit-text-stroke-width: .5px;
      padding: 0 60px;
    }
    &__describe {
      margin-top: 45px;
      font-size: 36px;
      font-weight: 300;
      color: #666f83;
      padding: 0 60px;
      line-height: 63px;
    }
    &__content {
      margin-top: 51px;
      padding: 0 60px;
    }
  }
}
</style>