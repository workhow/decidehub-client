import React from 'react';
import Modal from '@material-ui/core/Modal';
import CelebrationImage from '../FinalCongratsModal/Celebration.svg';

export default function FinalCongratsModal(props) {

    const [modalStyle] = React.useState({top: '50%', left: '50%', transform: 'translate(-50%, -50%)'});

    return (
        <div>
            <Modal open={props.open} onClose={props.closeModal()}>
                <div style={modalStyle} className="absolute w-1/4 bg-white px-12 py-24">
                    <div className="flex flex-col">
                        <img src={CelebrationImage} alt="party illustration" className="w-24 self-center pb-8"/>
                        <h1 className="self-center text-2xl pb-4">{props.title}</h1>
                        <p className="self-center text-sm pb-8">
                            {props.text}
                        </p>
                        <div className="self-center w-1/3">
                            <button
                                className="bg-gray-dark text-white font-bold uppercase py-3 px-4 text-xs w-full"
                                onClose={props.closeModal()}>
                                Devam Et
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}