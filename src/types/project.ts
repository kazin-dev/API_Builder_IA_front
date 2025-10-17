export type Project = {
  id: string;
  title: string;
  brief: string;
  createdAt?: string;
  openApiYaml?: string;
};

export type Artifact = {
  id: string;
  type: "openapi" | "code" | "doc" | string;
  name: string;
  size?: number;
  createdAt?: string;
};
