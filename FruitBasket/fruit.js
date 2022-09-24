let app = Vue.createApp({
    data() {
        return {
            newFruitValue: "",
            fruits: ["apple", "mango", "lichi"]
        }
    },

    methods: {
        addFruit() {
            console.log("fruit added", this.newFruitValue);
            this.fruits.push(this.newFruitValue)
            this.newFruitValue = ""
        },
        deleteFruit(ind) {
            this.fruits.splice(ind, 1);
        }
    }
});
app.mount('#fruitBucket')
