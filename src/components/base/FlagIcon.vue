<template>
    <div class="flag-icon" :class="iconStyle()">
        <span>{{win === winStatus['胜'].win ? '胜':'败'}}</span>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "FlagIcon",
        props: {
            win: {
                type: Number,
                default: -1
            }
        },
        computed: {
            ...mapGetters([
                'winStatus',
            ])
        },
        data() {
            return {}
        },
        methods: {//条用方法
            iconStyle () {
                return this.win === 1 ? "flag-win" : "flag-lose"
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
    .flag-icon {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 28px;
        height: 34px;
        font-weight: 700;
        font-size: 1.4rem;
    }
    .flag-lose {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='34' viewBox='0 0 28 34' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='b'%3E%3Cstop stop-color='%230C121F' offset='0%25'/%3E%3Cstop stop-color='%230C121F' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='30.541%25' cy='2.757%25' fx='30.541%25' fy='2.757%25' r='112.429%25' gradientTransform='matrix(-.14633 .59954 -.22163 -.01987 .356 -.155)' id='c'%3E%3Cstop stop-color='%23758BB5' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='77.164%25' cy='2.801%25' fx='77.164%25' fy='2.801%25' r='44.508%25' gradientTransform='matrix(0 .60606 -.40374 0 .783 -.44)' id='d'%3E%3Cstop stop-color='%23758BB5' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='a' d='M4 0h20v29l-10 4-10-4z'/%3E%3Cfilter x='-5%25' y='-3%25' width='110%25' height='106.1%25' filterUnits='objectBoundingBox' id='e'%3E%3CfeGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1'/%3E%3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E%3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'/%3E%3CfeColorMatrix values='0 0 0 0 0.0470588235 0 0 0 0 0.0705882353 0 0 0 0 0.121568627 0 0 0 0.5 0' in='shadowInnerInner1'/%3E%3C/filter%3E%3ClinearGradient x1='1.513%25' y1='98.968%25' x2='98.968%25' y2='98.968%25' id='f'%3E%3Cstop stop-color='%232C394E' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' offset='11.551%25'/%3E%3Cstop stop-color='%23758BB5' offset='88.472%25'/%3E%3Cstop stop-color='%232C394E' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath id='g' d='M0 0h28v1H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23758BB5' d='M3 0h22v29.5L14 34 3 29.5z'/%3E%3Cuse fill='%23526585' xlink:href='%23a'/%3E%3Cuse fill-opacity='.3' fill='url(%23b)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.7' fill='url(%23c)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.3' fill='url(%23d)' xlink:href='%23a'/%3E%3Cuse fill='%23000' filter='url(%23e)' xlink:href='%23a'/%3E%3Cg transform='matrix(1 0 0 -1 0 1)'%3E%3Cuse fill='url(%23f)' xlink:href='%23g'/%3E%3Cuse fill-opacity='.3' fill='%231F2F49' xlink:href='%23g'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        color: #cfdefc;
    }
    .flag-win {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='34' viewBox='0 0 28 34' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='b'%3E%3Cstop stop-color='%238E0F16' offset='0%25'/%3E%3Cstop stop-color='%237C1010' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='30.541%25' cy='2.757%25' fx='30.541%25' fy='2.757%25' r='112.429%25' gradientTransform='matrix(-.14633 .59954 -.22163 -.01987 .356 -.155)' id='c'%3E%3Cstop stop-color='%23F22' offset='0%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='77.164%25' cy='2.801%25' fx='77.164%25' fy='2.801%25' r='44.508%25' gradientTransform='matrix(0 .60606 -.40374 0 .783 -.44)' id='d'%3E%3Cstop stop-color='%23F22' offset='0%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='a' d='M4 0h20v29l-10 4-10-4z'/%3E%3Cfilter x='-5%25' y='-3%25' width='110%25' height='106.1%25' filterUnits='objectBoundingBox' id='e'%3E%3CfeGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1'/%3E%3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E%3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'/%3E%3CfeColorMatrix values='0 0 0 0 0.470588235 0 0 0 0 0 0 0 0 0 0 0 0 0 0.498612998 0' in='shadowInnerInner1'/%3E%3C/filter%3E%3ClinearGradient x1='0%25' y1='98.968%25' y2='98.968%25' id='f'%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%23BE0000' offset='13.277%25'/%3E%3Cstop stop-color='%23BE0000' offset='86.598%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath id='g' d='M0 0h28v1H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F22' d='M3 0h22v29.5L14 34 3 29.5z'/%3E%3Cuse fill='%23F22' xlink:href='%23a'/%3E%3Cuse fill-opacity='.7' fill='url(%23b)' xlink:href='%23a'/%3E%3Cuse fill='url(%23c)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.4' fill='url(%23d)' xlink:href='%23a'/%3E%3Cuse fill='%23000' filter='url(%23e)' xlink:href='%23a'/%3E%3Cg transform='matrix(1 0 0 -1 0 1)'%3E%3Cuse fill='url(%23f)' xlink:href='%23g'/%3E%3Cuse fill-opacity='.3' fill='%231F2F49' xlink:href='%23g'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        color: #ffeab8;
    }
</style>
