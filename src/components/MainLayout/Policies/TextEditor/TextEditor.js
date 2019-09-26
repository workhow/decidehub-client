import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

class TextEditor extends Component {
  modules = {
    toolbar: [
      [
        {
          header: [1, 2, false]
        }
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        {
          list: "ordered"
        },
        {
          list: "bullet"
        },
        {
          indent: "-1"
        },
        {
          indent: "+1"
        }
      ],
      ["link", "image"],
      ["clean"]
    ]
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];

  render() {
    return (
      <div>
        <ReactQuill
          theme="snow"
          onChange={this.props.onChange}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          value={this.props.value}
          bounds={".app"}
          scrollingContainer=".text-editor"
          placeholder={this.props.placeholder}
          className="bg-white"
        />
      </div>
    );
  }
}

export default TextEditor;
