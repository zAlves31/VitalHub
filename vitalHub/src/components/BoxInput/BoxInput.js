import { FieldContent } from "./Style";
import { Label } from "../Label/Index";
import { Input } from "../Input/Index";

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue,
    onchangeText,
    KeyType = 'default',
    maxLenght,
    keyboardType
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLenght={maxLenght}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
                keyboardType={keyboardType}
            />
        </FieldContent>
        
    );
};