"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Brand;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
const codevasf_icon_png_1 = __importDefault(require("../assets/codevasf_icon.png"));
function Brand({ className = "", children }) {
    return (<div className={`${Header_module_scss_1.default.brand} ${className}`}>
            <image_1.default src={codevasf_icon_png_1.default} width={42} height={42} alt={"codevasf_icon"}/>
            <span>{children}</span>
        </div>);
}
