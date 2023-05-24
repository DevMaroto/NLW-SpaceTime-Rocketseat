# Como executar
Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando.

- Instale os pacotes com npm install.
- Execute npm run start para iniciar o servidor expo.
- Não esqueça de mudar a variável no arquivo .env na pasta Server. Descomentar o github mobile (GITHUB_CLIENT_ID =...) (GITHUB_CLIENT_SECRET = ...) e comente o github web (GITHUB_CLIENT_ID = ...) (GITHUB_CLIENT_SECRET = ...)
- Acesse a pasta src/lib/api.ts altere a baseURL 'HTTP//(IP DA SUA MAQUINA)'.  Para sistema Android o 'HTTP://localhost' não consegue enxergar a porta para fora do android, por isso você tem que configurar com o ip da sua maquina.  "Abra o prompt de comando CMD e digite ipconfig para obter o ip da sua maquina"
