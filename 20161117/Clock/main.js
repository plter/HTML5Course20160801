/**
 * Created by plter on 2016/11/17.
 */


(function () {

    let count = 0;

    function timeFormat(num) {
        return (num >= 10 ? "" : "0") + num;
    }


    function render() {

        let date = new Date();
        let timeStr = `${timeFormat(date.getHours())}:${timeFormat(date.getMinutes())}:${timeFormat(date.getSeconds())}`;
        count++;

        ReactDOM.render(
            <div>
                <h1>{timeStr}</h1>
                <div className="mydiv"></div>
                <div>{count}</div>
            </div>,
            document.querySelector("#root")
        );
    }

    setInterval(render, 1000);

})();