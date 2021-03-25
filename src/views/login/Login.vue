<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码"/>
    </div>
    <div class="wrapper__login-button" @click="handleClick">登录</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleClick = () => {
      localStorage.isLogin = true
      router.push({ name: 'HelloWorld' })
    }

    return { handleClick }
  }
}
</script>

<style lang="scss" scoped>
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
      color: #777;

      &::placeholder {
        color: #777;
      }
    }
  }

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background-color: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }

  &__login-link {
    font-size: .14rem;
    color: #777;
    text-align: center;
  }
}
</style>
