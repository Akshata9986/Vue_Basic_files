let app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        increment() {
            this.counter += 1
        },
        decrement() {
            this.counter -= 1
        },
        reset() {
            this.counter = 0
        }
    }
});
app.mount('#count')
