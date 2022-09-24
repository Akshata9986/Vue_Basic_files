let app = Vue.createApp({
    data() {
        return {
            message: "how are you?"
        }
    },
    methods: {
        // getting the value of the input
        // field by using ref
        setText() {
            console.log(this.$refs.userText.value);
            this.message = this.$refs.userText.value
        },
        setFocus() {
            this.$refs.email.focus()
        }
    }


});
app.mount('#ref')