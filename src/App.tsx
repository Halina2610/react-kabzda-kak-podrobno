import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledRating} from './components/rating/UncontrolledRating';
import {UncontrolledOnOff} from './components/onOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import CustomCursor from './components/cursor/CustomCursor';
import {Rating, RatingValueType} from './components/rating/Rating';
import {OnOff} from './components/onOff/OnOff';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true)

    const AccordionOnClickHandler = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const controlledCallback = () => {
        setControlledOnOff(!controlledOnOff);
    }

    return (
        <AppWrapper>
            <PageTitle title={'React - Kabzda kak podrobno'}/>
            <UncontrolledRating/>
            <OnOff value={controlledOnOff} callback={controlledCallback}/>
            <UncontrolledAccordion titleValue={'User1'}/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onClick={AccordionOnClickHandler}
            />
            <UncontrolledOnOff onChange={controlledCallback}/> {controlledOnOff.toString()}
            <CustomCursor/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </AppWrapper>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

const AppWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default App;