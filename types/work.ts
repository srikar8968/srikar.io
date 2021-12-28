type Work = {
  name: string,
  url: string,
  logo?: string,
  description?: string,
  git?: boolean,
  styling: {
    minHeight: number,
    backDrop: string,
  }
};

export default Work