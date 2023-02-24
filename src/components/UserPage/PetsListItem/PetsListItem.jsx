import defaultImage from '../../../assets/default-img/default.jpg';

import {
  PetCard,
  ImgWrapper,
  InfoWrapper,
  InfoTitle,
  InfoText,
  CommentsTitle,
  DeleteBtn,
  DeleteIcon,
  PetImage,
} from './PetsListItem.styled';

export const PetsListItem = ({
  id,
  name,
  dateOfBirth,
  breed,
  comments,
  petImage,
}) => {
  return (
    <PetCard>
      <ImgWrapper>
        {petImage ? (
          <PetImage src={petImage} alt={breed} />
        ) : (
          <PetImage src={defaultImage} alt={breed} />
        )}
      </ImgWrapper>
      <InfoWrapper>
        <InfoTitle>
          Name: <InfoText>{name}</InfoText>
        </InfoTitle>
        <InfoTitle>
          Date of birth: <InfoText>{dateOfBirth}</InfoText>
        </InfoTitle>
        <InfoTitle>
          Breed: <InfoText>{breed}</InfoText>
        </InfoTitle>
        <CommentsTitle>
          Comments: <InfoText>{comments}</InfoText>
        </CommentsTitle>
      </InfoWrapper>
      <DeleteBtn type="button">
        <DeleteIcon />
      </DeleteBtn>
    </PetCard>
  );
};
