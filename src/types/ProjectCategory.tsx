export type Category = {
  title: string;
  colour: string;
};

export type Project = {
  title: string;
  description: string;
  img: string;
  categories: Category[];
  link?: string;
  github?: string;
  deploy?: string;
};
