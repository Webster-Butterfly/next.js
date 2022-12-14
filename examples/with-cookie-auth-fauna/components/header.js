import Link from 'next/link'
import { logout } from '../utils/auth'

const Header = (props) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login" legacyBehavior>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup" legacyBehavior>
            <a>Signup</a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      ul {
        display: flex;
        list-style: none;
        margin-left: 0;
        padding-left: 0;
      }

      li {
        margin-right: 1rem;
      }

      li:first-child {
        margin-left: auto;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      header {
        padding: 0.2rem;
        color: #fff;
        background-color: #333;
      }
    `}</style>
  </header>
)

export default Header
