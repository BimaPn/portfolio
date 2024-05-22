export const splitText = (text: string) => {
  const characters: string[] = []
  const regex = /[\s\S]/gu

  let match

  while((match = regex.exec(text)) !== null) {
    characters.push(match[0])
  }

  return characters
}
