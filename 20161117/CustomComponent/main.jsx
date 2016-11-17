/**
 * Created by plter on 2016/11/17.
 */

(function () {

    function Hello(props) {
        return <h1>Hello {props.name}</h1>
    }

    ReactDOM.render(
        <div>
            <Hello name="ucai"/>
            <Clock bgColor="green" color="white"/>
        </div>,
        document.querySelector("#root")
    );

})();