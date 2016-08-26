/**
 * Created by plter on 8/26/16.
 */
var ucai;
(function (ucai) {
    var Card = (function () {
        function Card() {
            this._aVisible = true;
            this._htmlNode = document.createElement("div");
            this._htmlNode.className = "card";
            this._htmlNode["card"] = this;
            this._a = document.createElement("div");
            this._a.className = "card-a card-content";
            this._b = document.createElement("div");
            this._b.className = "card-b card-content";
            this._htmlNode.appendChild(this._a);
            this._htmlNode.appendChild(this._b);
            this.showA();
            this._htmlNode.onclick = function () {
                if (this.onClick) {
                    this.onClick(this);
                }
            }.bind(this);
        }
        Object.defineProperty(Card.prototype, "htmlNode", {
            get: function () {
                return this._htmlNode;
            },
            enumerable: true,
            configurable: true
        });
        Card.prototype.showA = function () {
            this._a.style.display = "block";
            this._b.style.display = "none";
            this._aVisible = true;
        };
        Card.prototype.showB = function () {
            this._a.style.display = "none";
            this._b.style.display = "block";
            this._aVisible = false;
        };
        Object.defineProperty(Card.prototype, "aVisible", {
            get: function () {
                return this._aVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "onClick", {
            get: function () {
                return this._onClick;
            },
            set: function (value) {
                this._onClick = value;
            },
            enumerable: true,
            configurable: true
        });
        return Card;
    }());
    ucai.Card = Card;
})(ucai || (ucai = {}));
//# sourceMappingURL=Card.js.map