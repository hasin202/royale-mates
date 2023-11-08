export const cleanUserTag = (tag: string): string => {
  const cleanedTag = tag.startsWith("#") ? tag.slice(1) : tag;
  return cleanedTag.toUpperCase();
};
