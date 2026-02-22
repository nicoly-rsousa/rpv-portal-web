// Importações das bibliotecas necessárias
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { taskSchema } from '../../schemas/taskSchema'
import type { TaskFormData } from '../../schemas/taskSchema'
import { useState, useEffect } from 'react'

interface Task extends TaskFormData {
  id: string
}

export function TaskMaster() {

  const [tasks, setTasks] = useState<Task[]>([])

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema)
  })

  useEffect(() => {
    const salvo = localStorage.getItem('tasks')
    if (salvo) {
      setTasks(JSON.parse(salvo))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  function onSubmit(data: TaskFormData) {
    const novaTarefa = { id: crypto.randomUUID(), ...data }
    setTasks(anterior => [novaTarefa, ...anterior])
    reset() 
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">✅ TaskMaster</h1>


      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8">

     
        <div>
          <input
            {...register('title')}
            placeholder="Título da tarefa"
            className="w-full border rounded-lg px-3 py-2"
          />
       
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

     
        <div>
          <select {...register('category')} className="w-full border rounded-lg px-3 py-2">
            <option value="">Selecione uma categoria...</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white rounded-lg py-2 font-semibold">
          Adicionar
        </button>

      </form>
  

      {tasks.length === 0 ? (
        <p className="text-gray-400">Nenhuma tarefa ainda. Adicione uma acima!</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {tasks.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center justify-between border rounded-xl px-4 py-3">
              
              <div>
          
                <p className="font-medium">{tarefa.title}</p>
              
                <p className="text-sm text-gray-400">{tarefa.category}</p>
              </div>

           
              <button
                onClick={() => setTasks(anterior => anterior.filter(t => t.id !== tarefa.id))}
                className="text-red-500 font-bold hover:text-red-700"
              >
                🗑 Remover
              </button>

            </li>
          ))}
        </ul>
      )}
        </div>
  )
}