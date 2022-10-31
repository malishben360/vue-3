app.component('review-form', {
	template:
		/* html */
		`<form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

        <input type="submit" class="button">
    </form>`,
	data: () => ({
		name: '',
		review: '',
		rating: null,
	}),
	methods: {
		onSubmit() {
			/* validate form inputs */
			if (this.name === '' || this.review === '' || this.rating === null) return
			/* create review object */
			let review = {
				name: this.name,
				review: this.review,
				rating: this.rating,
			}
			/* send the review to the parent component */
			this.$emit('on-submit-form', review)
			/* reset the review to default */
			this.name = ''
			this.review = ''
			this.rating = null
		},
	},
})
