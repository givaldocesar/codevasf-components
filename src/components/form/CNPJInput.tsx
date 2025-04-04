import { useRef, useEffect } from "react";
import FormInput from "./FormInput";
import { checkCNPJ } from "./utils";
import styles from "./Form.module.scss";

export default function CNPJ({
    type,
    name, 
    validate=true,
    ...props
} : React.InputHTMLAttributes<HTMLInputElement> & {validate?: boolean;}){
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function format(evt: Event){
            let target = evt.target as HTMLInputElement;

            let value = target.value;
            value = value.replace(/[^\d]/g, '');
            value = value.replace(/(\d{2})(\d)/, '$1.$2');
            value = value.replace(/(\d{2}.\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{2}.\d{3}.\d{3})(\d)/, '$1/$2');
            value = value.replace(/(\d{2}.\d{3}.\d{3}\/\d{4})(\d)/, '$1-$2');
            target.value = value;
        }
    
        function check(evt: Event){
            let target = evt.target as HTMLInputElement;

            let value = target.value;
            value = value.replace(/[^\d]/g, '');
    
            if(checkCNPJ(value)){
                target.classList.remove(styles.error);
                ref.current?.setCustomValidity("");
            } else {
                target.classList.add(styles.error);
                ref.current?.setCustomValidity("CNPJ inválido");
                ref.current?.reportValidity();
            }
        }

        ref.current?.addEventListener("change", format);
        if(validate) ref.current?.addEventListener("blur", check);

    }, []);
    
    return (
        <FormInput 
            ref={ref}
            type="text"
            name={name || 'cnpj'}
            maxLength={18}
            { ...props }
        />
    );
}