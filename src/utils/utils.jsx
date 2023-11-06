export const renderTextWithFormatting = (text) => {
  return text.split("\n").map((line, index) => (
    // Wrap lines in div tags, or transform them however you like
    <div key={index}>{line}</div>
  ));
};
