import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import Card from './Card/Card';
import ProfilePic from '../../AccountLayout/Register/RegisterStepOne/manager.svg';
import '../Users/UsersLayout.css';

const useStyles = makeStyles({
    list: {
      width: 500,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function MainLayout() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
        </div>
      );
    
        return (<div>
            <LeftNavbar/>
            <div className="ml-24">
                <div className="flex flex-row ml-16 md:ml-32 xl:ml-48 mt-16 lg:mt-32 m-8">
                    <div>
                        <p className="text-2xl text-gray-dark inline ml-5" onClick={toggleDrawer('right', true)}>
                            Üyeler</p>
                        <Button onClick={toggleDrawer('right', true)} className="text-base text-gray-text ml-8 inline">Yeni Ekle</Button>
                    </div>
                </div>
                <div className="user-container mx-16 md:mx-32 xl:mx-48 mt-8">
                    <Card name="Ray Cooper" email="ray@gmail.com" imgLink={ProfilePic}/>
                    <Card name="Laura Sophia Urena" email="laura@gmail.com" imgLink={ProfilePic}/>
                    <Card name="Linzell Bowman" email="linzell@gmail.com" imgLink={ProfilePic}/>
                    <Card name="Cha Ji-Hun" email="cha@gmail.com" imgLink={ProfilePic}/>
                    <Card name="Kathy Bloom" email="kathy@gmail.com" imgLink={ProfilePic}/>
                    <Card name="John Smith" email="john@gmail.com" imgLink={ProfilePic}/>
                </div>
            </div>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>)
}