"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.Navbar = exports.Brand = void 0;
const react_1 = __importDefault(require("react"));
const Brand_1 = __importDefault(require("./Brand"));
exports.Brand = Brand_1.default;
const Navbar_1 = __importDefault(require("./Navbar"));
exports.Navbar = Navbar_1.default;
const Menu_1 = __importDefault(require("./Menu"));
exports.Menu = Menu_1.default;
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
const Header = ({ className = '', children }) => {
    return (<div className={`${Header_module_scss_1.default.header} ${className}`}>
            {children}
        </div>);
};
exports.default = Header;
