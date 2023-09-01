import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export function useCardContext() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  const [cardDetailsList, setCardDetailsList] = useState([
    {
        cardNumber: '1234 5678 9012 3456',
        cardHolderName: 'John Doe',
        expiry: '12/23',
        cvv: '129',
        type:'VISA'
        // Other card details...
      },
      {
        cardNumber: '9876 5432 1098 7654',
        cardHolderName: 'Jane Smith',
        expiry: '09/25',
        cvv: '123',
        type:"American Express"
        // Other card details...
      },
  ]);

  const addCard = (newCardDetails) => {
    setCardDetailsList([...cardDetailsList, newCardDetails]);
  };

  const removeCard = (index) => {
    const updatedCards = cardDetailsList.filter((_, i) => i !== index);
    setCardDetailsList(updatedCards);
  };

  return (
    <CardContext.Provider value={{ cardDetailsList, addCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
}
