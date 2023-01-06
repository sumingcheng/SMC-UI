<template>
  <div>
    <el-steps :active="1" class="stepStyle">
      <el-step>
        <template v-slot:description>
          <div class="topText">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
        </template>
      </el-step>
      <el-step>
        <template v-slot:description>
          <div class="topText">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
        </template>
      </el-step>
      <el-step>
        <template v-slot:description>
          <div class="topText">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
        </template>
      </el-step>
      <el-step>
        <template v-slot:description>
          <div class="topText">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
          <div class="topTextNmt">测试文字：2023年1月6日 09:51:19</div>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepInforArr: [ '事件上报', '确认发布', '平台接收', '采纳情况' ],
    };
  },
  created() {
    this.informationViewing();
  },
  methods: {
    informationViewing() {
      this.informaDalogin = true;
      this.$nextTick(() => {
        const stepDom = document.querySelectorAll('.el-step__icon-inner');
        stepDom.forEach((elem, index) => {
          elem.textContent = this.stepInforArr[index];
          if (index === stepDom.length - 1) {
            elem.className = 'overwritePseudoElements';
            // let pseudoElement = window.getComputedStyle(elem, '::after');
            // console.log(pseudoElement);
            // console.log(pseudoElement.className = 'overwritePseudoElements');
          }
        });
      });
    },
  }
};
</script>

<style lang="scss" scoped>
::v-deep .stepStyle {
  margin: 0 10%;
  padding: 20px;
  //完成
  .is-finish {
    .el-step__icon {
      width: 120px;
      height: 35px;
      font-size: 16px;
      color: #FFFFFF;
      background: #084383;
      border: 1px solid #084383;
      border-radius: 15.75px !important;
      padding: 0.3rem 1.2rem;
      text-align: center;
    }
  }

  //准备
  .is-process {
    .el-step__icon {
      width: 120px;
      height: 35px;
      font-size: 16px;
      color: #084383;
      background: #fff;
      border: 1px solid #084383;
      border-radius: 15.75px !important;
      padding: 0.3rem 1.2rem;
      text-align: center;
    }
  }

  //等待
  .is-wait {
    .el-step__icon {
      width: 120px;
      height: 35px;
      font-size: 16px;
      color: #084383;
      background: #FFFFFF;
      border: 1px solid #084383;
      border-radius: 15.75px !important;
      padding: 0.3rem 1.2rem;
      text-align: center;
    }
  }

  .el-step__icon-inner {
    font-weight: 400;
  }

  .el-step__icon-inner {
    &::after {
      font-family: element-icons;
      content: '\e791';
      position: absolute;
      top: 6.5px;
      right: -14px;
      color: #084383;
      font-size: 22px;
    }
  }

  .overwritePseudoElements {
    &::after {
      display: none;
    }
  }

  .el-step__line {
    top: 17px !important;
    background: #084383;
  }

  .topText {
    margin-top: 1.8rem;
    font-size: 12px;
    color: #657890;
  }

  .topTextNmt {
    font-size: 12px;
    color: #657890;
  }
}
</style>
