<template>

</template>

<script>
    export default {
        name: "SendCodeButton",
        props: {
            mobile: String
        },
        data() {
            return {
                enabledSendCode:false,
                buttonText:'获取验证码'
            }
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

</style>
