const ColoredText = ({ children, color }) => {
    return <span style={{ color: color, fontSize: "16px" }}>{children}</span>;
};

export default ColoredText;
