import { useState } from 'react';

const WorkInProgress = ({unsetWIP}) => {

    const [password, setPassword] = useState();

    const checkPassword = () => {
        password && password.toLowerCase().substring(0,2) === 'ca' ? unsetWIP() : alert('Password is incorrect.')
        window.scroll(0,0)
    }


    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            zIndex: '100',
            backgroundColor: '#EEE',
            color: '#444',
            padding: '4rem',
        }}>
            <h3>Welcome to PolePrinting.com</h3>
            <p>Our website is still under construction, but we expect it to be up soon!</p>
            <p>Please check back in the near future.</p>
            <div style={{ marginTop: '4rem', }}>
                <p>To view the progress, enter the name of the website maker.</p>
                <input type='text' onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={() => checkPassword()}>
                    Visit the Work In Progress
                </button>
            </div>
        </div>
    )

}

export default WorkInProgress;