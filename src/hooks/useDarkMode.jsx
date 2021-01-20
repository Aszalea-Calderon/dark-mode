import useLocalStorage from './useLocalStorage'

//Dark mode takes in useLocalStorage to check if we are using light mode or dark mode. Then keeps whatever has been used
const useDarkMode = (value) =>{
//this goes to local storage
  const [someValue, setSomeValue] = useLocalStorage('DarkModeEngaged', value)
  return [someValue, setSomeValue]
}

export default useDarkMode