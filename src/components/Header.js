import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const styles = {
        nav: {
            display: 'flex',
            gap: 10,
            backgroundColor: '#e0e0e0'
        },
        a: {
            display: 'block',
            textDecoration: 'none',
            color: '#2c2c2c',
            fontSize: 18,
            fontWeight: 600,
            padding: 10
        }
    }

    /* Link, to */
    return (
        <div>
            <nav style={styles.nav}>
                <Link to='/' style={styles.a}>Home</Link>
                <Link to='/about' style={styles.a}>About</Link>
                <Link to='/services' style={styles.a}>Services</Link>
                <Link to='/contact' style={styles.a}>Contact</Link>
            </nav>
        </div>
    )
}
