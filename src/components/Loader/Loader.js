import React from "react";
import "./Loader.css"

class Loader extends React.Component {
    render () {
        return <div className="table absolute top-0 left-0 h-full w-full bg-white">
        <div className="align-middle table-cell">
          <div className="loadingSymbol m-auto w-20 h-20">
          </div>
        </div>
      </div>
    }
}

export default Loader;