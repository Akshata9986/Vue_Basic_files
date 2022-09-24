let app = Vue.createApp({
    data() {
        return {
            greeting: "Hello World",
            person: {
                name: "ajay",
                age: 22,
                learn: "<h1>learn vue</h1>",
                code: "code vue"
            },
        }
    },

    // inside methods options,we can create all the methods and func

    methods: {
        randomOutput() {
            let randomNum = Math.random()
            console.log("randomNum", randomNum);

            if (randomNum < 0.5) {
                return this.learn
            } else {
                return this.code
            }
        }
    }
})

app.mount('#first');