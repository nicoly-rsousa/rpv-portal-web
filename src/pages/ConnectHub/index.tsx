
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../../schemas/contactScrema'
import type { ConnectFormData } from '../../schemas/contactScrema'

interface Contact {
  id: string
  name: string
  email: string
  telefone: string
}

export function ConnectHub() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const stored = localStorage.getItem('contacts')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ConnectFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data: ConnectFormData) => {
    const newContact: Contact = {
      id: crypto.randomUUID(),
      ...data
    }
    setContacts(prev => [newContact, ...prev])
    reset()
  }

  const removeContact = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">ConnectHub</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8">
        <div>
          <input
            {...register('name')}
            placeholder="Nome Completo"
            className="border p-2 rounded w-full"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div>
          <input
            {...register('email')}
            placeholder="E-mail"
            className="border p-2 rounded w-full"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div>
          <input
            {...register('telefone')}
            placeholder="Telefone"
            className="border p-2 rounded w-full"
          />
          {errors.telefone && <span className="text-red-500 text-sm">{errors.telefone.message}</span>}
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>

      {/* PARTE 2 — LISTA DE CONTATOS */}
      {contacts.length === 0 ? (
        <p className="text-gray-500">Nenhum contato cadastrado ainda.</p>
      ) : (
        contacts.map(contact => (
          <div key={contact.id} className="border p-4 rounded mb-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-600">{contact.email}</p>
              <p className="text-sm text-gray-600">{contact.telefone}</p>
            </div>
            <button
              onClick={() => removeContact(contact.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  )
}
