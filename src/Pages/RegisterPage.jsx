import { useEffect, useState } from "react"
import api from '../Data/api.js'
import { jwtDecode } from "jwt-decode"
import { Link } from "react-router-dom"

function RegisterPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

    try {
      const token = localStorage.getItem('token').toString()
      const decoded = jwtDecode(token)

      if (decoded.email) {
        window.location.href = '/app-banco-simples-react/#/dashboard'
      }
    }
    catch (error) {
      console.log('Erro: ', error)
    }

  }, [])

  const sendData = async (e) => {
    e.preventDefault()

    try {

      const res = await api.post("/cadastrar", {
        name: name,
        email: email,
        password: password
      })
      alert(res.data.message)

      if (res.data.status == true) {
        window.location.href = '/app-banco-simples-react/#/login'
      }

    } catch (error) {
      console.log("Erro ao cadastrar usuário", error)
      alert("Erro ao cadastrar usuário")
    }
  }

  return (
    <form onSubmit={sendData} className="d-flex flex-column align-items-center justify-content-center m-5 p-3">
      <h1>Cadastrar</h1>

      <p>
        <label htmlFor="name">Nome: </label>
        <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome completo" />
      </p>

      <p>
        <label htmlFor="login">Email: </label>
        <input className="form-control" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
      </p>

      <p>
        <label htmlFor="password">Senha: </label>
        <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
      </p>

      <button className="btn btn-dark" type='submit'>Cadastrar</button>

      <p>
        Ou faça <Link to="/login">Login</Link>.
      </p>

    </form>
  )
}

export default RegisterPage
