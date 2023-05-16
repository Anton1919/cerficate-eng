import React, {useState} from 'react';
import s from './App.module.css'
import Card from "./components/Card/Card";
import {CardsType, defState} from "bll/cards-data";


function App() {
    const [openedCard, setOpenedCard] = useState<CardsType | null>(null)

    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                {
                    !openedCard
                        ?
                        <>
                            {defState.map((c: CardsType) => {
                                return (
                                    <Card
                                        toggleOpenCard={setOpenedCard}
                                        key={c.id}
                                        card={c}
                                    />)
                            })
                            }
                        </>
                        :
                        <Card
                            toggleOpenCard={setOpenedCard}
                            card={openedCard}
                            isOpened
                        />}
            </div>
        </div>
    );
}

export default App;
