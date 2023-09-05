"use strict";

class Button {
    constructor(label, color, width, height) {
        this.#label = label;
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    draw(ctx, x, y) {
        ctx.fillStyle = this.#color;
        canvas.fillRect(x, y, this.#width, this.#height)
    }
}