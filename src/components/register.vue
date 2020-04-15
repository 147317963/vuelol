<template>
    <div  class="register-page router-view">
        <form  onsubmit="return false">
            <div   class="base-input"><input  id="帐号" type="text"
                                                                                 placeholder="请输入6-12位英文或数字"
                                                                                 autocomplete="off" autocorrect="off"
                                                                                 autocapitalize="off" maxlength="13">
                <label  for="帐号" class="input-label">帐号
                </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div   class="base-input"><input  id="密码" type="text"
                                                                                 placeholder="请输入6-11位英文或数字"
                                                                                 autocomplete="off" autocorrect="off"
                                                                                 autocapitalize="off" maxlength="12">
                <label  for="密码" class="input-label">密码
                </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div   class="base-input"><input  id="确认密码"
                                                                                 type="text" placeholder="再次输入相同密码"
                                                                                 autocomplete="off" autocorrect="off"
                                                                                 autocapitalize="off" maxlength="12">
                <label  for="确认密码" class="input-label">确认密码
                </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div   class="base-input"><input  id="姓名" type="text"
                                                                                 placeholder="为保证资金安全, 请填写真实姓名"
                                                                                 autocomplete="off" autocorrect="off"
                                                                                 autocapitalize="off" maxlength="10">
                <label  for="姓名" class="input-label">姓名
                </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div   class="base-input"><input  id="电话" type="tel"
                                                                                 placeholder="填写手机号" autocomplete="off"
                                                                                 autocorrect="off" autocapitalize="off"
                                                                                 maxlength="13"> <label
                     for="电话" class="input-label">电话
            </label> <span  class="focus-border"></span> <!---->
                <button data-v-4a05b3b8=""  type="submit" class="send-code-btn" >
                    获取验证码
                </button> <!----></div>
            <div   class="base-input"><input  id="验证码" type="tel"
                                                                                 placeholder="输入验证码" autocomplete="off"
                                                                                 autocorrect="off" autocapitalize="off"
                                                                                 maxlength="6"> <label
                     for="验证码" class="input-label">验证码
            </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div   class="base-input"><input  id="推荐码" type="text"
                                                                                 placeholder="填写推荐码（选填）"
                                                                                 autocomplete="off" autocorrect="off"
                                                                                 autocapitalize="off"> <label
                     for="推荐码" class="input-label">推荐码
            </label> <span  class="focus-border"></span> <!---->  <!----></div>
            <div  style="height: 26px;"></div>
            <div   class="base-button button--disabled">
                <div  class="button-border">
                    <button  type="submit" class="button-content">确认</button>
                </div>
            </div>
        </form>
        <div  class="rules">注册即代表您已经同意并遵守
            <br >
            <router-link to="/bettingRules">投注规则</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
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
    .register-page {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        margin-top: 40px;
    }
    .register-page form {
        width: calc(100% - 48px);
    }
    .base-input {
        position: relative;
        text-align: left;
        width: 100%;
        white-space: nowrap;
        margin-bottom: 25px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .base-input input {
        width: 100%;
        height: 32px;
        padding-left: 84px;
        border-radius: 0;
        color: #fff;
        caret-color: #1ffdfa;
        font-size: 1.5rem;
        background: transparent;
        outline: none;
        border: none;
        overflow: visible;
        resize: none;
    }
    .base-input .input-label {
        white-space: pre-line;
        word-break: break-word;
        position: absolute;
        left: 0;
        top: 7px;
        width: 68px;
        border-right: 1px solid #182031;
    }
    .base-input .focus-border {
        width: 100%;
        height: 1px;
        margin-top: 10px;
        background-color: #182031;
    }
    .base-input .focus-border:after, .base-input .focus-border:before {
        content: "";
        height: 1px;
        width: 0;
        position: absolute;
        background-color: #125e72;
    }
    .base-input .focus-border:before {
        left: 50%;
    }
    .base-input .focus-border:after {
        right: 50%;
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
    .base-input .input-label {
        white-space: pre-line;
        word-break: break-word;
        position: absolute;
        left: 0;
        top: 7px;
        width: 68px;
        border-right: 1px solid #182031;
    }
    .base-input .focus-border {
        width: 100%;
        height: 1px;
        margin-top: 10px;
        background-color: #182031;
    }
    .send-code-btn {
        height: 26px;
        color: #526585;
        background: #182032;
        border: 1px solid #27394c;
        border-radius: 2px;
        position: absolute;
        margin-top: 4px;
        right: 0;
        font-size: 1.2rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        outline: 0;
    }
    .enabled {
        border: 1px solid #0585a1;
        color: #fff;
        transition: border .5s,color .5s;
    }
    .button--disabled, .button--disabled:active {
        box-shadow: none;
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
    .base-button .button-border .button-content {
        height: 36px;
        border-radius: 2px;
        border: none;
        color: #fff;
        font-size: 1.4rem;
    }
    .button--disabled .button-border .button-content, .button--disabled .button-border, .button--disabled:active .button-border .button-content, .button--disabled:active .button-border, .button--disabled, .button--disabled:active {
        background-image: linear-gradient(90deg,#244053,#253c53);
    }
    .button--disabled .button-border .button-content, .button--disabled:active .button-border .button-content {
        color: #5e7a96;
    }
    .register-page .rules {
        margin-top: 7.96813vh;
        font-size: 1.2rem;
        color: #526585;
    }
    a {
        color: #1ad2fe;
        text-decoration: none;
    }
</style>