

export function Header() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0" href="/">FoundersCard</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">Home</a>
              <a className="nav-link fw-bold py-1 px-0" href="/memberships">Memberships</a>
              <a className="nav-link fw-bold py-1 px-0" href="/about">About us</a>
              <a className="nav-link fw-bold py-1 px-0" href="/login">Sign in</a>
              <a className="nav-link fw-bold py-1 px-0" href="signup">Join</a>
            </nav>
          </div>
        </header>
    </div>
  )
}