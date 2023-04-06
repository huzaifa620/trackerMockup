import React from 'react'

const About = ({ navBar, setNavBar }) => {

    React.useEffect(() => {
        setNavBar([0, 1]);
    }, []);

    return (
    <div className='text-green-800'>
        About Us
    </div>
    )
}

export default About
