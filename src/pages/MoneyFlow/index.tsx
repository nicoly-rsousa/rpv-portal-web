import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { moneySchema } from '../../schemas/moneySchema'
import type { MoneyFormData } from '../../schemas/moneySchema'
import { useState, useEffect } from 'react'

interface Money extends MoneyFormData {
    id: string
}

export function MoneyFlow() {

    const [money, setMoney] = useState<Money[]>([])

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(moneySchema)
    })

    useEffect(() => {
        const salvo = localStorage.getItem('money')
        if (salvo) {
            setMoney(JSON.parse(salvo)) //converte texto para objeto novamente
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('money', JSON.stringify(money))
    }, [money]) //toda vez que o money mudar, ele salva no localStorage, convertendo o objeto para texto

    const saldoTotal = money.reduce((acumulador, transacao) => {
        if (transacao.tipo === 'entrada') {
            return acumulador + transacao.valor
        } else {
            return acumulador - transacao.valor
        }
    }, 0)// reduce Transforma um array inteiro em um único valor final.


    function onSubmit(data: MoneyFormData) {
        const novaMoney = { id: crypto.randomUUID(), ...data }
        setMoney(anterior => [novaMoney, ...anterior])
        reset()
    }

    return (

        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6"> MoneyFlow</h1>

            <div className={`rounded-xl p-4 mb-6 text-center font-bold text-2xl ${saldoTotal >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                Saldo Total: R$ {saldoTotal.toFixed(2)}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8">


                <div>
                    <input
                        {...register('descricao')}
                        placeholder="Descrição da transação"
                        className="w-full border rounded-lg px-3 py-2"
                    />


                    {errors.descricao && <p className="text-red-500 text-sm">{errors.descricao.message}</p>}
                </div>


                <div>
                    <input
                        {...register('valor', { valueAsNumber: true })}
                        type="number"
                        step="0.01"
                        placeholder="Valor da transação"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    {errors.valor && <p className="text-red-500 text-sm">{errors.valor.message}</p>}
                </div>
                <div>
                    <select {...register('tipo')} className="w-full border rounded-lg px-3 py-2">
                        <option value="" disabled>Selecione o tipo...</option> 
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                    {errors.tipo && <p className="text-red-500 text-sm">{errors.tipo.message}</p>}
                </div>

                <button type="submit" className="bg-blue-600 text-white rounded-lg py-2 font-semibold">
                    Adicionar
                </button>

            </form>


            {money.length === 0 ? (
                <p className="text-gray-400">Nenhuma transação ainda. Adicione uma acima!</p>
            ) : (
                <ul className="flex flex-col gap-3">
                    {money.map((transacao) => (
                        <li key={transacao.id} className="flex items-center justify-between border rounded-xl px-4 py-3">

                            <div>

                                <p className="font-medium">{transacao.descricao}</p>

                                <p className="text-sm text-gray-400">{transacao.tipo}</p>
                            </div>


                            <button
                                onClick={() => setMoney(anterior => anterior.filter(t => t.id !== transacao.id))}
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