import { useState } from "react";
import {
  createProjectFromBrief,
  generateOpenApi,
} from "../../services/project.service";
import YamlViewer from "../../components/YamlViewer";
import robot from "../../assets/img/image.png";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [yaml, setYaml] = useState<string>("");

  async function handleStart(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setYaml("");
    try {
      const { id } = await createProjectFromBrief(prompt);
      const y = await generateOpenApi(id);
      setYaml(y);
    } catch {
      setYaml("# Ocorreu um erro ao gerar o OpenAPI. Verifique a API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Get ready for the <br /> new era of AI
        </h1>
        <p className="hero__subtitle">
          Descreva sua API e gere o OpenAPI YAML automaticamente.
        </p>

        <form className="prompt" onSubmit={handleStart}>
          <input
            className="prompt__input"
            placeholder="your Prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="prompt__btn" type="submit" disabled={loading}>
            {loading ? "Generating..." : "Get Started"}
          </button>
        </form>

        <p className="hero__hint">
          Ex.: “API de pedidos com produtos, categorias e checkout.”
        </p>

        <div className="hero__output">
          <YamlViewer value={yaml} />
        </div>
      </div>

      <div className="hero__right">
        {/* use qualquer imagem estática no /public ou assets */}
        <img src={robot} alt="Robot" className="hero__image" />
      </div>
    </section>
  );
}
