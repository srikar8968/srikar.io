type Work = {
  name: string,
  url: string,
  logo?: string,
  type?: string,
  description?: string,
  tools?: string[],
  git?: boolean,
  styling: {
    minHeight: number,
    backDrop: string,
  }
};

export default Work