<template>
    <nav class="app-header">
        <ul >
            <li :class="[this.$store.state.headerType ===1 ?'base-icon history-back':'']" @click.stop="$store.state.headerType ===1?$router.go(-1):''">

                <router-link v-if="this.$store.state.headerType ===0" to="/personal" class="base-icon personal-info"></router-link>
            </li>
            <li   :class="[this.$store.state.headerType ===0 ?'home-logo':'']"></li>
            <li   :class="[this.$store.state.headerType ===1 ?'base-icon':'']">
                  <a v-if="this.$store.state.headerType===0"  href="https://www.raycsonline.com/chatwindow.html?siteId=5000342&amp;planId=720" target="_blank" rel="noopener noreferrer" aria-label="customer-service" class="customer-service base-icon service-link"></a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "app-header",
        data() {
            return {

            }
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

    .app-header {
        width: 100%;
        height: 48px;
        position: relative;
        z-index: 4;
        background-color: #090c15;
    }
    .app-header ul .history-back {
        background-image: url("../assets/images/svg/history_back.svg");
    }
    .app-header ul {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        height: 48px;
        font-size: 1.4rem;
    }
    .app-header ul .home-logo {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 31.2%;
        height: 26px;
        background-image: url('../assets/images/svg/logo.svg');
    }
    .app-header ul .personal-info {
        background-image: url('../assets/images/svg/user.svg');
    }
    .app-header ul .service-link {
        background-image: url('../assets/images/svg/kefu.svg');
    }
    .app-header ul .base-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        padding: 22px;
    }

    .app-header ul a {
        display: block;
    }
</style>