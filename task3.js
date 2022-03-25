var car2 = {

	brand: "Ferrari",
	speed: 0,

	accelerate: function(inc) {
		this.speed += inc;
	},

	brake: function(dec) {
		this.speed -= dec;
	},

	status: function() {
		return this.brand + " running at " + this.speed + " km/h";
	}
};