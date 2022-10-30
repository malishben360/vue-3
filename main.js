const app = Vue.createApp({
	data: () => ({
		cart: [],
		premium: true,
	}),
	methods: {
		updateCart(id) {
			this.cart.push(id)
		},
	},
})
