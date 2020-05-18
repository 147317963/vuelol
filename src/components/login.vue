<template>
    <div  class="login-page router-view">
        <div  class="main-logo"></div>
        <form  onsubmit="return false">
            <div   class="base-input">
                <input  id="帐号" type="text"
                        v-model="loginForm.username"
                        placeholder="用户名或手机号"
                        autocomplete="off" autocorrect="off"
                        autocapitalize="off">
                <label for="帐号" class="input-label">帐号</label>
                <span  class="focus-border"></span> <!---->  <!---->
            </div>
            <div   class="base-input">
                <input  id="密码"
                        :type="passShow"  v-model="loginForm.password" placeholder="输入帐户密码"
                        autocomplete="off" autocorrect="off"
                        autocapitalize="off">
                <label for="密码" class="input-label">密码</label>
                <span  class="focus-border"></span> <!---->
                <div  class="right-icon" :class="passShow==='password'?'hidden-password':'show-password'"  @click.stop="passShow==='password'?  passShow= 'text': passShow = 'password'"></div>
            </div>
            <section  class="login-setting">
                <label class="container"  >
                    <span>记住我</span>
                    <input  type="checkbox" v-model="loginForm.checked">
                    <span  class="checkmark"></span>
                </label>
                <router-link to="/forgotPassword" class="forgot-pwd">忘记密码</router-link>
            </section>
            <div   class="base-button">
                <div  class="button-border">
                    <button  type="submit" class="button-content" @click.stop="handleLogin">登录</button>
                </div>
            </div>
            <div  style="height: 4px;"></div>
            <div   class="base-button button--dark">
                <div  class="button-border">
                    <router-link to="/register" class="button-content">注册</router-link>
<!--                    <button  type="submit" class="button-content">注册</button>-->
                </div>
            </div>
        </form>
        <router-link to="/register" class="customer-service">联系客服</router-link>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginForm:{
                    username:'',
                    password:'',
                    checked:false,
                },
                passShow:'password',

            }
        },
        methods: {//条用方法
            handleLogin(){
                if (!/^[a-zA-Z0-9]{6,16}$/.test(this.username)) {
                    this.$toast({
                        message: '帐号由6到16位只能是(字母或数字！)',
                        duration: 1000,
                        forbidClick: true
                    });
                    return;
                }
                if (!/^[a-zA-Z0-9_-]{6,16}$/.test(this.password)) {
                    this.$toast({
                        message: '密码由6到16位只能是(字母，数字，下划线，减号！)',
                        duration: 1000,
                        forbidClick: true
                    });
                    return;
                }
                this.$store.dispatch("user/login", this.loginForm).then(() => {
                    const routerPath = this.redirect === "/404" ? "/" : this.redirect;
                    this.$router.push({ path: routerPath || "/" });
                });



            }
        },
        mounted() {//加载完毕后


            if(localStorage.getItem('username') && localStorage.getItem('password')){
                this.username = localStorage.username;
                this.password = localStorage.password;
                this.checked = true;
            }

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            $route: {
                handler: (route)=> {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>
    .login-page {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .login-page .main-logo {
        margin: 5.9761vh 0 2.98805vh;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 140px;
        height: 140px;
        background-size: cover;
        background-image: url('@/assets/images/svg/login_logo.svg');
    }
    .login-page form {
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
    .base-input .right-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 26px;
        height: 26px;
        padding: 22px;
        position: absolute;
        top: -6px;
        right: 0;
    }
    .hidden-password {
        background-image: url("@/assets/images/svg/hidden_password.svg");
    }
    .show-password {
        background-image: url("@/assets/images/svg/show_password.svg");
    }
    .login-page .login-setting {
        width: 100%;
        margin-bottom: 4.98008vh;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }
    .container {
        display: block;
        position: relative;
        padding-left: 26px;
        height: 18px;
        text-align: left;
        font-size: 1.3rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: normal;
    }
    .container input {
        position: absolute;
        opacity: 0;
    }
    .checkmark, .container:hover input~.checkmark {
        background: #111929;
        border: 1px solid #394b5e;
    }
    .container input:checked~.checkmark {
        background-color: #1ee8e7;
        border: 1px solid #1ee8e7;
        transition: all .3s ease-out;
    }
    .checkmark {
        position: absolute;
        top: 2px;
        left: 0;
        height: 14px;
        width: 14px;
        border-radius: 2px;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .container .checkmark:after {
        left: 3px;
        top: 0;
        width: 4px;
        height: 8px;
        border: solid #090e16;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    .container input:checked~.checkmark:after {
        display: block;
    }


    .login-page .login-setting .forgot-pwd {
        font-size: 1.2rem;
        color: #61799b;
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
    .button--dark {
        background-image: linear-gradient(90deg,#298a97,#317699);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
    }
    .button--dark .button-border {
        background-image: linear-gradient(#323e57,#1d2639);
    }
    .button--dark .button-border .button-content {
        background: #252f44;
    }
    .login-page .customer-service {
        margin-top: 3.38645vh;
    }
    a {
        color: #1ad2fe;
        text-decoration: none;
    }
</style>
