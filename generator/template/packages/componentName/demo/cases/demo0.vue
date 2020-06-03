<template>
  <div class="page-example-demo">
    write component demo here.
  </div>
</template>

<script>
import { <%=camelName %> } from '@vivo/next-ui';
export default {
  name: '<%=componentName %>-demo',
  title: '标题，可不填',
  describe: '描述，可不填',
  message: '其他说明，可不填',
  components: {
    [<%=camelName %>.name]: <%=camelName %>,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="less">
.page-example-demo {
  font-size: 51px;
  color: #000;
}
</style>
