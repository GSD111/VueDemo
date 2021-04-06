<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="username" placeholder="请输入手机号"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" v-model="password" placeholder="请输入密码"/>
    </div>
    <div class="wrapper__login-button" @click="handleClick">登录</div>
    <div class="wrapper__login-link" @click="handleClickToRegister">立即注册</div>
    <Toast v-if="isToast" :message="ToastMsg"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Toast, { ToatsFunction } from '@/components/Toast'
axios.defaults.baseURL = 'http://www.vue3.com/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const { username, password } = toRefs(data)
  const handleClick = () => {
    // console.log(data.username)
    // eslint-disable-next-line eqeqeq
    if (data.username == '' || data.password == '') {
      // eslint-disable-next-line no-unreachable
      showToast('账号密码不能为空！')
      return false
    }
    try {
      axios.post('/test', {
        username: data.username,
        password: data.password,
        changeOrigin: true,
        // headers: {'content-type': 'application/x-www-form-urlencoded'},	//需要修改注意的地方
        // responseType: responseType,
      }).then(function (response) {
        showToast(response.data.msg)
        if(response.data.code == 200){
          localStorage.isLogin = response.data.username
          router.push({ name: 'Home' })
        }
        // console.log(localStorage.isLogin)
        console.log(response.data)
      }).catch(function (response) {
        showToast(response.data.msg)
        // alert('失败了')
        // console.log('失败了')
      })
    } catch (e) {
      alert('请求失败')
    }
  }

  return { username, password, handleClick }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleClickToRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleClickToRegister }
}
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://www.blog.com/api'
export default {
  name: 'Login',
  components: { Toast },
  setup() {
    const { isToast, ToastMsg, showToast } = ToatsFunction()
    const { username, password, handleClick } = useLoginEffect(showToast)
    const { handleClickToRegister } = useRegisterEffect()
    // const handleClick = async () => {
    //   const result = await axios.post('http://www.blog.com/api/demo', {
    //     username: data.username,
    //     password: data.password
    //   })
    //   console.log(result)
    return { username, password, isToast, ToastMsg, handleClick, handleClickToRegister }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }

  &__input {
    //box-sizing: border-box;
    height: .48rem;
    padding: 0 .16rem;
    margin: 0 .4rem .16rem .4rem;
    background: #f9f9f9;
    border: solid .01rem rgba(0, 0, 0, 0.10);
    border-radius: .06rem;

    &__content {
      line-height: .48rem;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-size: .16rem;
      color: $register-color;

      &::placeholder {
        color: $register-color;
      }
    }
  }

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background-color: $btnColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: $bgColor;
    font-size: .16rem;
    text-align: center;
  }

  &__login-link {
    font-size: .14rem;
    color: $register-color;
    text-align: center;
  }
}
</style>
