import React, {useContext, useState} from "react";
import classes from "./Select.module.scss";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import all from "../../../helpers/all";
import cn from "../../../helpers/cn";
import {Label, Icon, Error} from "../../index";
import {languageContext} from "../../../context/index";

const Select = ({
                    labelClassName,
                    className,
                    errorClassName,
                    labelStyle,
                    style,
                    errorStyle,
                    labelText,
                    options,
                    value,
                    changeHandler,
                    placeholder,
                    isDisabled,
                    errorMessage
                }) => {
    const {text} = useContext(languageContext);

    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(option => JSON.stringify(option.value) === JSON.stringify(value));
    return (
        <>
            {labelText && (
                <Label className={labelClassName} style={{...labelStyle, ...(errorMessage ? {color: "#ff7a7c"} : {})}}>
                    {labelText}
                </Label>
            )}
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsOpen(false);
                }}
            >
                <div
                    className={cn(classes.select, isOpen ? classes.selectOpen : "", errorMessage ? classes.error : "", className)}
                    style={style}>
                    <div className={cn(classes.selectedOptionWrapper)} onClick={() => setIsOpen(!isOpen)}>
                        <div className={classes.selectedOption}>
                            {selectedOption && selectedOption.iconName && <Icon name={selectedOption.iconName}/>}
                            {selectedOption && selectedOption.label && (
                                <div className={classes.label} title={selectedOption.label}>
                                    {selectedOption.label}
                                </div>
                            )}
                            {!selectedOption && placeholder && <div className={classes.placeholder}>{placeholder}</div>}
                        </div>
                        <Icon style={{width: '16px', ...(isOpen ? {transform: "rotate(180deg)"} : {})}}
                              name="selectArrow"/>
                    </div>
                    {isOpen && (
                        <div className={classes.options}>
                            {!options.length && (
                                <div className={classes.noOptions} onClick={() => setIsOpen(false)}>
                                    <div className={classes.label}>{text("select.noOptions")}</div>
                                </div>
                            )}
                            {options.map((option, i) => (
                                <div className={classes.option}
                                     onClick={() => all(() => changeHandler(option.value), () => setIsOpen(false))}
                                     title={option.label} key={i}>
                                    {option.iconName && <Icon name={option.iconName}/>}
                                    {option.label && <div className={classes.label}>{option.label}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                    {isDisabled && <div className={classes.plug}/>}
                </div>
            </OutsideClickHandler>
            {errorMessage && <Error className={errorClassName} style={errorStyle} message={errorMessage}/>}
        </>
    );
};

Select.propTypes = {
    labelClassName: PropTypes.string,
    className: PropTypes.string,
    errorClassName: PropTypes.string,
    labelStyle: PropTypes.object,
    style: PropTypes.object,
    errorStyle: PropTypes.object,
    labelText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            label: PropTypes.string,
            iconName: PropTypes.string
        })
    ),
    value: PropTypes.any,
    changeHandler: PropTypes.func,
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    errorMessage: PropTypes.string
};

Select.defaultProps = {
    labelClassName: "",
    className: "",
    errorClassName: "",
    labelStyle: {},
    style: {},
    errorStyle: {},
    labelText: "",
    options: [],
    value: null,
    changeHandler: () => {
    },
    placeholder: "",
    isDisabled: false,
    errorMessage: ""
};

export default Select;