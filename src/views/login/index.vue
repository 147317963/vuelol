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
                redirect:undefined,
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
            '$route': {
                handler (route) {
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
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3CradialGradient cx='32.551%25' cy='.359%25' fx='32.551%25' fy='.359%25' r='101.777%25' gradientTransform='matrix(.17144 .97902 -.82366 .20378 .272 -.316)' id='a'%3E%3Cstop stop-color='%23007DA3' offset='0%25'/%3E%3Cstop stop-color='%23004E72' offset='100%25'/%3E%3C/radialGradient%3E%3ClinearGradient x1='90.044%25' y1='3.769%25' x2='0%25' y2='100%25' id='b'%3E%3Cstop stop-color='%23008EB0' offset='0%25'/%3E%3Cstop stop-color='%23005175' offset='100%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='50%25' y1='0%25' x2='0%25' y2='66.322%25' id='c'%3E%3Cstop stop-color='%23004E72' offset='0%25'/%3E%3Cstop stop-color='%23007DA3' offset='100%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='80.807%25' y1='0%25' x2='2.21%25' y2='97.266%25' id='d'%3E%3Cstop stop-color='%2300678C' offset='0%25'/%3E%3Cstop stop-color='%23007DA3' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='100%25' cy='100%25' fx='100%25' fy='100%25' r='194.758%25' gradientTransform='scale(-1 -.59431) rotate(59.277 2.357 -2.099)' id='e'%3E%3Cstop stop-color='%2300A8E1' offset='0%25'/%3E%3Cstop stop-color='%231EFFFA' offset='100%25'/%3E%3C/radialGradient%3E%3ClinearGradient x1='0%25' y1='0%25' x2='97.843%25' y2='97.843%25' id='f'%3E%3Cstop stop-color='%2353FFFB' offset='0%25'/%3E%3Cstop stop-color='%2302ADE2' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='0%25' cy='0%25' fx='0%25' fy='0%25' r='191.551%25' gradientTransform='scale(1 .24104) rotate(74.869)' id='h'%3E%3Cstop stop-color='%23FFF' offset='0%25'/%3E%3Cstop stop-color='%23FFF' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='g' d='M16.263 36.226L9.667 8.86h.516z'/%3E%3CradialGradient cx='99.7%25' cy='.206%25' fx='99.7%25' fy='.206%25' r='130.1%25' gradientTransform='matrix(-.75169 .51517 -.65952 -.58718 1.748 -.51)' id='i'%3E%3Cstop stop-color='%2300A8E1' offset='0%25'/%3E%3Cstop stop-color='%231EFFFA' offset='100%25'/%3E%3C/radialGradient%3E%3ClinearGradient x1='0%25' y1='100%25' y2='0%25' id='j'%3E%3Cstop stop-color='%2312FFFB' offset='0%25'/%3E%3Cstop stop-color='%23006D92' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='0%25' cy='100%25' fx='0%25' fy='100%25' r='71.739%25' gradientTransform='matrix(.69697 .6213 -.55263 .78358 .553 .216)' id='l'%3E%3Cstop stop-color='%23FFF' offset='0%25'/%3E%3Cstop stop-color='%23FFF' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='k' d='M19.143 41.071l36.696-32.21-36.44 32.64z'/%3E%3ClinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='m'%3E%3Cstop stop-color='%2300D7D3' stop-opacity='.402' offset='0%25'/%3E%3Cstop stop-color='%231EFFFA' offset='100%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='n'%3E%3Cstop stop-color='%2302D7D3' offset='0%25'/%3E%3Cstop stop-color='%23FFF' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='20.741%25' cy='79.138%25' fx='20.741%25' fy='79.138%25' r='23.897%25' gradientTransform='matrix(0 .58487 -1 0 .999 .67)' id='p'%3E%3Cstop stop-color='%23FFF' stop-opacity='.5' offset='0%25'/%3E%3Cstop stop-color='%23FFF' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='o' d='M13.262 49.931l5.444-9.564L40.902 2.672 18.985 40.79z'/%3E%3ClinearGradient x1='0%25' y1='100%25' y2='0%25' id='q'%3E%3Cstop stop-color='%2300D7D3' stop-opacity='.402' offset='0%25'/%3E%3Cstop stop-color='%231EFFFA' offset='100%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='0%25' y1='100%25' y2='0%25' id='r'%3E%3Cstop stop-color='%2302D7D3' offset='0%25'/%3E%3Cstop stop-color='%23FFF' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='77.43%25' cy='21.235%25' fx='77.43%25' fy='21.235%25' r='36.621%25' gradientTransform='scale(1 .58601) rotate(85.075 .693 .287)' id='t'%3E%3Cstop stop-color='%23FFF' stop-opacity='.5' offset='0%25'/%3E%3Cstop stop-color='%23FFF' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='s' d='M12.983 41.633L31.828 8.861 36.993.563l.14-.141-4.886 8.44z'/%3E%3CradialGradient cx='0%25' cy='0%25' fx='0%25' fy='0%25' r='287.573%25' gradientTransform='matrix(.29317 .24408 -.07379 .96975 0 0)' id='u'%3E%3Cstop stop-color='%2300F3EE' offset='0%25'/%3E%3Cstop stop-color='%23009CBF' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='0%25' cy='0%25' fx='0%25' fy='0%25' r='285.151%25' gradientTransform='matrix(.29317 .24408 -.07379 .96975 0 0)' id='w'%3E%3Cstop stop-color='%231EFFFA' offset='0%25'/%3E%3Cstop stop-color='%2334CCFF' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath d='M58.685 0l-4.79 6.598L49.105 0h-5.99L51.5 11.73v7.822h4.791V11.73L64.674 0h-5.989zM26.828 0l-4.312 19.552h4.79l3.45-15.642h5.078l1.725 7.82h-6.18l-.96 3.913h8.002l.863 3.909h4.79L39.762 0H26.828zM0 0v19.552h4.79V3.91h9.582v4.887H7.186v1.957l7.666 8.798H20.6l-5.963-6.843h4.526V0H0z' id='v'/%3E%3CradialGradient cx='0%25' cy='0%25' fx='0%25' fy='0%25' r='325.023%25' gradientTransform='matrix(.2594 .21596 -.05737 .9764 0 0)' id='x'%3E%3Cstop stop-color='%2300F3EE' offset='0%25'/%3E%3Cstop stop-color='%23009CBF' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='0%25' cy='0%25' fx='0%25' fy='0%25' r='322.286%25' gradientTransform='matrix(.2594 .21596 -.05737 .9764 0 0)' id='z'%3E%3Cstop stop-color='%231EFFFA' offset='0%25'/%3E%3Cstop stop-color='%2334CCFF' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath d='M74.112 0v1.942H67.76V4.37h6.352v2.428H67.76v2.428H80.7v1.293l-4.568 3.656-2.255-1.793H67.76l5.32 4.238-5.017 4.016h-2.187v2.428h5.177l5.046-4.04 5.071 4.04h4.707l.94-2.428h-2.564l-5.1-4.057 5.546-4.44V6.798h-6.352V4.37h5.411l.941-2.428h-6.352V0h-4.235zM60.936 0v1.942H58.82V4.37h2.117v7.708l-2.117 1.76v3.4l2.117-1.76v5.158H58.82v2.428h6.352V11.957l2.118-1.761V6.798l-2.118 1.76V4.37h2.118V1.942h-2.118V0h-4.235zm-21.41 0v1.457h-9.881v2.427h23.763l.94-2.427h-9.88V0h-4.942zM0 .486V2.67h10.823v1.456H0v7.526h4v-5.34h6.823v5.34h4v-5.34h6.823v5.34h4V4.127H14.821V2.671h10.823V.486H0zM46.82 4.37v1.7h-9.883v-1.7h-4.94l.515 1.7h-3.338v2.427H54.82V6.07h-3.573l.515-1.7H46.82zm-30.586 7.283h4V7.77h-4v3.884zm-10.823 0h4.001V7.77h-4v3.884zm24.704-1.7v7.284h4.36l-6.476 5.827h5.645l7.53-6.798V14.81h-7.059v-2.427h15.764v2.427h-6.823v8.255h11.763l1.647-4.37h-4.235l-.732 1.942h-4.444v-3.399h6.823V9.954H30.115zM0 23.064h25.645V13.11H0v9.954zm14.822-6.07h6.824v-1.699h-6.824v1.7zm-10.821-1.7h6.822v1.7H6.587l-.94 2.185h5.176v1.7H4v-5.585zm10.821 5.585h6.824v-1.7h-6.824v1.7z' id='y'/%3E%3Cpath d='M0 13.11h25.644v.288H.277v9.666H0V13.11zm14.822-8.695v-.288h10.822v.288H14.822zM5.647 19.18l.94-2.185h.275L5.94 19.18h-.292zm28.82-1.936h.472l-6.47 5.82h-.47l6.468-5.82zM0 .486h25.644v.287H.277V2.67H0V.486zm78.347 1.456h6.352l-.11.288h-6.242v-.288zm-67.524 9.711v-5.34h.277v5.34h-.277zM58.819 4.37V1.942h.277V4.37h-.277zM44.467 1.457h9.882l-.111.286h-9.77v-.286zM10.823 2.671h.277v1.744H.278v7.238H0V4.127h10.823V2.671zm32.233 20.393v-8.255h.278v8.255h-.278zm17.88-7.587l.278-.231v5.39h-.278v-5.159zm.278-11.107v7.839l-2.103 1.748v3.037l-.291.243V13.84l2.116-1.76V4.37h.278zM30.115 17.237V9.954h23.763v.286H30.394v6.997h-.279zm50.863-8.012V10.3v-.002.359l-4.62 3.698-.225-.178 4.566-3.656V9.225h.279zM58.819 23.064v-2.428h.277v2.428h-.277zM51.246 6.069h3.573v.286h-3.693l.12-.286zM39.526 0h4.941v.287h-4.663v1.456h-9.882v2.14h-.277V1.458h9.881V0zM29.452 6.356v2.142h-.278V6.069h3.33l-.506-1.699h.278l.59 1.986h-3.414zm17.646.003h-.278v-.002h-9.881v-.288h9.88v-1.7h.279v1.99zM60.936 0h4.236v.287h-3.958v1.64h-.278V0zm6.824 6.798h6.352v.287h-6.075v2.14h-.277V6.798zm10.587.286v-.286h6.352v.286h-6.352zM74.112 0h4.235v.287h-3.958v1.942h-6.36l.008 2.141h-.277V1.943h6.352V0zm-6.049 20.636l5.017-4.016.225.178-5.154 4.124h-1.996v2.142h-.278v-2.428h2.186z' id='A'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M59.306 44.369L43.042 17.004H75.57L59.306 44.37zm2.303 3.875l18.566-31.24h18.706l-27.92 46.978-9.352-15.738z' fill='%23000' style='mix-blend-mode:multiply'/%3E%3Cpath fill='url(%23a)' d='M16.263 36.226L0 8.86h32.526z' transform='translate(43.042 8.143)'/%3E%3Cpath fill-opacity='.3' fill='url(%23b)' d='M16.263 36.226L27.92 8.86h4.607z' transform='translate(43.042 8.143)'/%3E%3Cpath fill='url(%23c)' d='M18.566 40.101l18.567-31.24h18.706L27.919 55.84z' transform='translate(43.042 8.143)'/%3E%3Cpath fill-opacity='.3' fill='url(%23d)' d='M18.566 40.101l18.567-31.24h4.745z' transform='translate(43.042 8.143)'/%3E%3Cpath fill='url(%23e)' d='M16.263 36.226L0 8.86h10.183z' transform='translate(43.042 8.143)'/%3E%3Cg transform='translate(43.042 8.143)'%3E%3Cuse fill='url(%23f)' xlink:href='%23g'/%3E%3Cuse fill-opacity='.8' fill='url(%23h)' xlink:href='%23g'/%3E%3C/g%3E%3Cpath fill='url(%23i)' d='M19.143 41.071l36.696-32.21-27.92 46.978z' transform='translate(43.042 8.143)'/%3E%3Cg transform='translate(43.042 8.143)'%3E%3Cuse fill='url(%23j)' xlink:href='%23k'/%3E%3Cuse fill-opacity='.5' fill='url(%23l)' xlink:href='%23k'/%3E%3C/g%3E%3Cpath d='M13.262 50.072c-.095 0-.142-.047-.14-.14l5.444-9.846L41.321 1.828h.14L19.124 41.07 13.4 49.931c-.063.094-.11.141-.14.141z' fill='url(%23m)' transform='translate(43.042 8.143)'/%3E%3Cg transform='translate(43.042 8.143)'%3E%3Cuse fill='url(%23n)' xlink:href='%23o'/%3E%3Cuse fill='url(%23p)' xlink:href='%23o'/%3E%3C/g%3E%3Cpath d='M12.424 42.477L31.55 8.86 36.854.422c.163-.281.303-.422.418-.422.118 0 .164.094.14.281l-4.886 8.58-19.962 33.616h-.14z' fill='url(%23q)' transform='translate(43.042 8.143)'/%3E%3Cg transform='translate(43.042 8.143)'%3E%3Cuse fill='url(%23r)' xlink:href='%23s'/%3E%3Cuse fill='url(%23t)' xlink:href='%23s'/%3E%3C/g%3E%3Cg transform='translate(4.653 77.942)'%3E%3Cuse fill='url(%23u)' xlink:href='%23v'/%3E%3Cuse fill='url(%23w)' xlink:href='%23v'/%3E%3C/g%3E%3Cpath d='M116.754 77.942h19.163l-.958 3.91h-6.228v15.642h-4.79V81.851h-7.187v-3.909zm-21.557 0h17.246l-.958 3.91H99.987v3.91h9.581v3.91h-9.58v3.912H113.4l-.957 3.91H95.197V77.942zm-22.996 0h16.767v7.82h2.397v11.732H72.201v-3.91h14.372v-3.912h-7.186l.959-3.91h3.832v-3.91h-7.186v9.777h-4.79V77.942z' fill='%23A9CAE8'/%3E%3Cpath d='M48.204 77.942l8.292 11.646v7.906h-.343v-7.822l-8.384-11.73h.435zm-16.723 0h12.935l.07.33H31.784l-4.238 19.222h-.377l4.312-19.552zm4.914 11.73l-.962 3.912h-.36l.96-3.912h.362zM12.16 86.739v1.846l7.745 8.909h-.4l-7.667-8.799V86.74h.322zm-7.508-8.797h19.163v.33H4.974v19.222h-.32V77.942z' fill='%23FFF' style='mix-blend-mode:overlay'/%3E%3Cpath d='M116.754 77.942h19.163l-.084.33h-18.75v3.58h-.329v-3.91zm7.186 3.91h.312v15.642h-.312V81.851zm-28.743-3.91h17.246l-.091.342H95.561l.006 19.21h-.37V77.942zm-14.52 7.82l-.962 3.91h-.328l.959-3.91h.332zm-8.154 7.825v3.905h-.327l.005-3.905h.322zM72.2 77.942h16.767l.02.284H72.502v13.403H72.2V77.942z' fill-opacity='.8' fill='%23FFF' style='mix-blend-mode:overlay'/%3E%3Cg transform='translate(26.756 104.698)'%3E%3Cuse fill='url(%23x)' xlink:href='%23y'/%3E%3Cuse fill='url(%23z)' xlink:href='%23y'/%3E%3C/g%3E%3Cg fill='%23FFF' transform='translate(26.756 104.698)'%3E%3Cuse style='mix-blend-mode:overlay' xlink:href='%23A'/%3E%3Cuse style='mix-blend-mode:overlay' xlink:href='%23A'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
    .base-input input::-webkit-input-placeholder {
        color: #526585;
        font-size: 1.5rem
    }
    .base-input input:focus~.focus-border:after,.base-input input:focus~.focus-border:before {
        width: 50%;
        transition: all .3s ease-out
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhbPpl63mmL7npLrlr4bnoIE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQuMDAwMDAwLCAtMTIyNS4wMDAwMDApIiBmaWxsPSIjM0Y1NDZBIj4KICAgICAgICAgICAgPGcgaWQ9IuWFs+mXreaYvuekuuWvhueggSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxMjI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLDE3IEM2LjU4MTcyMiwxNyAzLDEyLjk5NTMwMDMgMywxMSBDMyw5LjAwNDY5OTcxIDYuNTgxNzIyLDUgMTEsNSBDMTEsNi42MTU3MjI2NiAxMSwxNC44Mjc3NTg4IDExLDE3IFogTTExLDE1IEMxMSwxMy41NTE4MzkyIDExLDguMDc3MTQ4NDQgMTEsNyBDNy42ODYyOTE1LDcgNSwxMC4xOTEyMDI4IDUsMTEgQzUsMTEuODA4Nzk3MiA3LjY4NjI5MTUsMTUgMTEsMTUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMTcgQzE0LjU4MTcyMiwxNyAxMSwxMi45OTUzMDAzIDExLDExIEMxMSw5LjAwNDY5OTcxIDE0LjU4MTcyMiw1IDE5LDUgQzE5LDYuNjE1NzIyNjYgMTksMTQuODI3NzU4OCAxOSwxNyBaIE0xOSwxNSBDMTUuNjg2MjkxNSwxNSAxMywxMS44MDg3OTcyIDEzLDExIEMxMywxMC4xOTEyMDI4IDE1LjY4NjI5MTUsNyAxOSw3IEMxOSw4LjA3NzE0ODQ0IDE5LDEzLjU1MTgzOTIgMTksMTUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDExLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTUuMDAwMDAwLCAtMTEuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy44Njc4MzU0LDE3LjE2MTMyNjQgQzE3Ljk0OTg4NzcsMTcuMjUwMzk4NSAxOCwxNy4zNjkzNDcxIDE4LDE3LjUgQzE4LDE3Ljc3NjE0MjQgMTcuNzc2MTQyNCwxOCAxNy41LDE4IEMxNy4zNTQwMjIyLDE4IDE3LjIyMjY1NTUsMTcuOTM3NDQyNSAxNy4xMzEyNDU5LDE3LjgzNzY3MzYgTDQuMTM3MjY4MDcsNC44NDc0NzMxNCBMNC4xMzg4Nzk3LDQuODQ1ODIyIEM0LjA1Mjg1NDU5LDQuNzU2MDE1NTcgNCw0LjYzNDE4MDIxIDQsNC41IEM0LDQuMjIzODU3NjMgNC4yMjM4NTc2Myw0IDQuNSw0IEM0LjY0NjY3NDI3LDQgNC43Nzg1OTc3MSw0LjA2MzE1NTg2IDQuODcwMDU5NzUsNC4xNjM3NTcwNCBMMTcuODY4NDk5OCwxNy4xNjA2NzUgTDE3Ljg2NzgzNTQsMTcuMTYxMzI2NCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    .show-password {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mmL7npLrlr4bnoIE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzAuMDAwMDAwLCAtMTIyNS4wMDAwMDApIiBmaWxsPSIjM0Y1NDZBIj4KICAgICAgICAgICAgPGcgaWQ9IuaYvuekuuWvhueggSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAuMDAwMDAwLCAxMjI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLDE3IEM2LjU4MTcyMiwxNyAzLDEyLjk5NTMwMDMgMywxMSBDMyw5LjAwNDY5OTcxIDYuNTgxNzIyLDUgMTEsNSBDMTEsNi42MTU3MjI2NiAxMSwxNC44Mjc3NTg4IDExLDE3IFogTTExLDE1IEM3LjY4NjI5MTUsMTUgNSwxMS44MDg3OTcyIDUsMTEgQzUsMTAuMTkxMjAyOCA3LjY4NjI5MTUsNyAxMSw3IEMxMSw4LjA3NzE0ODQ0IDExLDEzLjU1MTgzOTIgMTEsMTUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMTcgQzE0LjU4MTcyMiwxNyAxMSwxMi45OTUzMDAzIDExLDExIEMxMSw5LjAwNDY5OTcxIDE0LjU4MTcyMiw1IDE5LDUgQzE5LDYuNjE1NzIyNjYgMTksMTQuODI3NzU4OCAxOSwxNyBaIE0xOSwxNSBDMTUuNjg2MjkxNSwxNSAxMywxMS44MDg3OTcyIDEzLDExIEMxMywxMC4xOTEyMDI4IDE1LjY4NjI5MTUsNyAxOSw3IEMxOSw4LjA3NzE0ODQ0IDE5LDEzLjU1MTgzOTIgMTksMTUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDExLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTUuMDAwMDAwLCAtMTEuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMSwxNCBDOS4zNDMxNDU3NSwxNCA4LDEyLjY1Njg1NDIgOCwxMSBDOCw5LjM0MzE0NTc1IDkuMzQzMTQ1NzUsOCAxMSw4IEMxMi42NTY4NTQyLDggMTQsOS4zNDMxNDU3NSAxNCwxMSBDMTQsMTIuNjU2ODU0MiAxMi42NTY4NTQyLDE0IDExLDE0IFogTTExLDEzIEMxMi4xMDQ1Njk1LDEzIDEzLDEyLjEwNDU2OTUgMTMsMTEgQzEzLDkuODk1NDMwNSAxMi4xMDQ1Njk1LDkgMTEsOSBDOS44OTU0MzA1LDkgOSw5Ljg5NTQzMDUgOSwxMSBDOSwxMi4xMDQ1Njk1IDkuODk1NDMwNSwxMyAxMSwxMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
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
