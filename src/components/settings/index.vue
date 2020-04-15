<template>
    <div class="setting router-view">
        <div><!---->
            <div class="weui-cells vux-no-group-title">
                <div class="weui-cell">
                    <div class="weui-cell__hd"></div>
                    <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">姓名</label></p> <span
                            class="vux-label-desc"></span></div>
                    <div class="weui-cell__ft"><p class="cell-text">朱新勤</p> <!----></div>
                </div>
                <div class="weui-cell vux-tap-active weui-cell_access">
                    <div class="weui-cell__hd"></div>
                    <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">修改手机号码</label></p>
                        <span class="vux-label-desc"></span></div>
                    <div class="weui-cell__ft"><p class="cell-text">136 7779 8311</p> <!---->
                    </div>
                </div>
                <div class="weui-cell vux-tap-active weui-cell_access">
                    <div class="weui-cell__hd"></div>
                    <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">生日</label></p> <span
                            class="vux-label-desc"></span></div>
                    <div class="weui-cell__ft"><p class="cell-text">请选择您的生日</p> <!----></div>
                </div>
            </div> <!----></div>
        <div><!---->
            <div class="weui-cells vux-no-group-title">
                <div class="weui-cell vux-tap-active weui-cell_access">
                    <div class="weui-cell__hd"></div>
                    <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">修改密码</label></p> <span
                            class="vux-label-desc"></span></div>
                    <div class="weui-cell__ft">  <!----></div>
                </div>
            </div> <!----></div>
        <div><!---->
            <div class="weui-cells vux-no-group-title">
                <div class="weui-cell">
                    <div class="weui-cell__hd"></div>
                    <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">登出</label></p> <span
                            class="vux-label-desc"></span></div>
                    <div class="weui-cell__ft">  <!----></div>
                </div>
            </div> <!----></div>
    </div>
</template>

<script>
    export default {
        name: "settings",
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
            //}
        }
    }
</script>

<style scoped>
    .weui-cells {
        margin-top: 1.17647059em;
        background-color: #fff;
        line-height: 1.41176471;
        font-size: 17px;
        overflow: hidden;
        position: relative;
    }
    .vux-no-group-title {
        margin-top: .77em;
    }
    .weui-cells {
        margin-top: 0;
        margin-bottom: 24px;
        background-color: #0c121f!important;
    }
    .weui-cell {
        padding: 10px 15px;
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .weui-cell {
        height: 54px;
        padding-top: 0;
        padding-bottom: 0;
        text-align: left;
        font-size: 1.4rem;
        background-color: #0c121f;
    }
    .vux-cell-primary {
        -ms-flex: 1;
        flex: 1;
    }
    .vux-label {
        word-wrap: break-word;
        word-break: break-all;
    }
    .vux-label, .weui-cell__ft .weui-loading {
        display: inline-block;
    }
    .vux-label-desc {
        font-size: 14px;
        color: #666;
    }
    .weui-cell__ft {
        text-align: right;
        color: #999;
    }
    .setting .cell-text {
        color: #fff;
    }
    .vux-tap-active {
        tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .weui-cell:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        transform-origin: 0 0;
        transform: scaleY(.5);
        left: 15px;
    }
    .weui-cell:before {
        border-top: 1px solid #182031;
    }
    .weui-cell__ft:after {
        width: 8px!important;
        height: 8px!important;
        border-width: 1px 1px 0 0!important;
        border-color: #3f546a!important;
    }
    .weui-cell_access .weui-cell__ft:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: matrix(.71,.71,-.71,.71,0,0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
    .weui-cell_access .weui-cell__ft {
        padding-right: 13px;
        position: relative;
    }

</style>