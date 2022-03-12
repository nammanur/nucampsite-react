import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite, onClick}) {
    return (
            <Card onClick={()=> onClick(campsite.id)}>
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
            <RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
        </div>)
    });
    return (<div className='container'>
            <div className='row'>
                {directory}
            </div>
    </div>);
}

// class ExampleParentComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 333
//         };
//     }

//     render() {
//         return <ExampleChildComponent num={this.state.number} greeting ="hello world"></ExampleChildComponent>
//     }

// }

// class ExampleChildComponent extends Component {


//     render() {
//         return <div>{this.props.num} {this.props.greeting}</div>
//     }

// }


export default Directory;   