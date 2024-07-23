
interface ModalProps{
    name:string;
}

const ModalHeader:React.FC<ModalProps> = ({name}) => {
  return (
    <div>
       <h2>{name}</h2>
    </div>
  )
}

export default ModalHeader
