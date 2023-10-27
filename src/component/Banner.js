import { TypeAnimation } from 'react-type-animation';

function Banner() {
    return (
        <div className="banner sectionPadding">
            <div className="container">
                <div>
                    <h1>Hi, I Am Name</h1>

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am Designer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I am Forntend Developer',
                            1000,
                            'I am UI-UX Designer',
                            1000
                        ]}
                        wrapper="div"
                        speed={10}
                        style={{ fontSize: '40px', display: 'block', color: '#fff', fontWeight: '600',marginTop:20, marginBottom:40 }}
                        repeat={Infinity}
                    />

                    <button type='button' className='primaryBtn'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;