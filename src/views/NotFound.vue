<template>
    <el-container class="not-found-page">
        <div class="not-found-page_content">
            <div class="not-found-page_404">404</div>
            <div class="not-found-page_info">
                <span class="not-found-page_title">Oops!</span>
                <p>We can't seem to find the page you're looking for.</p>
                <el-button round @click="__goBack()" icon="el-icon-back">GO BACK</el-button>
            </div>
        </div>
    </el-container>
</template>

<script>
export default {
    name: 'NotFound',

    methods: {
        __goBack () {
            this.$router.go(-1);
        }
    }
};
</script>

<style>
.not-found-page {
    background-color: #16ad84;
    height: calc(100vh - 17px);
}
.not-found-page_content {
    display: flex;
}
.not-found-page_404 {
    width: 300px;
    font-size: 60px;
    text-align: right;
    padding-top: 10%;
}
.not-found-page_info {
    padding-top: 10%;
    padding-left: 100px;
}
.not-found-page_title {
    font-size: 40px;
}
</style>
