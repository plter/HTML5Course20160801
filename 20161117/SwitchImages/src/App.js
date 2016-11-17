import React, {Component} from 'react';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

class App extends Component {


    constructor(props) {
        super(props);

        this.images = [img1, img2, img3, img4];

        this.state = {
            currentImage: img1
        };
    }

    componentDidMount() {
        var index = 0;
        this.timerId = setInterval(() => {
            index++;
            if (index >= this.images.length) {
                index = 0;
            }

            this.setState({
                currentImage: this.images[index]
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <img src={this.state.currentImage}/>
    }
}

export default App;
