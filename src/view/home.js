import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>User Application</h1>
      <div className="panel">
        <Link to="/register">Sing Up</Link>
        {localStorage.getItem('token') ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Log Out</Link>
          </>
        ) : (
          <Link to="/login">Sing In</Link>
        )}
      </div>
    </div>
  )
}
