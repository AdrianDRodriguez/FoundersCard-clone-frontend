

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FoundersCard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Join</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}