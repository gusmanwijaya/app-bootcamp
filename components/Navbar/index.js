/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../../redux/actions";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.sessionReducer);

  const logout = () => {
    Cookies.remove("tkn");
    router.push("/sign-in");
  };

  useEffect(() => {
    dispatch(setSession());
  }, [dispatch]);

  return (
    <>
      {router.pathname !== "/sign-in" && (
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/assets/images/logo.svg" alt="semina" />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto my-3 my-lg-0">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
                <a className="nav-link" href="#">
                  Browse
                </a>
                <a className="nav-link" href="#">
                  Stories
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
              </div>
              {!session?.participant && (
                <div className="d-grid">
                  <Link href="/sign-in">
                    <a className="btn-navy">Sign In</a>
                  </Link>
                </div>
              )}
              {session?.participant && (
                <div className="navbar-nav ms-auto">
                  <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
                    <span className="text-light d-none d-lg-block">
                      Hello, {session?.participant?.lastName}
                    </span>

                    {/* START: Dropdown Toggler for Desktop */}
                    <a
                      className="nav-link dropdown-toggle mx-0 d-none d-lg-block"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="/assets/images/avatar.png"
                        alt="semina"
                        width="60"
                      />
                    </a>
                    {/* END: Dropdown Toggler for Desktop */}

                    {/* START: Dropdown Toggler for Mobile */}
                    <a
                      className="d-block d-lg-none dropdown-toggle text-light text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <img
                        src="/assets/images/avatar.png"
                        alt="semina"
                        width="60"
                      />
                    </a>
                    {/* END: Dropdown Toggler for Mobile */}

                    {/* START: Dropdown Menu for Desktop */}
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href="/dashboard">
                          <a className="dropdown-item">Dashboard</a>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Rewards
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={logout}
                          className="dropdown-item"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                    {/* END: Dropdown Menu for Desktop */}

                    {/* START: Dropdown Menu for Mobile */}
                    <div className="collapse" id="collapseExample">
                      <ul className="list-group">
                        <li>
                          <Link href="/dashboard">
                            <a className="list-group-item">Dashboard</a>
                          </Link>
                        </li>
                        <li>
                          <a className="list-group-item" href="#">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="list-group-item" href="#">
                            Rewards
                          </a>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={logout}
                            className="list-group-item"
                          >
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                    {/* END: Dropdown Menu for Mobile */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}

      {router.pathname === "/sign-in" && (
        <section className="bg-navy">
          <nav className="container navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/assets/images/logo.svg" alt="semina" />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto my-3 my-lg-0">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                  <a className="nav-link" href="#">
                    Browse
                  </a>
                  <a className="nav-link" href="#">
                    Stories
                  </a>
                  <a className="nav-link" href="#">
                    About
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>
      )}
    </>
  );
}
