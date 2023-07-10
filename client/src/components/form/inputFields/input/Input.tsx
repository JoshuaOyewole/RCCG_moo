import CommonInputStyle from "../_common-input-styles.module.scss";

export interface InputProps {
  label?: string;
  isRequired?: boolean;
  icon?: React.ReactNode;
  iconPosition?: string;
  iconAction?: Function;
  iconClassName?: string;
  labelClassName?: string,
  inputContainerClassName?: string,
  [rest: string]: any;
}

const InputField: React.FC<InputProps> = (props, _ref) => {
  const {
    label,
    isRequired,
    icon,
    iconPosition,
    iconAction,
    iconClassName,
    labelClassName,
    inputContainerClassName,
    ...rest
  } = props;


  
  return (
    <div className={`${CommonInputStyle.input_container} ${inputContainerClassName ? inputContainerClassName : ""}`}>
      {label && (
        <label className={`input-label ${labelClassName ? labelClassName : ""}`}>
          {label}
          {isRequired && <sup>*</sup>}
        </label>
      )}

      <div
        className={`${CommonInputStyle.input_field_container}  ${icon && (iconPosition === "left" ? "icon-left" : "icon-right")
          }`}
      >
        <input {...rest} />

        {icon && <span
          className={`icon ${iconClassName ? iconClassName : ""}`}
          onClick={() => {
            iconAction?.();
          }}
        >
          {icon}
        </span>}
      </div>
    </div>
  );
};

export default InputField;
