/**
 * Created by plter on 2016/11/17.
 */


class Clock extends React.Component {


    constructor(props) {
        super(props);

        this.state = {timeStr: new Date().toTimeString()};
    }

    componentDidMount() {

        this.timerId = setInterval(() => {
            this.setState({
                timeStr: new Date().toTimeString()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <div style={{backgroundColor: this.props.bgColor, color: this.props.color}}>{this.state.timeStr}</div>
    }
}

window.Clock = Clock;