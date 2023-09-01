import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export function useAddressContext() {
  return useContext(AddressContext);
}

export function AddressProvider({ children }) {
  const [address, setAddress] = useState({
    name: 'Ajay Kumar Josyula',
    country: 'India',
    city: 'Tanuku',
    mobile: '8985990834',
    address: '4-12, undrajavaram',
  });

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
}