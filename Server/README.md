# Como executar
- Instale os pacotes com npm install.<br>
- Execute npx prisma migrate dev para rodar as migrations.<br>
- Execute npm run dev para iniciar o servidor.
- NÃO ESQUEÇA DE VERIFICAR NO ARQUIVO .env QUAL É A VARIAVEL QUE ESTÁ DESCOMENTADA.<br><br>
- SE FOR RODAR A VERSÃO WEB COMENTE A VARIAVEL ( MOBILE GITHUB_CLIENT_ID=... E A GITHUB_CLIENT_SECRET=...) E DESCOMENTE A VARIAVEL ( WEB GITHUB_CLIENT_ID=... E A GITHUB_CLIENT_SECRET=...)<br><br>
- SE FOR RODAR A VERSÃO MOBILE COMENTE A VARIAVEL ( WEB GITHUB_CLIENT_ID=... E A GITHUB_CLIENT_SECRET=...) E DESCOMENTE A VARIAVEL ( MOBILE GITHUB_CLIENT_ID=... E A GITHUB_CLIENT_SECRET=...)