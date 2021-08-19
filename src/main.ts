const regex = /\[([a-zA-Z0-9_.-]+)\]<<(.*?)>>/g;

export interface StringSegment {
  type: string;
  value: string;
}

export function parseString(str: string): StringSegment[] {
  if (!str) {
    return [];
  }
  let match = regex.exec(str);
  let idx = 0;
  const res: StringSegment[] = [];
  let text;
  while (match !== null) {
    if (match.index > idx) {
      text = str.substring(idx, match.index);
      res.push({ value: text, type: '' });
    }

    res.push({ value: match[2] ?? '', type: match[1] ?? '' });
    idx = match.index + (match[0]?.length ?? 0);

    match = regex.exec(str);
  }
  if (str.length > idx) {
    text = str.substring(idx, str.length);
    res.push({ value: text, type: '' });
  }
  return res;
}
