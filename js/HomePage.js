AFRAME.registerComponent('tour', {

    init: function () {
        this.hereos = this.el;
        console.log(this.el)
        this.createCards()
    },
    createCards: function () {
        const thumbNailsRef = [
            {
                id: "Batman",
                title: "Batman",
                url: "./assets/thumbnails/Batman.jpg",
            },
            {
                id: "Hulk",
                title: "Hulk",
                url: "./assets/thumbnails/Hulk.jpg",
            },

            {
                id: "Spiderman",
                title: "Spiderman",
                url: "./assets/thumbnails/Spiderman.jpg",
            },
            {
                id: "Superman",
                title: "Superman",
                url: "./assets/thumbnails/Superman.jpg",
            },
        ];
        let prevoiusXPosition = -60;

        for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            // Border Element
            const borderEl = this.createBorder(position, item.id)
            // Thumbnail Element
            const Thumbnail = this.createThumbnail(item)
            // Title Text Element
            const Title = this.createThumbnailTitle(item)

            borderEl.appendChild(Thumbnail)
            borderEl.appendChild(Title)
            this.hereos.appendChild(borderEl);

        }
    },
    createBorder: function (position, id) {
        const entity = document.createElement('a-entity')

        entity.setAttribute('position', {
            x: position.x,
            y: position.y,
            z: position.z,
        })
        entity.setAttribute('material', {
            color: "#fff",
            opacity: 1
        })
        entity.setAttribute('id', id)
        entity.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 9,
            radiusOuter: 10
        })
        entity.setAttribute("cursor-events",{})

        return entity
    },
    createThumbnail: function (item) {
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('material', {
            src: item.url,
        })
        entity.setAttribute('geometry', {
            primitive: 'circle',
            radius: 9,
        })
        return entity
    },
    createThumbnailTitle: function (item) {
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('material', {
            color: '#e65100',
        })
        entity.setAttribute('text', {
            font: 'exo2bold',
            align: 'center',
            width: 70,
            value: item.title,
        })
        entity.setAttribute('position', {
            // x:0,
            y: -12,
            // z:0
        })
        return entity
    }

});
