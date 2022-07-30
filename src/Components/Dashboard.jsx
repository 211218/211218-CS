import '../StyleSheets/Dashboard.css';
import img1 from '../Img/elixir.png';
const Dashboard = () =>{
    return(
        <div>
             <div className='container-up'>
                    <div className='container-down'></div>
                </div>
            <div className="container-one">
                <div className='container-dash'>
                    <div className="container-products">
                        <div className='tam-img'>
                            <img className='img-all' src={img1}></img>
                        </div>
                        <div className='product-title'>
                            <h1 className='title'>Elixir</h1>
                        </div>
                        <div className='product-price'>
                            <h1 className='title-number'>$23</h1>
                        </div>
                        <div className='product-description'>
                            <p className='description'>
                                Es un producto de buena calidad para todo el mundo 
                            </p>
                        </div>
                        <div className='product-stock'>
                            <h1 className='title-number'>Stock: 12</h1>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;