const upperCase = (value) => {
  if (!value) return ''
    value = value.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return value;
}

export {upperCase}