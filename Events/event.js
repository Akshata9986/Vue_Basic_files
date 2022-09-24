let app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        increment() {
            console.log("increment is executed");
            this.counter += 5
        },
        decrement() {
            this.counter -= 5
        },
        handleSubmit() {
            alert("form submitted successfully")
        }
    }
})
app.mount('#event')