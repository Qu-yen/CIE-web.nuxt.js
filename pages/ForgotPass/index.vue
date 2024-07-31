<template>
    <div calss="forgotPass-box">
        <div class="forgotPass-box-box">
            <img style="width: 235.3px;height: 87px; margin-bottom: 20px;" src="../ForgotPass/LOGO.png" alt="">
            <div class="forgot-Email lg1">
                <div for="" class="label-forgot">Nhập email đã đăng ký</div>
                <input id="email" v-model="login_email" type="email" name="" placeholder="abc@gmail.com">
            </div>
            <button style="
            /* margin-top: 20px; */
            ">
                Gửi</button>
        </div>
    </div>
</template>

<script>
// const email= 
</script>

<style>
.forgotPass-box-box {
    position: relative;
    top: 240px;
    margin: 0 auto;
    border: 30px solid rgb(255, 255, 255);
    width: 560px;
    height: 340px;
    text-align: left;
    font: 1em sans-serif;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    color: #3a3a3a;
    font: 1em sans-serif;
    font-family: 'Inter', sans-serif;
}

.forgotPass-box-box input {
    position: absolute;
    width: 500px;
    height: 48px;
    padding: 16px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 0px;
    margin-top: 6px;
    border-radius: 12px;
    border: 1px;
    opacity: 0px;
    border: 2px solid #d4d7e3;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
    font-family: 'Inter', sans-serif;
}

.forgotPass-box-box button {
    position: absolute;
    bottom: 0px;
    right: 0%;
    width: 150px;
    /* height: 48px; */
    padding: 14px 0px 14px 0px;
    gap: 0px;
    border-radius: 12px;
    border: 1px solid #00000000;
    opacity: 0px;
    background: #4285f4;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
}

.forgotPass-box-box button:active {
    border: 1px solid #4285f4;
    color: #4285f4;
    background: #ffffff;
}

input:focus {
    outline: none;
}

.label-forgot {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.01em;
}
</style>
