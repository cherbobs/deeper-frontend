import { ImageSourcePropType } from "react-native";


export interface DataType {
  cardId: number;
  text: string;
  backgroundColor: string;
}

const data: DataType[] = [
  {
    cardId: 1,
    text: "Rakha Wibowo",
    backgroundColor: "#6d85a4",
  },
  {
    cardId: 2,
    text: "Rakha Wibowo",
    backgroundColor: "#86b4ee",
  },
  {
    cardId: 3,
    text: "Rakha Wibowo",
    backgroundColor: "#795de7",
  },
];

export { data };
