import React from "react";
import './Detail.css'

export default function Detail(props){
    const { id } = props.match.params;
    const [ detail, setDetail ] = React.useState({})

    function apiDetailCall(id){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
        setDetail(data)
        })
    }    
    
    React.useEffect(() => {
        apiDetailCall(id)
    },[id])

    const pronoun = detail.gender === 'Male' ? 'He is' : detail.gender === 'unknown' ? 'It is' : 'She is'

    return(
        detail.id && <div className="detailContainer">
            <div>
                <div>
                    <h3 className="detailName">{detail.name}</h3>
                </div>
                <div>
                    <p className="detailInfo">{detail.name} is a {detail.gender === 'unknown' ? 'no binary' : detail.gender} {detail.species} from {detail.origin.name}. <br/>
                    {pronoun} {detail.status === 'unknown' ? 'probably alive' : detail.status} and the last known location is {detail.location.name}.
                    </p>
                </div>
                <div>
                    <img className='detailImg' src={detail.image} alt={detail.name}/>
                    {/* {detail.status === 'Dead' && <div className='detailStatus'>{detail.status}</div>} */}
                </div>
            </div>
            <div>
                <div id="afrus-container-form" data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e"></div>
                <script src="https://my.afrus.app/template/index.js"></script>
            </div>
        </div>
    )
}