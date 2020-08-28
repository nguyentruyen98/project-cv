import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Cart from './Cart'


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const right = 'right'

    return (
        <div>
            <React.Fragment key={right}>
                <Button onClick={toggleDrawer(right, true)}>{right}</Button>
                <Drawer anchor={right} open={state[right]} onClose={toggleDrawer(right, false)}>
                    <Cart></Cart>
                </Drawer>
            </React.Fragment>
        </div>
    );
}