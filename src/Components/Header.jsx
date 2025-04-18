import { Link } from "react-router-dom"
import coin from '../assets/coin.svg'
import { useState } from "react";

function Header() {
  const [warning, setWarning] = useState(true);
  return (
    <div>

      {warning && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          A aplicação possui um pequeno atraso na inicialização e os dados inseridos expiram em 15 minutos.
          <button type="button" className="btn-close" onClick={() => setWarning(false)}></button>
        </div>
      )}

      <div className="d-felx text-center">
        <h1 className="p-4">
          <Link className="text" to='/'><img style={{ height: "75px" }} src={coin} alt="Home icon" /> </Link> Web Bank
        </h1>
      </div>
    </div>
  )
}

export default Header
