<template>
    <div class="empty-list" v-show="show">
        选手正在赛前准备，请耐心等候...
        <div class="base-button empty-btn button--dark">
            <div class="button-border">
                <button type="submit" class="button-content">去参加赛前竞猜</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "empty-list",
        props: {
            show:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        beforeDestroy() {//组件销毁前
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
    .empty-list {
        margin-top: 60px;
        color: #1ad2fe;
    }
    .empty-list .empty-btn {
        width: 150px;
        margin: 20px auto 0;
    }
    .base-button {
        width: 100%;
        height: 40px;
        margin: 8px 0;
        border-radius: 4px;
        background: linear-gradient(90deg,#1efffa,#34cdff);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .button--dark {
        background-image: linear-gradient(90deg,#298a97,#317699);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
    }
    .empty-list .empty-btn {
        width: 150px;
        margin: 20px auto 0;
    }
    .base-button .button-border {
        height: 38px;
        border-radius: 3px;
    }
    .base-button .button-border .button-content, .base-button .button-border {
        width: calc(100% - 2px);
        background-image: linear-gradient(90deg,#21abb1,#2e8fb4);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .button--dark .button-border {
        background-image: linear-gradient(#323e57,#1d2639);
    }
    .base-button .button-border .button-content {
        height: 36px;
        border-radius: 2px;
        border: none;
        color: #fff;
        font-size: 1.4rem;
    }
    .button--dark .button-border .button-content {
        background: #252f44;
    }
</style>
