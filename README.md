# Organiza Eventos

Projeto acadêmico da disciplina **Programação Front-End 01** para organizar festas e eventos. O usuário principal é a pessoa responsável pelo cadastro. Cada evento tem título, data, horário, local e descrição.

## Estado atual

- **Back-end:** API em Node.js e Express. Lista, cadastra e edita eventos por meio das rotas `GET /eventos`, `POST /eventos` e `PUT /eventos/:id`.
- **Front-end:** projeto Next.js criado. A página `/eventos` ainda mostra apenas um texto provisório, e a página inicial mantém o conteúdo padrão do Next.js.
- **Integração:** o front-end ainda não consulta a API. O pacote `cors` está instalado, mas não foi configurado no servidor.

A API começa com dois eventos de exemplo em um array. Os novos eventos recebem IDs numéricos sequenciais. Os dados ficam somente na memória e voltam ao estado inicial quando o servidor reinicia.

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

Acesse `http://localhost:3000/eventos` para ver a página atual. A lista em JSON está disponível em `http://localhost:3001/eventos`.

## API disponível

| Método | Rota | Resultado |
| --- | --- | --- |
| `GET` | `/eventos` | Retorna todos os eventos em JSON. |
| `POST` | `/eventos` | Cadastra um evento, atribui um ID e retorna status 201. |
| `PUT` | `/eventos/:id` | Atualiza um evento existente e retorna o registro atualizado. |

No cadastro e na edição, `titulo`, `data`, `horario` e `local` devem ser textos não vazios. Se algum deles for inválido, a API responde com status 400 e uma mensagem. `descricao` é opcional; na edição, quando não é enviada, passa a ser uma string vazia. A edição responde com status 404 se o ID não corresponder a um evento.

Exemplo de corpo JSON para `POST` ou `PUT`:

~~~json
{
  "titulo": "Encontro de música",
  "data": "2026-11-15",
  "horario": "19:00",
  "local": "Centro cultural",
  "descricao": "Apresentações musicais abertas ao público."
}
~~~

A validação atual não confere se a data e o horário têm um formato válido.

## Próximos passos

1. Implementar `DELETE /eventos/:id` e tratar IDs inexistentes.
2. Configurar o CORS e melhorar a validação de data e horário.
3. Substituir a página inicial padrão e listar os eventos da API no front-end.
4. Criar o formulário de cadastro e integrar as ações de editar e excluir.
5. Tratar carregamento, erros e mensagens de sucesso; revisar o layout no computador e no celular.
6. Testar o fluxo completo e preparar a demonstração do projeto.

O escopo inicial é o cadastro de eventos. Inscrições e venda de ingressos não estão previstas.
