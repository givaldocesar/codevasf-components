"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
const react_1 = __importDefault(require("react"));
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
function Navbar({ className = "", children }) {
    return (<div className={`${Header_module_scss_1.default.navbar} ${className}`}>
            {children}
        </div>);
}
