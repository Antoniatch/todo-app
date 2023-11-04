import { createContext, useState } from "react";

const initialList = [
  {
    id: 0,
    title: "Faire chauffer l'eau",
    description: "Mettre une casserole à feu fort pour porter à ébullition",
    done: true,
  },
  {
    id: 1,
    title: "Eplucher et découper les patates douces",
    description:
      "Utiliser un économe puis découper plus ou moins grossièrement",
    done: true,
  },
  {
    id: 2,
    title: "Mettre les patates à cuire",
    description: "Une fois l'eau à ébullition, verser les patates et couvrir",
    done: false,
  },
  {
    id: 3,
    title: "Essorer les patates",
    description:
      "Quand elles s'écrasent facilement avec une cuillère, elles sont prêtes",
    done: false,
  },
  {
    id: 4,
    title: "Ecraser et assaisonner",
    description:
      "Bien écraser, ajouter du lait, du poivre, du sel, et autres épices selon préférences",
    done: false,
  },
];

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialList);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};
