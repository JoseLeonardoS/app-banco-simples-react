import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import api from '../Data/api'
import up from '../assets/up.svg'
import down from '../assets/down.svg'

function AccountDashboard() {

  const [data, setData] = useState(null)
  const [val, setVal] = useState(null)

  useEffect(() => {
    getUserData()
  }, [data])

  async function getUserData() {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)

    var res = await api.get(`/conta?email=${decoded.email}`)
    setData(res.data.data)
  }

  async function addValue() {
    const res = await api.put(`/depositar`, { userid: data.id, value: val })
    setVal(0)
    alert(res.data.message)
    window.location.reload()
  }

  async function withdrawValue() {
    const res = await api.put(`/sacar`, { userid: data.id, value: val })
    setVal(0)
    alert(res.data.message)
    window.location.reload()
  }

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center  m-5 p-3">

      <h1>Olá, {data ? data.name : 'cliente'}</h1>

      <h2>Saldo:</h2>

      <h3>{data ? data.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0.00}</h3>

      <div className="col-6">
        <input className="form-control m-2 text-center" type="number" value={val} onChange={handleChange} />
      </div>

      <div>
        <button className="btn btn-success m-2" onClick={addValue}><img src={up} />Depositar</button>
        <button className="btn btn-danger m-2" onClick={withdrawValue}>Sacar<img src={down} /></button>
      </div>

    </div>
  )
}

export default AccountDashboard
