export const checkPath = (path: string) => {
  if(!path.includes("#")) return path
  return path.split("#")[0]
}
