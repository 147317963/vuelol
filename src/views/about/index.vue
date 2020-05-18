<template>
    <div  class="about-page router-view">
        <div  class="raybet-logo"></div>
        <div  class="raybet-slogan">最佳电竞即时投注</div>
        <div  class="newbee-logo"></div>
        <div  class="newbee-slogan">Newbee官方主赞助商</div>
        <div  class="mga-logo"></div>
        <section  class="about-des">
            <div >RAYBET雷竞技是注册在欧洲马耳他的合法博彩公司</div>
            <div >受马耳他博彩管理委员会(MGA)及其政府监管并</div>
            <div >遵守欧洲游戏和博彩协会(EGBA)制定的行为和准则</div>
        </section>
        <section  class="about-icon">
            <div  class="icon-content">
                <div  class="mga-icon"></div>
                <div >MGA</div>
            </div>
            <div  class="icon-content">
                <div  class="moneygarm-icon"></div>
                <div >moneygarm</div>
            </div>
            <div  class="icon-content">
                <div  class="adult-icon"></div>
                <div >满18岁</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "about",
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

<style lang="less" scoped>
    .about-page {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .about-page .raybet-logo {
        margin-top: 64.7012px;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 140px;
        height: 140px;
        background-size: cover;
        background-image: url("~@/assets/images/svg/login_logo.svg");
    }
    .about-page .raybet-slogan {
        margin-top: 8.08768px;
        font-size: 1.6rem;
        color: #758bb5;
    }
    .about-page .newbee-logo {
        margin-top: 99.4781px;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 69px;
        height: 80px;
        background-image: url("~@/assets/images/svg/newbee_logo.svg");
    }
    .about-page .newbee-slogan {
        margin-top: 4.85259px;
    }
    .about-page .mga-logo {
        margin-top: 3.98406vh;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 146px;
        height: 29px;
        background-image: url("~@/assets/images/svg/mga_logo.svg");
    }
    .about-page .about-des {
        margin-top: 6.4701px;;
        padding-left: 50px;
        padding-right: 50px;
        font-size: 1rem;
        color: #758bb5;
    }
    .about-page .about-icon {
        width: 100%;
        margin-top: 1.59363vh;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-left: 26.66667vw;
        padding-right: 26.66667vw;
        font-size: 1.2rem;
        color: #526585;
    }
    .about-page .about-icon .icon-content, .about-page .about-icon {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .about-page .about-icon .icon-content {
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .about-page .about-icon .icon-content .mga-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        background-image: url('~@/assets/images/svg/mag.svg');
    }
    .about-page .about-icon .icon-content .moneygarm-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        background-image: url('~@/assets/images/svg/moneygarm.svg');
    }
    .about-page .about-icon .icon-content .adult-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        background-image: url('~@/assets/images/svg/adult.svg');
    }
</style>
