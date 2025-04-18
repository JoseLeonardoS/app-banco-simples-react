import { useEffect, useState } from "react"
import api from "../Data/api"
import { jwtDecode } from "jwt-decode"
import { Link } from "react-router-dom"

function LoginPage() {

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
      let res = await api.post("/login", {
        email,
        password
      })

      localStorage.setItem('token', res.data.data)
      alert(res.data.message)
      window.location.reload()
    }
    catch (error) {
      console.log("Erro ao logar ", error)
      alert("Erro ao logar")
    }
  }


  return (
    <form onSubmit={sendData} className="d-flex flex-column align-items-center justify-content-center">

      <h1>Login</h1>

      <p>
        <label htmlFor="login">E-mail: </label>
        <input className="form-control" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
      </p>

      <p>
        <label htmlFor="password">Senha: </label>
        <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
      </p>

      <button className="btn btn-dark" type="submit">Login</button>

      <p>
        Ou <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </form>
  )
}

export default LoginPage
