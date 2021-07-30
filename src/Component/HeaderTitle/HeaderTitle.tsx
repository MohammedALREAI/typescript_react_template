import { HR, TitleHead } from "../MatlerSection/MailSection.styles";

interface HeaderTitleProps {
     title: string
}
export const HeaderTitle = ({ title }: HeaderTitleProps) => {
     return (
          <div className="flex items-center mb-12 pr-8">
               <HR />
               <TitleHead>{title}</TitleHead>
          </div>
     );
};
