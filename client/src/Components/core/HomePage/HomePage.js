import '../HomePage/homepage.css'

import { Carousel } from 'antd';


const HomePage = () => {

    return (
        <Carousel autoplay>
            <div>
                <h3 key={1} className='carousel-card' >1</h3>
            </div>
            <div>
                <h3 key={2} className='carousel-card' >2</h3>
            </div>
            <div>
                <h3 key={3} className='carousel-card' >3</h3>
            </div>
            <div>
                <h3 className='carousel-card' >4</h3>
            </div>
        </Carousel>
    )
}
export default HomePage

