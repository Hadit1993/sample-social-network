import {
  OptionTag,
  PostShareInputTag,
  PreviewImageTag,
} from "./post-share.style";
import profileImg from "../../assets/img/profileImg.jpg";
import {
  UilLocationPoint,
  UilPlayCircle,
  UilScenery,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { ButtonTag, ContainerTag, ImgTag } from "../common/common.style";
import { ChangeEventHandler, useState } from "react";
import { useRef } from "react";
import { ShowIF } from "../common/common.component";

const PostShare = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
    }
  };

  return (
    <ContainerTag
      gap="1rem"
      bgColor="var(--cardColor)"
      padding="1rem"
      borderRadius="1rem"
    >
      <ImgTag
        src={profileImg}
        alt="profile"
        width="3rem"
        height="3rem"
        borderRadius="50%"
      />
      <ContainerTag flexDirection="column" width="90%" gap="1rem">
        <PostShareInputTag type="text" placeholder="What's happening?" />

        <ContainerTag justifyContent="space-around">
          <OptionTag
            onClick={() => imageRef.current?.click()}
            color="var(--photo)"
          >
            <UilScenery />
            Photo
          </OptionTag>

          <OptionTag color="var(--video)">
            <UilPlayCircle />
            Video
          </OptionTag>

          <OptionTag color="var(--location)">
            <UilLocationPoint />
            Location
          </OptionTag>

          <OptionTag color="var(--shedule)">
            <UilSchedule />
            Schedule
          </OptionTag>
          <ButtonTag padding="5px 20px" fontSize="12px">
            Share
          </ButtonTag>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </ContainerTag>

        <ShowIF term={imageUrl}>
          <PreviewImageTag>
            <UilTimes onClick={() => setImageUrl(undefined)} />
            <ImgTag
              borderRadius="0.5rem"
              width="100%"
              src={imageUrl}
              alt=""
              maxHeight="20rem"
              objectFit="cover"
            />
          </PreviewImageTag>
        </ShowIF>
      </ContainerTag>
    </ContainerTag>
  );
};

export default PostShare;
