import { createContext, useState } from "react";

const initialList = [
  {
    id: 0,
    title: "Faire chauffer l'eau",
    description: "Mettre une casserole à feu fort pour porter à ébullition",
    done: true,
    lastUpdate: new Date(2023, 10, 4, 12),
  },
  {
    id: 1,
    title: "Eplucher et découper les patates douces",
    description:
      "Utiliser un économe puis découper plus ou moins grossièrement",
    done: true,
    lastUpdate: new Date(2023, 10, 4, 13),
  },
  {
    id: 2,
    title: "Mettre les patates à cuire",
    description: "Une fois l'eau à ébullition, verser les patates et couvrir",
    done: false,
    lastUpdate: new Date(2023, 10, 4, 14),
  },
  {
    id: 3,
    title: "Essorer les patates",
    description:
      "Quand elles s'écrasent facilement avec une cuillère, elles sont prêtes",
    done: false,
    lastUpdate: new Date(2023, 10, 4, 15),
  },
  {
    id: 4,
    title: "Ecraser et assaisonner",
    description:
      "Bien écraser, ajouter du lait, du poivre, du sel, et autres épices selon préférences",
    done: false,
    lastUpdate: new Date(2023, 10, 4, 16),
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
