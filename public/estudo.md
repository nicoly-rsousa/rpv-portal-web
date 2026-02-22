React Hook Form + Zod

useForm → gerencia o formulário
zodResolver → conecta as regras do Zod ao formulário
register → conecta cada input ao formulário
handleSubmit → só chama o onSubmit se a validação passar
formState.errors → objeto com as mensagens de erro de cada campo


-----------------------------------------------------------------------------
TASKMASTER
schema --> z.infer<typeof taskSchema> → gera o tipo TypeScript automaticamente
-----------------------------------------------------------------------------
Conceito: dois useEffect
Você vai usar dois useEffect com funções diferentes:

1º → roda uma vez quando a página abre → lê o localStorage e carrega as tarefas salvas
2º → roda toda vez que tasks mudar → salva as tarefas no localStorage
-----------------------------------------------------------------------------
 Por que JSON.stringify e JSON.parse?
O localStorage só guarda texto.

 Então:

JSON.stringify(tasks) → converte o array de objetos em texto para salvar
JSON.parse(stored) → converte o texto de volta em array ao ler
-----------------------------------------------------------------------------
// ^\d{10,11}$ significa:
// ^ → começa aqui
// \d → apenas dígitos (0-9)
// {10,11} → entre 10 e 11 caracteres
// $ → termina aqui
-----------------------------------------------------------------------------