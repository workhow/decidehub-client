import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '<h1>İlk Karar</h1><h2>Kurum / Topluluk Yönetmeliği</h2><br/><p>1.Bu topluluk/şirket Decide Hub’da almış olduğu kararlara göre yönetilecektir.</p>'
        }
        this.handleChange = this
            .handleChange
            .bind(this)
    }

    modules = {
        toolbar: [
            [
                {
                    'header': [1, 2, false]
                }
            ],
            [
                'bold', 'italic', 'underline', 'strike', 'blockquote'
            ],
            [
                {
                    'list': 'ordered'
                }, {
                    'list': 'bullet'
                }, {
                    'indent': '-1'
                }, {
                    'indent': '+1'
                }
            ],
            [
                'link', 'image'
            ],
            ['clean']
        ]
    }

    formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image'
    ]

    handleChange(value) {
        this.setState({text: value})
    }

    render() {
        return (
            <div>
            <ReactQuill 
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.text}
              modules={TextEditor.modules}
              formats={TextEditor.formats}
              bounds={'.app'}
              placeholder={this.props.placeholder}
              className="bg-white"
             />
           </div>
        )
    }
}

export default TextEditor;
