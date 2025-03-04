

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FoundersCard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="nav justify-content-end">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/about">About us</a>
        <a className="nav-link" href="/login">Sign in</a>
        <a className="nav-link" href="/signup">Join</a>
      </div>
    </div>
  </div>
</nav>
  )
}