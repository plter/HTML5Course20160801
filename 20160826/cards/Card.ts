/**
 * Created by plter on 8/26/16.
 */


namespace ucai {

    export class Card {

        private _htmlNode: HTMLDivElement;
        private _a: HTMLDivElement;
        private _b: HTMLDivElement;
        private _aVisible: boolean = true;
        private _onClick: (card: Card)=>void;

        constructor() {
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


        get htmlNode(): HTMLDivElement {
            return this._htmlNode;
        }

        showA() {
            this._a.style.display = "block";
            this._b.style.display = "none";
            this._aVisible = true;
        }

        showB() {
            this._a.style.display = "none";
            this._b.style.display = "block";
            this._aVisible = false;
        }

        get aVisible(): boolean {
            return this._aVisible;
        }


        get onClick(): (card: ucai.Card)=>void {
            return this._onClick;
        }

        set onClick(value: (card: ucai.Card)=>void) {
            this._onClick = value;
        }
    }
}