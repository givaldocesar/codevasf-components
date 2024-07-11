"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Menu;
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const classnames_1 = __importDefault(require("classnames"));
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
function Menu({ href, className = '', children }) {
    const currentPath = (0, navigation_1.usePathname)();
    return (<link_1.default href={href} className={(0, classnames_1.default)({
            [Header_module_scss_1.default.menu]: true,
            [Header_module_scss_1.default.active]: href === currentPath,
            [className]: Boolean(className)
        })}>
            {children}
        </link_1.default>);
}
