/**
 * Created by plter on 8/26/16.
 */

///<reference path="Card.ts"/>


(function () {

    var card = new ucai.Card();

    document.body.appendChild(card.htmlNode);

    // card.htmlNode.onclick = function () {
    //     if (this.card.aVisible) {
    //         this.card.showB();
    //     } else {
    //         this.card.showA();
    //     }
    // }

    card.onClick = function (c: ucai.Card) {
        if (c.aVisible) {
            c.showB();
        } else {
            c.showA();
        }
    }

})();