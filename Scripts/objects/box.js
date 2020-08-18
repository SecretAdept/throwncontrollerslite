var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Box = /** @class */ (function (_super) {
        __extends(Box, _super);
        function Box(id, x, y, color) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (color === void 0) { color = "000"; }
            var _this = _super.call(this) || this;
            _this.num = id;
            _this.cursor = "pointer";
            _this.graphics.beginFill(color).drawRect(x, y, 150, 150);
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        Box.prototype.mouseOver = function () {
            this.x -= 5;
            this.y -= 5;
            this.scaleX *= 1.01;
            this.scaleY *= 1.01;
            this.bgs = createjs.Sound.play("select");
            this.bgs.volume = 0.5;
        };
        Box.prototype.mouseOut = function () {
            this.x += 5;
            this.y += 5;
            this.scaleX /= 1.01;
            this.scaleY /= 1.01;
        };
        return Box;
    }(createjs.Shape));
    objects.Box = Box;
})(objects || (objects = {}));
//# sourceMappingURL=box.js.map