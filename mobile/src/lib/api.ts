import axios from 'axios'

/* para sistema Android o localhost não consegue enxergar a porta para fora do android, para resolver utilizar o seu ip da maquina (cmd ipconfig) */

// export const api = axios.create({
//   baseURL: 'http://localhost'
// })

export const api = axios.create({
  baseURL: 'http://192.168.0.106:3333',
})
