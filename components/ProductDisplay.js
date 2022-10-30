app.component('product-display', {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template:
		/*html*/
		`<div class="product-container">
            <div class="product-image">
                <img :src="img" />
            </div>
            <div class="product-display">
                <h1>{{ title }}</h1>
                <div class="product-info">
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <product-details :details="details"></product-details>
                    <div
                        class="color-circle"
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        :style="{ backgroundColor: variant.color }"
                        @mouseover="updateVariant(index)"
                    ></div>
                    <div>
                        <button class="button" :class="{disabledButton: inStock}" :disabled="inStock" @click="addToCart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>`,

	data: () => ({
		product: 'Socks',
		brand: 'Vue Mastery',
		selectedVariant: 0,
		details: ['50% cotton', '30% wool', '20% polyester'],
		variants: [
			{
				id: 1023,
				img: './assets/images/socks_green.jpg',
				color: 'green',
				quantity: 0,
			},
			{
				id: 1024,
				img: './assets/images/socks_blue.jpg',
				color: 'blue',
				quantity: 100,
			},
		],
	}),
	methods: {
		updateVariant(index) {
			this.selectedVariant = index
		},
		addToCart() {
			this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
		},
	},
	computed: {
		img() {
			console.log(this.variants[this.selectedVariant].img)
			return this.variants[this.selectedVariant].img
		},
		title() {
			return this.brand + ' ' + this.product
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		},
		shipping() {
			if (this.premium) return 'free'
			return '$99.99'
		},
	},
})
