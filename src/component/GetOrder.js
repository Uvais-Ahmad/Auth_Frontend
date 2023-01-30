import { Card } from "react-bootstrap";

function GetOrder (props){
    return (
        <>
            <h1>GetOrder list </h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-info'>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default GetOrder;