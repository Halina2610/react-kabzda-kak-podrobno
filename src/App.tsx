import React from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {Rating} from './components/rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';


function App() {
    return (


        <div>
            <PageTitle title={'react - kabzda kak podrobno'}/>
            <Rating />
            <Rating />
            <Rating />
            <UncontrolledAccordion titleValue={'User'}/>
            <UncontrolledAccordion titleValue={'User'}/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
