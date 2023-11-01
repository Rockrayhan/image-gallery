import './Gallery.css';

import image1 from '../../images/image-1.webp'
import image2 from '../../images/image-2.webp'
import image3 from '../../images/image-3.webp'
import image4 from '../../images/image-4.webp'
import image5 from '../../images/image-5.webp'
import image6 from '../../images/image-6.webp'
import image7 from '../../images/image-7.webp'
import image8 from '../../images/image-8.webp'
import image9 from '../../images/image-9.webp'
import image10 from '../../images/image-10.jpeg'
import image11 from '../../images/image-11.jpeg'

const Gallery = () => {
    return (
        <div className='container mt-5 main'>

           
            <div className="row">
                <div className="col-lg-4 col-md-8">
                    <img className='img-fluid rounded-2 card' src={image11} alt="" />
                </div>

                <div className="col-lg-2 col-md-4">
                    <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image1} alt="" /></div>
                    <div className='border border-2 rounded-2 card mt-4'><img className='img-fluid' src={image2} alt="" /></div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image3} alt="" /></div>
                    <div className='border border-2 rounded-2 card mt-4'><img className='img-fluid' src={image4} alt="" /></div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image5} alt="" /></div>
                    <div className='border border-2 rounded-2 card mt-4'><img className='img-fluid' src={image6} alt="" /></div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-2 col-md-4"> <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image7} alt="" /></div> </div>
                <div className="col-lg-2 col-md-4"> <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image8} alt="" /></div> </div>
                <div className="col-lg-2 col-md-4"> <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image9} alt="" /></div> </div>
                <div className="col-lg-2 col-md-4"> <div className='border border-2 rounded-2 card'><img className='img-fluid' src={image10} alt="" /></div> </div>

                <div className="col-lg-2 col-md-4"> <div className='border border-2 rounded-2 add-image card'> 
                <i className="bi bi-card-image"></i>
                <p> Add Images </p> </div> </div>
            </div>
        



        </div>
    );
};

export default Gallery;