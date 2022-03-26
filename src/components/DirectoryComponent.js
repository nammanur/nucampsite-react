import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import AnimatedText from 'react-animated-text-content';


function RenderDirectoryItem({campsite}) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                    <Link to={`/directory/${campsite.id}`}>
                        <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>

                        </CardImgOverlay>
                    </Link>
            </Card>
            </FadeTransform>
    );
}

function Directory(props) { 
    const directory = props.campsites.campsites.map((campsite)=>{
        return (
        <div className='col-md-5 m-1' key={campsite.id} >
            <RenderDirectoryItem campsite={campsite}/>
        </div>)
    });

    if (props.campsites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.campsites.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (<div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='./home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>
                        <AnimatedText
                        type="words"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                        >
                       Directory
                        </AnimatedText>
                        </h2>
                        
                        <hr />
                    </div>
                </div>
        
                <div className='row'>
                    {directory}
                </div>
    </div>)
}



export default Directory;   