import React, {MouseEvent} from 'react';
import s from "./Card.module.css";
import {CardsType} from "bll/cards-data";

type PropsType = {
	card: CardsType
	toggleOpenCard: (value: CardsType | null) => void
	isOpened?: boolean
}

const Card = ({card, toggleOpenCard, isOpened}: PropsType) => {

	const {image} = card

	const closeHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		toggleOpenCard(null)
	}

	const openHandler = () => {
		toggleOpenCard(card)
	}

	return (
		<div onClick={openHandler} className={isOpened ? s.cardLarge : s.card}>
			<img src={image} alt="photo"/>
			{isOpened &&
          <div className={isOpened ? s.btnWrapperLarge : s.btnWrapper}>
              <button
                  className={isOpened ? s.btnLarge : s.btn}
                  onClick={closeHandler}>X
              </button>
          </div>
			}
		</div>)
};

export default Card;