import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">

            <h1 className="text-4xl font-bold text-center mb-10">
                Bem-vinda ao UtilPortal 👋
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div onClick={() => navigate('/taskmaster')}
                    className="cursor-pointer bg-white border rounded-2xl p-6 hover:shadow-lg"
                >
                    <div className="text-4xl mb-3">✅</div>
                    <h2 className="text-xl font-bold mb-2">TaskMaster</h2>
                    <p className="text-gray-500">Gerencie suas tarefas com categorias.</p>
                </div>



                <div onClick={() => navigate('/connecthub')}
                    className="cursor-pointer bg-white border rounded-2xl p-6 hover:shadow-lg"
                >
                    <div className="text-4xl mb-3">📇</div>
                    <h2 className="text-xl font-bold mb-2">ConnectHub</h2>
                    <p className="text-gray-500">Cadastre e organize seus contatos.</p>
                </div>



                <div onClick={() => navigate('/moneyflow')}
                    className="cursor-pointer bg-white border rounded-2xl p-6 hover:shadow-lg"
                >
                    <div className="text-4xl mb-3">💸</div>
                    <h2 className="text-xl font-bold mb-2">MoneyFlow</h2>
                    <p className="text-gray-500">Controle suas entradas e saídas.</p>
                </div>

            </div>
        </div>
    )
}