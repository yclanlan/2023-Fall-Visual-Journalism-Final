export default function SimpleSlide(props) {
  const { children, viewportPosition, width } = props;
  return (
    <h2
      style={{
        width: width || "100%",
        color: "white",
        position: "absolute",
        minWidth: "45vw",
        paddingLeft: "3rem", // To offset slides a tiny bit from the left side of the screen
        top: `${viewportPosition}vh`,
        zIndex: "50",
      }}
    >
      {children}
    </h2>
  );
}




