import { api } from "../lib/api";

export async function createProjectFromBrief(brief: string) {
  const { data } = await api.post<{ id: string }>("/projects", { brief });
  return data; // { id }
}

export async function generateOpenApi(projectId: string) {
  const { data } = await api.post<{ yaml: string }>(
    `/projects/${projectId}/openapi`,
    {}
  );
  return data.yaml;
}

export function downloadArtifact(projectId: string, artifactId: string) {
  return api.get<ArrayBuffer>(
    `/projects/${projectId}/artifacts/${artifactId}/download`,
    {
      responseType: "arraybuffer",
    }
  );
}
