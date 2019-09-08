import React, {Component} from 'react';
import FormBlock from "../../../AccountLayout/Register/FormBlock/FormBlock";
import TextArea from "../../../AccountLayout/Register/TextArea/TextArea";
import Button from "../../../AccountLayout/Register/Button/Button";

class SharePollModal extends Component {
    render() {
        return (
            <div className="flex flex-col px-3 mt-8">
                <p className="text-2xl mb-16 mt-4 text-gray-dark">Paylaşımlı oylama başlat</p>
                <div className="mb-8">
                    <FormBlock
                        className="text-base text-gray-dark"
                        labelText="Başlık"
                        placeholderText=""/>
                </div>
                <div>
                    <TextArea
                        className="text-base text-gray-dark"
                        labelText="Açıklama"
                        placeholderText=""/>
                </div>
                <div className="w-1/3 mt-32">
                    <Button text="Devam Et" onClick={this.props.toggleDrawer('congratssharemodal', 'right', true)}/>
                </div>
            </div>
        )
    }
}

export default SharePollModal;