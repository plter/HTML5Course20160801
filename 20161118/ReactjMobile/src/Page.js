/**
 * Created by plter on 2016/11/18.
 */

import React from "react";

class Page extends React.Component {

    render() {
        return (<div data-role="page">
            <div data-role="header">
                <h3>jQuery mobile页面</h3>
            </div>
            <div role="main" className="ui-content">
                <button>Click me</button>
            </div>
            <div data-role="footer"></div>
        </div>);
    }
}

export default Page;