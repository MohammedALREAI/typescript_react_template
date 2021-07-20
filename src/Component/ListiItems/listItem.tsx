import { WrapperListItem, ImageWrapListItem, DescriptionTitleListItem, SubTitleListItem, TitleListItem } from "./ListItem.styles";
import { ReactNode } from "react";
interface ListItemProps {
     index: number
     icon: ReactNode,
     title: string,
     subTitle: string
     description: string

}
export const ListItem = ({ index, icon, subTitle, title, description }: ListItemProps) => {
     return (
          <WrapperListItem className="flex-col container mx-auto" index={index}>
               <ImageWrapListItem className="mb-12" index={index}>{icon}</ImageWrapListItem>
               <TitleListItem className="font-bold" index={index}>{title}</TitleListItem>
               <SubTitleListItem className="subtitle" index={index}>{subTitle}</SubTitleListItem>
               <DescriptionTitleListItem index={index}>{description}</DescriptionTitleListItem>
          </WrapperListItem>
     );
};
