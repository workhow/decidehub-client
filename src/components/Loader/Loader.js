import React from "react";
import "./Loader.css"

class Loader extends React.Component {
    render () {
        return <div class="table absolute top-0 left-0 h-full w-full">
        <div class="align-middle table-cell">
          <div class="loadingSymbol m-auto w-20 h-20">
          </div>
        </div>
      </div>
    }
}

export default Loader;