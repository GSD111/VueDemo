<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="username" placeholder="请输入用户名"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" v-model="password" placeholder="请输入密码"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" v-model="repassword" placeholder="确认密码"/>
    </div>
    <div class="wrapper__login-button" @click="handleRegisterClick">注册</div>
    <div class="wrapper__login-link" @click="handleClickTo">已有账号去登陆</div>
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

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    repassword: ''
  })
  const { username, password, repassword } = toRefs(data)
  const handleRegisterClick = () => {
    // eslint-disable-next-line eqeqeq
    if (data.username == '' || data.password == '' || data.repassword == '') {
      // eslint-disable-next-line no-unreachable
      showToast('信息不能为空！')
      return false
    }
    if (data.password !== data.repassword) {
      showToast('两次密码不一致')
      return false
    }
    try {
      axios.post('/register', {
        username: data.username,
        password: data.password,
        repassword: data.repassword,
        changeOrigin: true
      }).then((response) => {
        showToast(response.data.msg)
        router.push({ name: 'Login' })
        // console.log('成功了')
      }).catch(function (response) {
        showToast(response.data.msg)
        // alert('失败了')
        // console.log('失败了')
      })
    } catch (e) {
      alert('请求失败')
    }
  }
  return {
    handleRegisterClick,
    username,
    password,
    repassword
  }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { isToast, ToastMsg, showToast } = ToatsFunction()
    const router = useRouter()
    const { username, password, repassword,handleRegisterClick, } = useRegisterEffect(showToast)
    const handleClickTo = () => {
      router.push({ name: 'Login' })
    }

    return { username, password, repassword, isToast, ToastMsg, handleClickTo, handleRegisterClick }
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
