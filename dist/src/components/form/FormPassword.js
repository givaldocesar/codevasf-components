'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import Image from 'next/image';
import FormRow from './FormRow.js';
import BaseInput from './FormInput.js';
import styles from './Form.module.scss.js';
import img$1 from '../../assets/icons/password-view.png.js';
import img from '../../assets/icons/password-hidden.png.js';

function FormPassword({ className, inputClassName = "", buttonClassName = "", ...props }) {
    const [visible, setVisible] = useState(false);
    return (jsxs(FormRow, { className: className, children: [jsx(BaseInput, { className: `${styles.password} ${inputClassName}`, name: "password", autoComplete: "current-password", type: visible ? "text" : "password", ...props }), jsx("button", { type: "button", title: visible ? "Ocultar Senha" : "Mostra Senha", className: `${styles.password_button} ${buttonClassName}`, onClick: () => setVisible(!visible), children: jsx(Image, { src: visible ? img : img$1, width: 48, height: 48, alt: "password-hidden" }) })] }));
}

export { FormPassword as default };
//# sourceMappingURL=FormPassword.js.map
