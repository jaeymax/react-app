

const CustomButton:React.FC<CustomButtonProps> = ({disabled, onClick,  styles, children}) => {
  return (
 
          <button 
          disabled = {disabled} 
          onClick={onClick} 
          className={`${styles} rounded-sm ${disabled?'bg-gray-300':''}`} 
          >
            {children}
         </button>
   
  )
}

export default CustomButton;
