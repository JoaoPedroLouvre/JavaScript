import dayjs from 'dayjs'
import './styles/index.css' // -> Indicando para o webback onde está o CSS, pois ele vai buscar pelo index

alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")} `)