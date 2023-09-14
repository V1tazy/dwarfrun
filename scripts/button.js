"use strict";

class Button {
    constructor(label, color, width, height, textcolor = "#000000", textsize = 24) {
        this.label = label;
        this.width = width;
        this.height = height;
        this.color = color;
        this.textcolor = textcolor;
        this.textsize = textsize;
    }

    draw(ctx, x, y) {
        ctx.lineWidth = 1;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.textcolor;

        ctx.fillRect(x, y, this.width, this.height)

        ctx.fillStyle = this.textcolor;
        ctx.font = this.textsize + "px sans-serif"

        var rktmtx = ctx.measureText(this.label)

        ctx.fillText(
            this.label,
            x + (this.width - rktmtx.width) / 2,
            y + (rktmtx.actualBoundingBoxAscent + this.height) / 2
        )
     }
}

class BorderButton {
    constructor(label, color, border_color, width, height, textcolor = "#ffffff", textsize = 24) {
        this.label = label;
        this.width = width;
        this.height = height;
        this.color = color;
        this.textcolor = textcolor;
        this.border_color = border_color;
        this.textsize = textsize;
    }

    draw(ctx, x, y) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.border_color;

        ctx.lineWidth = 5;
        ctx.strokeRect(x, y, this.width, this.height);

        ctx.fillRect(x, y, this.width, this.height)

        ctx.lineWidth = 1;
        ctx.fillStyle = this.textcolor;

        ctx.font = this.textsize + "px sans-serif"

        var rktmtx = ctx.measureText(this.label)

        ctx.fillText(
            this.label,
            x + (this.width - rktmtx.width) / 2,
            y + (rktmtx.actualBoundingBoxAscent + this.height) / 2
        )
    }
}