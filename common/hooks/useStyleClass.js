export const useStyleClass = (props, styles) => {
  let styleProps = [];

  for (let i in props) {
    styleProps.push(i);
  }

  const convert = styleProps.map((item) => {
    if (styles[item] !== undefined) {
      return { [styles[item]]: true };
    }
  });
  return convert;
};
