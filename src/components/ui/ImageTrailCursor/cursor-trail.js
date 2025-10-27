import { gsap } from 'gsap'

export class ImageTrail {
    container
    DOM
    images
    imagesTotal
    imgPosition
    zIndexVal
    activeImagesCount
    isIdle
    threshold
    mousePos
    lastMousePos
    cacheMousePos

    constructor(container) {
        this.container = container
        this.DOM = { el: container }
        this.images = [...container.querySelectorAll('.content__img')].map((img) => new ImageItem(img))
        this.imagesTotal = this.images.length
        this.imgPosition = 0
        this.zIndexVal = 1
        this.activeImagesCount = 0
        this.isIdle = true
        this.threshold = 80
        this.mousePos = { x: 0, y: 0 }
        this.lastMousePos = { x: 0, y: 0 }
        this.cacheMousePos = { x: 0, y: 0 }

        const handlePointerMove = (ev) => {
            const rect = container.getBoundingClientRect()
            this.mousePos = getLocalPointerPos(ev, rect)
        }

        container.addEventListener('mousemove', handlePointerMove)
        container.addEventListener('touchmove', handlePointerMove)

        const initRender = (ev) => {
            const rect = container.getBoundingClientRect()
            this.mousePos = getLocalPointerPos(ev, rect)
            this.cacheMousePos = { ...this.mousePos }
            requestAnimationFrame(() => this.render())
            container.removeEventListener('mousemove', initRender)
            container.removeEventListener('touchmove', initRender)
        }

        container.addEventListener('mousemove', initRender)
        container.addEventListener('touchmove', initRender)
    }

    render() {
        const distance = getMouseDistance(this.mousePos, this.lastMousePos)
        this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1)
        this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1)

        if (distance > this.threshold) {
            this.showNextImage()
            this.lastMousePos = { ...this.mousePos }
        }
        if (this.isIdle && this.zIndexVal !== 1) {
            this.zIndexVal = 1
        }
        requestAnimationFrame(() => this.render())
    }

    showNextImage() {
        ++this.zIndexVal
        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0
        const img = this.images[this.imgPosition]

        gsap.killTweensOf(img.DOM.el)
        gsap.timeline({
            onStart: () => this.onImageActivated(),
            onComplete: () => this.onImageDeactivated()
        })
            .fromTo(
                img.DOM.el,
                {
                    opacity: 1,
                    scale: 0,
                    zIndex: this.zIndexVal,
                    x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
                    y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2
                },
                {
                    duration: 0.4,
                    ease: 'power1',
                    scale: 1,
                    x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
                    y: this.mousePos.y - (img.rect?.height ?? 0) / 2
                },
                0
            )
            .fromTo(
                img.DOM.inner,
                { scale: 2.8, filter: 'brightness(250%)' },
                {
                    duration: 0.4,
                    ease: 'power1',
                    scale: 1,
                    filter: 'brightness(100%)'
                },
                0
            )
            .to(
                img.DOM.el,
                {
                    duration: 0.4,
                    ease: 'power2',
                    opacity: 0,
                    scale: 0.2
                },
                0.45
            )
    }

    onImageActivated() {
        this.activeImagesCount++
        this.isIdle = false
    }

    onImageDeactivated() {
        this.activeImagesCount--

        if (this.activeImagesCount === 0) {
            this.isIdle = true
        }
    }
}

function lerp(a, b, n) {
    return (1 - n) * a + n * b
}

function getLocalPointerPos(e, rect) {
    let clientX = 0
    let clientY = 0

    if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
    } else if ('clientX' in e) {
        clientX = e.clientX
        clientY = e.clientY
    }

    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    }
}

function getMouseDistance(p1, p2) {
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y

    return Math.hypot(dx, dy)
}

export class ImageItem {
    DOM = {
        el: null,
        inner: null
    }
    defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 }
    rect = null
    resize

    constructor(DOM_el) {
        this.DOM.el = DOM_el
        this.DOM.inner = this.DOM.el.querySelector('.content__img-inner')
        this.getRect()
        this.initEvents()
    }

    initEvents() {
        this.resize = () => {
            gsap.set(this.DOM.el, this.defaultStyle)
            this.getRect()
        }
        window.addEventListener('resize', this.resize)
    }

    getRect() {
        this.rect = this.DOM.el.getBoundingClientRect()
    }
}
