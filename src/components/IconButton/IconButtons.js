import "./IconButton.scss";

const IconButton = ({ children, active = false, className = "", ...props }) => {
    const classes = `icon-btn ${active ? "icon-btn--active" : ""} ${className}`.trim();

    return (
        <button className={classes} type="button" {...props}>
            {children}
        </button>
    );
};

export default IconButton;