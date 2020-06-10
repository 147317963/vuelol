<template>
    <div class="bet-keyboard">
        <section class="content">
            <div class="content__btn--number" @click.stop="inputAmount(item,1)">1
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,2)">2
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,3)">3
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,4)">4
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,5)">5
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,6)">6
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,7)">7
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,8)">8
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,9)">9
            </div>
            <div class="content__btn--number" @click.stop="inputAmount(item,0)">0
            </div>
        </section>
        <section class="content">
            <div class="content__btn--betMax"
                 :class="[addClass('content__btn--overBetMax',item)]"
                 @click.stop="item['bet_money']=String(item['bet_limit'][1])">
                <div>最大投注</div>
                <div class="limit-stake">{{item['bet_limit'][1]}}</div>
            </div>
            <div class="content__btn--delete"
                 @click.stop="item['bet_money']=item['bet_money'].substring(0,item['bet_money'].length-1)">
                <i class="delete-icon"></i>
            </div>
            <div class="content__btn--confirm" @click.stop="confirm(item)">
                <div>确认</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "BetKeyboard",
        data() {
            return {
                keyboardNumber: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
            }
        },
        methods: {//条用方法
            setStakeValue(){

            },
            deleteStake(){

            },
            hideKeyboard(){

            }
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
