/**
 * Created by plter on 2016/11/17.
 */

import React from "react";

class Rect extends React.Component{


    render(){
        return <div></div>
    }
}


class Button extends React.Component{


    render(){
        return <Rect><div>Click me</div></Rect>
    }
}