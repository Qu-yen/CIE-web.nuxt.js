<template>
    <div class="login-page">
        <div class="login-content">
            <div>
                <div class="img-logo">
                    <img style=" width: 235.3px;height: 87px" src="../store/image/LOGO.png" alt="logo">
                </div>
                <div class="page-name">Đăng nhập</div>
                <div>
                    <form @submit.prevent="onSubmit" name="CIE-login" onsubmit="return validateForm()" method="POST"
                        class="CIE-login-form" id="CIE-login-form">
                        <div class="login-Email lg1">
                            <label for="email">Email</label>
                            <input id="email" 
                                v-model="login_email" 
                                type="email" 
                                name="" 
                                placeholder="abc@gmail.com">
                            <span class="form-message"></span>
                        </div>
                        <div class="login-pass lg1">
                            <label for="password">Mật khẩu</label>
                            <input id="password" 
                                v-model="login_password" 
                                type="password" 
                                name=""
                                placeholder="...........">
                            <span class="form-message"></span>
                        </div>
                        <div class="login-remember lg1">
                            <!-- <a href="///////">Quên mật khẩu</a> -->
                            <nuxt-link to="/ForgotPass" style="width: 100%;">
                                <a>Quên mật khẩu</a>
                            </nuxt-link>
                        </div>
                        <div class="login-submit lg1">
                            <NuxtLink to="/TongQuan"> <input id="login-button" type="submit" value="Đăng nhập">
                            </NuxtLink>
                        </div>
                    </form>
                </div>

            </div>
            <div>
                <div class="login-img-background">
                    <img style="width: 610px;height: 353px;" src="../store/image/login-business 123 1.png"
                        alt="business 123 1.png">
                </div>
            </div>
        </div>
        <div>
            <button @click="fetchData">Fetch Data</button>
            <div>{{ data }}</div>
        </div>
    </div>

</template>

<script>


import { MessageOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
// export default defineComponent({
//     components: {
//         MessageOutlined,
//     },
// });
</script>

<script >
// import { defineComponent } from '@vue/composition-api'

export default {
    validate (context){
        console.log(context)
        return context
    },
    data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('/api/data'); // Đổi thành endpoint của API Golang
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
}
</script>

<style>
@import "../assets/login-style.css";
</style>