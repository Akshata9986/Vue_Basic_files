let app = Vue.createApp({
    data() {
        return {
            email: ""
        }
    },

    methods: {
        reset() {
            this.email = ""
        }
        // submit(event) {
        //     this.email = event.target.value
        // }


    }
})

app.mount('#dataBinding');