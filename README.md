#  Portal de Ferramentas Utilitárias

## 🎯 Visão do Produto

O **portal web** centraliza ferramentas de produtividade pessoal em um único lugar, eliminando a necessidade de múltiplos aplicativos. O utilizador final ganha acesso imediato a gestão de tarefas, agenda de contactos e controlo financeiro, tudo com dados salvos localmente no seu navegador, sem necessidade de cadastro ou servidor.

**Valor entregue**: Aumento de produtividade pessoal com ferramentas simples, rápidas e sempre disponíveis.

---

## 👤 User Stories — Módulo TaskMaster

### US-01 - Adicionar Tarefa
**Como** utilizador, **eu quero** adicionar uma nova tarefa com título e categoria, **para que** eu possa organizar minhas atividades de forma estruturada.

**Critérios de Aceitação:**
- [ ] O campo "Título" é obrigatório e exibe erro se vazio
- [ ] O campo "Título" não aceita menos de 5 caracteres
- [ ] O utilizador deve selecionar uma categoria (Trabalho, Pessoal, Urgente)
- [ ] Após submissão válida, o formulário é limpo automaticamente

---

### US-02 - Visualizar Lista de Tarefas
**Como** utilizador, **eu quero** visualizar todas as minhas tarefas cadastradas em uma lista, **para que** eu tenha uma visão clara do que precisa ser feito.

**Critérios de Aceitação:**
- [ ] As tarefas são exibidas em ordem cronológica (mais recente primeiro)
- [ ] Cada tarefa exibe título, categoria (com badge colorido) e data de criação
- [ ] Quando não há tarefas, uma mensagem informativa é exibida

---

### US-03 - Remover Tarefa
**Como** utilizador, **eu quero** remover uma tarefa da lista, **para que** eu possa manter minha lista atualizada e sem itens concluídos ou irrelevantes.

**Critérios de Aceitação:**
- [ ] Cada tarefa possui um botão de exclusão visível
- [ ] Ao clicar em excluir, a tarefa é removida imediatamente da lista
- [ ] A exclusão também remove o dado do localStorage

---

### US-04 - Persistência de Dados
**Como** utilizador, **eu quero** que minhas tarefas sejam salvas automaticamente, **para que** eu não perca meu progresso ao recarregar ou fechar o navegador.

**Critérios de Aceitação:**
- [ ] Ao adicionar uma tarefa, o dado é salvo no localStorage imediatamente
- [ ] Ao carregar a página, as tarefas do localStorage são restauradas
- [ ] Ao remover uma tarefa, o localStorage é atualizado

---

### US-05 - Categorizar Tarefas
**Como** utilizador, **eu quero** classificar cada tarefa em uma categoria (Trabalho, Pessoal, Urgente), **para que** eu possa identificar visualmente a prioridade de cada item.

**Critérios de Aceitação:**
- [ ] O campo de categoria é obrigatório — o formulário não submete sem seleção
- [ ] Cada categoria exibe um badge com cor distinta (azul, verde, vermelho)
- [ ] A categoria inválida ou não selecionada exibe mensagem de erro clara

---

## 🏁 Milestones

### M1 - Estrutura de Rotas e Home
> Meta: Aplicação navegável com roteamento funcional e layout base prontos.

| Issue | Descrição | Status |
|---|---|---|
| #1 | US-01 — Adicionar Tarefa com Título e Categoria | 
| #2 | US-02 — Visualizar Lista de Tarefas Cadastradas | 

**Tarefas técnicas:**
- [ ] Setup do projeto (Vite + React + TypeScript)
- [ ] Instalação e configuração do TailwindCSS
- [ ] Criação do componente Navbar com links ativos
- [ ] Definição de todas as rotas no App.tsx
- [ ] Página Home com os 3 cards de acesso

---

### M2 - Finalização dos Módulos de Dados
> Meta: Os 3 módulos funcionais com validação completa e persistência.

| Issue | Descrição | Status |
|---|---|---|
| #3 | US-03 — Remover Tarefa da Lista | 
| #4 | US-04 — Persistência Automática no localStorage | 
| #5 | US-05 — Categorizar Tarefas com Badge Visual | 

**Tarefas técnicas:**
- [ ] Schemas Zod criados para todos os formulários
- [ ] TaskMaster: CRUD completo + localStorage
- [ ] ConnectHub: Cadastro com validação de e-mail e telefone + localStorage
- [ ] MoneyFlow: Registro de transações + cálculo de saldo + localStorage
- [ ] Testes manuais de validação em todos os formulários

---

## 📌 Issues — User Stories (TaskMaster)

### Issue #1 — US-01 — Adicionar Tarefa com Título e Categoria
> 🏁 Milestone: M1 | 🏷️ Labels: `feature` `validation`

**Como** utilizador, **eu quero** adicionar uma nova tarefa informando um título e uma categoria, **para que** eu possa organizar minhas atividades de forma estruturada e categorizada.

**Critérios de Aceitação:**
- [ ] O campo "Título" é obrigatório — o formulário não submete se estiver vazio
- [ ] O campo "Título" não aceita menos de 5 caracteres e exibe mensagem de erro
- [ ] O campo "Categoria" oferece as opções: Trabalho, Pessoal e Urgente
- [ ] A categoria é obrigatória — o formulário não submete sem seleção válida
- [ ] Após submissão bem-sucedida, todos os campos são limpos automaticamente

---

### Issue #2 — US-02 — Visualizar Lista de Tarefas Cadastradas
> 🏁 Milestone: M1 | 🏷️ Labels: `feature` `ui/ux`

**Como** utilizador, **eu quero** visualizar todas as minhas tarefas em uma lista organizada, **para que** eu tenha uma visão clara e imediata de tudo o que precisa ser feito.

**Critérios de Aceitação:**
- [ ] As tarefas são exibidas em ordem cronológica (mais recente no topo)
- [ ] Cada item exibe título, badge de categoria com cor distinta e data de criação
- [ ] Quando não há tarefas, uma mensagem informativa é exibida no lugar da lista

---

### Issue #3 — US-03 — Remover Tarefa da Lista
> 🏁 Milestone: M2 | 🏷️ Labels: `feature` `persistence`

**Como** utilizador, **eu quero** remover uma tarefa individualmente da lista, **para que** eu possa manter minha lista atualizada sem itens concluídos ou irrelevantes.

**Critérios de Aceitação:**
- [ ] Cada tarefa possui um botão de exclusão visível
- [ ] Ao clicar, a tarefa é removida imediatamente da tela sem recarregar a página
- [ ] A remoção também atualiza o localStorage para que a tarefa não reapareça

---

### Issue #4 — US-04 — Persistência Automática no localStorage
> 🏁 Milestone: M2 | 🏷️ Labels: `persistence`

**Como** utilizador, **eu quero** que minhas tarefas sejam salvas automaticamente no navegador, **para que** eu não perca meu progresso ao recarregar ou fechar a página.

**Critérios de Aceitação:**
- [ ] Ao adicionar uma tarefa, ela é salva no localStorage imediatamente
- [ ] Ao carregar a página, as tarefas armazenadas são recuperadas e exibidas
- [ ] Ao remover uma tarefa, o localStorage é atualizado corretamente

---

### Issue #5 — US-05 — Categorizar Tarefas com Badge Visual
> 🏁 Milestone: M2 | 🏷️ Labels: `validation` `ui/ux`

**Como** utilizador, **eu quero** classificar cada tarefa em uma categoria visual, **para que** eu possa identificar rapidamente a prioridade e o contexto de cada item na lista.

**Critérios de Aceitação:**
- [ ] O campo de categoria é obrigatório e exibe erro se não selecionado
- [ ] Cada categoria exibe badge com cor distinta: Trabalho = azul, Pessoal = verde, Urgente = vermelho
- [ ] Valores inválidos ou vazios são bloqueados pela validação do schema Zod

---

## 🛠️ Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| React + Vite | Base da aplicação |
| TypeScript | Tipagem estática |
| TailwindCSS | Estilização |
| React Hook Form | Gerenciamento de formulários |
| Zod | Validação de schemas |
| React Router Dom | Roteamento |
| LocalStorage API | Persistência de dados |

---
Acesse: https://nicoly-rsousa.github.io/rpv-portal-web/
