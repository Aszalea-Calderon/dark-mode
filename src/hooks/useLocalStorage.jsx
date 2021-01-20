import { useState } from 'react'
//We use this method as local storage does not take in an object and must be changed to a string.

//This checks to see if there is any data in local storage
const useLocalStorage = (key, initialValue) =>{
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
      // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
       // Save state
        setStoredValue(value);
          // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];

};

export default useLocalStorage