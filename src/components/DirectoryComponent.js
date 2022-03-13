import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite}) {
    return (
            <Card>
                    <CardImg src={campsite.image} width="100%" src={campsite.image} alt={campsite.name}/>
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>

                    </CardImgOverlay>
            </Card> 
    );
}

function Directory(props) { 
    const directory = props.campsites.map((campsite)=>{
        return (
        <div className='col-md-5 m-1' key={campsite.id} >
            <RenderDirectoryItem campsite={campsite}/>
        </div>)
    });
    return (<div className='container'>
            <div className='row'>
                {directory}
            </div>
    </div>);
}



export default Directory;   