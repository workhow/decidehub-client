import React from 'react';
import Popover from '@material-ui/core/Popover';
import SubHeader from '../../MainLayout/Settings/SubHeader/SubHeader';
import HorizontalRule from './HorizontalRule/HorizontalRule';

export default function SimplePopover(props) {
    return (
        <div className="">
            <Popover
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.onClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}>
                <div className="p-8">
                <p className="pb-4">Erdem  “Brand Manager” pozisyonu için seçildi.</p>
                <SubHeader text="1 saat önce"/>
                <HorizontalRule/>
                <p className="pb-4">Kadir “Yetki Dağılımı”oylaması başlattı.</p>
                <SubHeader text="2 gün önce"/>
                </div>
            </Popover>
        </div>
    );
}