import React from "react";
import placeholder from '../assets/Images/placeholder.jpg';
import { Container } from 'react-bootstrap';


function Homepage () {
    return(
        <Container className="text-center mt-5" fluid>
            <h1>Rocks and Ropes</h1>
            <img src={placeholder} style={{width: '50%'}} alt='Main gym'/>
            <p className="text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt. Vitae semper quis lectus nulla at volutpat diam ut. Nibh mauris cursus mattis molestie a iaculis at. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lacus sed turpis tincidunt id aliquet risus feugiat in. Mattis rhoncus urna neque viverra justo. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Vel facilisis volutpat est velit egestas dui. At volutpat diam ut venenatis tellus in metus vulputate. Quis imperdiet massa tincidunt nunc pulvinar sapien. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. At urna condimentum mattis pellentesque id nibh tortor. Ut tellus elementum sagittis vitae et leo. Lorem ipsum dolor sit amet consectetur.

            Nisl rhoncus mattis rhoncus urna neque. Enim ut sem viverra aliquet eget. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Elit eget gravida cum sociis. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. In ornare quam viverra orci sagittis. Vulputate dignissim suspendisse in est ante in nibh mauris. Et leo duis ut diam quam nulla porttitor massa. Vulputate sapien nec sagittis aliquam malesuada. Eget velit aliquet sagittis id. Et odio pellentesque diam volutpat commodo sed egestas egestas. Lobortis feugiat vivamus at augue eget. Condimentum id venenatis a condimentum vitae sapien. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. In mollis nunc sed id semper risus in. Tristique senectus et netus et malesuada. Vitae nunc sed velit dignissim sodales. Lacus luctus accumsan tortor posuere.
            </p>
        </Container>
    )
}

export default Homepage;
