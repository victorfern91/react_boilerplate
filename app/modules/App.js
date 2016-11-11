import React from 'react';

export default React.createClass({
  render() {
    return (
        <div className="app-wrapper">
            <h1>Hello, React Router!</h1>
            <nav>Menu</nav>
            <div className="app-body">
                {this.props.children}
            </div>
        </div>
    );
  }
});
