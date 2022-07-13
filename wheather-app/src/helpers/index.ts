const helper = {};

export { helper };

export function format_date(x: any) {
  x = String(x);
  if (x.length === 1) {
    return '0' + x;
  } else {
    return x;
  }
}
