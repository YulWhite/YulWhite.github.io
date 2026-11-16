const formatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

/** 统一按北京时间输出 YYYY-MM-DD，避免构建机器时区不同导致日期偏移 */
export function fmtDate(date: Date): string {
  return formatter.format(date);
}
