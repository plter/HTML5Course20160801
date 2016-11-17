/**
 * Created by plter on 2016/11/17.
 */


class Clock extends React.Component {

    render() {
        return <div style={{backgroundColor: this.props.bgColor}}>00:00:00</div>
    }
}

window.Clock = Clock;