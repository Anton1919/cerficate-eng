import certificate from "img/certificate.jpg";
import group from "../img/group.jpg";
import lingua from "../img/school.jpg";

export type CardsType = {
	id: number
	image: string

}

export const defState = [
	{id: 0, image: certificate},
	{id: 1, image: group},
	{id: 2, image: lingua},
]