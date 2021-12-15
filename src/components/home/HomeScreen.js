
export const HomeScreen = () => {

    const ca01 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca01.jpg`;
    const ca02 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca02.jpg`;
    const ca03 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca03.jpg`;
    const ca04 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca04.jpg`;
    const ca05 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca05.jpg`;
    const ca06 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/ca06.jpg`;
    const ca07 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/imglat.png`;
    const ca08 = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/img02.jpg`;
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 mt-sm-2 col-md-11 col-lg-10'>
                <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={ca01} alt="cafe slide 1"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ca02} alt="cafe slide 2"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ca03} alt="cafe slide 3"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ca04} alt="cafe slide 4"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ca05} alt="cafe slide 5"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ca06} alt="cafe slide 6"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </div>
            <div className='col-10 mt-sm-2 col-md-5 col-lg-6 my-md-auto'>
                <span className='fw-bolder color my-auto'>BUSCADOR DE CAFÉ</span><br></br>
                <span className='my-auto'>
                Nuestros maestros cafeteros han destilado años de conocimientos sobre sabores en tres sencillas preguntas para ayudarle a encontrar ese café que de seguro le encantará.
                    </span>
            </div>
            <div className='col-10 mt-sm-2 col-md-6 col-lg-4 mt-md-4 rounded'>
                <img className="d-block w-100" src={ca07} alt="imagen colibri"></img>
            </div>

            <div className='col-10 mt-sm-2 col-md-6 col-lg-4 mt-md-4 rounded'>
                <img className="d-block w-100" src={ca08} alt="imagen oportunidades"></img>
            </div>

            <div className='col-10 mt-sm-2 col-md-5 col-lg-6 my-md-auto'>
                <span className='fw-bolder color my-auto'>Creando oportunidades</span><br></br>
                <span className='my-auto'>
                    Estamos comprometidos con crear una cultura de pertenencia, inclusión y diversidad. Buscamos crear más oportunidades de aprendizaje y de éxito que beneficien a nuestros partners (colaboradores), clientes y comunidades.
                    </span>
            </div>
            
        </div>
    )
}
