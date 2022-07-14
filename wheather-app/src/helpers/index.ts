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
export function format_date_24(x: any) {
  x = String(x);
  if (x.length === 1) {
    if (x <= 12) {
      return '0' + x + ':00 am';
    } else {
      return '0' + x + ':00 pm';
    }
  } else {
    if (x <= 12) {
      return x + ':00 am';
    } else {
      return x + ':00 pm';
    }
  }
}
