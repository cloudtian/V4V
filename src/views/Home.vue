<template>
  <div class="home">
    <h1>This is an home page</h1>
    <span>d:{{d}}</span>
    <span>s:{{s}}</span>
  </div>
</template>

<script>
export default {
    name: 'Home',

    data () {
        return {
            d: '',
            s: ''
        };
    },

    mounted () {
        this.$http.get('/api/dynamic_data').then(res => {
            this.d = res.data;
        });

        this.$http.get('/api/static_data').then(res => {
            this.s = res.data;
        });
    }
};
</script>
