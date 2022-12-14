import "./JobCard.css";

function JobCard({ vaga }) {
    return (
        <a href={vaga.url}>
            <div className='card'>
                <div className="company-logo">
                    <img src={vaga.icone} alt="Company logo"></img>
                </div>
                <div className="text-area">
                    <div className="title-area">
                        <h1>{vaga.titulo}</h1>
                        <h2>{vaga.empresa}</h2>
                        <span>{vaga.cidade}</span>
                    </div>
                    <div className="content-area">
                        <p>{vaga.descricao}</p>
                    </div>
                    <div className="footer">

                        <p>Salário: {vaga.salario}</p>
                        <p>Ver mais...</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default JobCard