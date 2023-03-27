declare global {
  type Params = {
    lng: string;
  };

  type Program = {
    id: number;
    title: string;
    description: string;
    img: string;
    countries: string[];
    color: string;
    link: string;
  };

  type Step = {
    id: string;
    title: string;
    duration: string;
    color: string;
  };

  type Review = {
    id: string;
    name: string;
    university: string;
    text: string;
    img: string;
  };
}

export default undefined;
