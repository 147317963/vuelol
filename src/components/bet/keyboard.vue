<template>
    <div class="keyboard-item">
        <div class="bet-keyboard">
            <section class="content">
                <div class="content__btn--number">1
                </div>
                <div class="content__btn--number">2
                </div>
                <div class="content__btn--number">3
                </div>
                <div class="content__btn--number">4
                </div>
                <div class="content__btn--number">5
                </div>
                <div class="content__btn--number">6
                </div>
                <div class="content__btn--number">7
                </div>
                <div class="content__btn--number">8
                </div>
                <div class="content__btn--number">9
                </div>
                <div class="content__btn--number">0
                </div>
            </section>
            <section class="content">
                <div class="content__btn--betMax">
                    <div>最大投注</div>
                    <div class="limit-stake">3000</div>
                </div>
                <div class="content__btn--delete"><i
                        class="delete-icon"></i>
                </div>
                <div class="content__btn--confirm">
                    <div>确认</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "keyboard",
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
    /*隐藏高度*/
    .keyboard-item {
        height: 0;
    }
    .keyboard-item, .show-multiples-keyboard {
        transition: all .2s ease-out;
        overflow: hidden;
    }
    /*    数字按键*/
    .keyboard-item-active {
        height: 104px;
        transition: all .2s ease-out;
        overflow: hidden;
    }

    .bet-keyboard {
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 104px;
        padding: 8px 0;
        background: #182032;
        font-size: 1.6rem;
    }

    .bet-keyboard .content, .bet-keyboard {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content {
        width: calc(100% - 8px);
        color: #fff;
    }

    .bet-keyboard .content__btn--number {
        width: calc((100% - 27px) / 10);
        font-size: 2.2rem;
        font-weight: 300;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content__btn--betMax {
        -ms-flex-direction: column;
        flex-direction: column;
        width: calc(30% - 1.5px);
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content__btn--betMax .limit-stake {
        font-size: 1.3rem;
        line-height: 1.4rem;
    }

    .bet-keyboard .content__btn--delete {
        width: calc((70% - 4.5px) / 2);
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content__btn--delete .delete-icon {
        background-image: url("../../assets/images/svg/qingchu.svg");
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 35px;
        height: 20px;
    }

    .bet-keyboard .content__btn--confirm {
        width: calc((70% - 4.5px) / 2);
        background: #515d75;
        color: #fff;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
</style>