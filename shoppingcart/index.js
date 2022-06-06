let app = new Vue({
  el: '#app',

  data() {
    return {
      list: [
        {
          id: 1,
          name: 'iPhone',
          price: 5999,
          count: 1
        },
        {
          id: 2,
          name: 'iPad',
          price: 4999,
          count: 1
        },
        {
          id: 3,
          name: 'MacBook',
          price: 19999,
          count: 1
        },
      ]
    }
  },

  computed: {
    totalPrice: function () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i]
        total += item.price * item.count
      }
      return total
    }
  },

  methods: {
    handleReduce(index) {
      if (this.list[index].count === 1) return
      this.list[index].count--
    },
    handleAdd(index) {
      this.list[index].count++
    },
    handleRemove(index) {
      this.list.splice(index, 1)
    }
  },
})