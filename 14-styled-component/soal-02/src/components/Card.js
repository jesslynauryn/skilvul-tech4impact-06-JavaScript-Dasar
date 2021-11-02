import {
  CardContainer,
  CardImage,
  CardBody,
  CardPrice,
  CardProductName
} from "./styles/Card";
import Button from "./Button";

const Card = (props) => {
  return (
    <CardContainer width="500px">
      <CardImage src="{props.data.imageUrl}" />
      <CardBody>
        <CardPrice>{props.price}</CardPrice>
        <CardProductName>{props.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};
export default Card;
