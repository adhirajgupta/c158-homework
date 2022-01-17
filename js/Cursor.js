const hereosId = ["Batman", "Hulk", "Superman", "Spiderman"];

AFRAME.registerComponent('cursor-events', {

    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents()

    },

    handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        console.log(this.el)
        console.log("id - ", id)
        if (hereosId.includes(id)) {
            this.el.setAttribute("material", {
                color: "#0077cc",
                opacity: 1,
            });
        }
    },

    handleLeave: function () {
        const id = this.el.getAttribute('id')
        console.log(this.el)
        if (hereosId.includes(id)) {
            this.el.setAttribute('material', {
                color: '#fff',
                opacity: 1
            })
        }
    },

    handleMouseEnterEvents: function () {
        // Mouse Enter Events
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesListState();
        });
    },
    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
            this.handleLeave()
        })
    }
});
