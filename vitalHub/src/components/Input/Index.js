import { InputText } from "./Style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    onchangeText,
    KeyType,
    maxLength,
    keyboardType
}) {
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLenght={maxLength}
            value={fieldValue}
            onChangeText={onchangeText}
            
        />
        
    )
}