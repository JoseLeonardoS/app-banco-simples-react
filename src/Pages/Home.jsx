import { Link } from "react-router-dom"


function Home() {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <h1 className="text-capitalize m-5 p-3">Web Bank</h1>

      <div>
        <Link className="btn btn-dark m-2" to='/login'>Login</Link>
        <Link className="btn btn-dark" to='/cadastro'>Criar Conta</Link>
      </div>

    </div>
  )
}

export default Home