import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
export default function Card(){
    return(
        <Card>
                <Card.Body>
                    <Image />
                    <Name />
                    <Price />
                    <Description />
                </Card.Body>
            </Card>
    )
}