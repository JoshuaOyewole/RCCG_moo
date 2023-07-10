import React from "react";
import GeneralInputStyles from "../_common-input-styles.module.scss";
import SelectStyles from "./_select.module.scss";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export interface SelectProps {
  selectOptions: Array<any>,
  selectPlaceholder?: string | number,
  label?: string,
  mutipleSelect?: boolean,
  selectClassName?:string,
  isRequired?: boolean,
  [rest: string]: any,
}

const Select: React.FC<SelectProps> = (props, _ref) => {
  const {
    selectOptions,
    selectPlaceholder,
    label,
    mutipleSelect,
    isRequired,
    selectClassName,
    ...rest
  } = props;

  return (
    <div className={`xs ${GeneralInputStyles.input_container} ${selectClassName && selectClassName}`}>
      {label && (
        <label className="input-label">
          {label}
          {isRequired && <sup>*</sup>}
        </label>
      )}

      <div className={`  ${GeneralInputStyles.input_field_container} `}>
        <ReactSelect
          className={`${SelectStyles.react_select_container}`}
          classNamePrefix="react_select"
          components={animatedComponents}
          options={selectOptions}
          placeholder={selectPlaceholder ? selectPlaceholder : "Select"}
          isMulti={mutipleSelect}
          closeMenuOnSelect={!mutipleSelect}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Select;
