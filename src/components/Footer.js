import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-center my-4">
            <p>Copyright &copy; 2022</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
