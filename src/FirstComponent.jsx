const highlight = true;

function FirstComponent() {
  let styles = {};

  if (highlight) {
    styles = {
      color: "red",
      backgroundColor: "green",
    };
  }

  return <div style={styles}>First Component</div>;
}

export default FirstComponent;
