/// <reference types="react-scripts" />

interface CardProps{
    index:number,
    accountType:string,
    info:string;
    comingSoon:boolean;
    imageUrl:string;
    isSelected:boolean;
    updateSelectedCard:React.Dispatch<React.SetStateAction<number|null>>;
}

interface CareerStatusItemProps{
    name:string;
    index:number;
    isSelected:boolean;
    updateSelectedStatus:React.Dispatch<React.SetStateAction<number | null>>;
}

interface CustomButtonProps{
    disabled:boolean;
    onClick:MouseEventHandler;
    styles:string;
    children:React.ReactNode;
}

interface HeaderProps{
    hasBackArrow?:boolean;
}

interface ModalHeaderProps{
    name:string;
    closeModal:()=>void;
}

interface NavItemProps{
    name:string,
    icon:ReactNode;
}

interface ProfileCompletionProps{
    hide:boolean;
    fullWidth?:boolean;
    isEducationComplete:boolean;
    isWorkExperienceComplete:boolean;
    isAccomplishmentsComplete:boolean;
    isUploadComplete:boolean;
    progress:number;
}


interface ProfileCompletionItemProps{
    name:string;
    isProfileComplete:boolean;
}

interface SetupProfileProps{
    icon:ReactNode,
    name:string,
    info:string,
    openModal:()=>void;
}

interface UploaderProps{
    file:File|null;
    updateFile:React.Dispatch<React.SetStateAction<File | null>>
}

interface AccomplishmentsModalProps {
    closeModal: () => void;
    setAccomplishmentsComplete:React.Dispatch<React.SetStateAction<boolean>>;
    isAccomplishmentsComplete:boolean;
    updateProgress:(progressType:boolean)=>void;
  }

interface EducationModalProps {
    closeModal: () => void;
    setEducationComplete: React.Dispatch<React.SetStateAction<boolean>>;
    isEducationComplete:boolean;
    updateProgress:(progressType:boolean)=>void;
}

interface UploadResumeModalProps {
    closeModal: () => void;
    setUploadComplete:React.Dispatch<React.SetStateAction<boolean>>;
    isUploadComplete:boolean;
    updateProgress:(progressType:boolean)=>void;
}
interface WorkExperienceModalProps {
    closeModal: () => void;
    setWorkExperienceComplete:React.Dispatch<React.SetStateAction<boolean>>;
    isWorkExperienceComplete:boolean;
    updateProgress:(progressType:boolean)=>void;
}

interface FormatIconProps{
    children:ReactNode;
    index:number;
    selectedIcon:number|null;
    updateSelectedIcon:React.Dispatch<React.SetStateAction<number | null>>
}
