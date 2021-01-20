import useLocalStorage from './useLocalStorage'

const useDarkMode = (value) =>{

  const [someValue, setSomeValue] = useLocalStorage('DarkModeEngaged', value)
  return [someValue, setSomeValue]
}

export default useDarkMode