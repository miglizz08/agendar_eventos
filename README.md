# Organiza Eventos

Projeto acadêmico da disciplina **Programação Front-End 01** para organizar festas e eventos. O usuário principal é a pessoa responsável pelo cadastro. Cada evento tem título, data, horário, local e descrição.

## Estado atual

- **Back-end:** API em Node.js e Express com dois eventos de exemplo armazenados em um array. As rotas `GET /eventos` e `POST /eventos` já estão implementadas. Os IDs são numéricos e sequenciais. O cadastro exige título, data, horário e local.
- **Front-end:** projeto Next.js criado. A página `/eventos` existe, mas ainda mostra apenas um texto provisório. A página inicial continua com o conteúdo padrão do Next.js.
- **Integração:** o front-end ainda não consulta a API. O pacote `cors` foi instalado, mas ainda não foi configurado no servidor.

Os dados ficam apenas na memória. Ao reiniciar a API, os cadastros feitos durante a execução são perdidos. A validação atual verifica se os quatro campos obrigatórios são textos não vazios; ainda não verifica o formato da data e do horário. A descrição é opcional no cadastro.

## Como executar

Tenha Node.js e npm instalados. Na raiz do projeto, abra dois terminais.

**API — porta 3001**

~~~powershell
cd backend
npm ci
node index.js
~~~

**Front-end — porta 3000**

~~~powershell
cd frontend
npm ci
npm run dev
~~~

Acesse `http://localhost:3000/eventos` para ver a página atual. Para consultar os eventos diretamente na API, acesse `http://localhost:3001/eventos`.

## API disponível

| Método | Rota | Resultado |
| --- | --- | --- |
| `GET` | `/eventos` | Retorna os eventos em JSON. |
| `POST` | `/eventos` | Cria um evento e retorna o registro com ID e status 201. Se faltar um campo obrigatório, retorna status 400 com uma mensagem de erro. |

O corpo do `POST` deve ser um JSON com `titulo`, `data`, `horario` e `local`. O campo `descricao` pode ser enviado, mas não é obrigatório. Exemplo:

~~~json
{
  "titulo": "Encontro de música",
  "data": "2026-11-15",
  "horario": "19:00",
  "local": "Centro cultural",
  "descricao": "Apresentações musicais abertas ao público."
}
~~~

## Próximos passos

1. Configurar o CORS e melhorar a validação do formato de data e horário.
2. Criar as rotas de edição e exclusão de eventos na API.
3. Substituir a página inicial padrão e listar os eventos da API no front-end.
4. Criar o formulário de cadastro e integrar as ações de editar e excluir.
5. Tratar carregamento, erros e mensagens de sucesso; revisar o layout no computador e no celular.
6. Testar o fluxo completo e preparar a demonstração do projeto.

O escopo inicial é o cadastro de eventos. Inscrições e venda de ingressos não estão previstas.
