import ReactMarkdown from "react-markdown";
import { attributes, react as HomeContent } from "../content/methodes.md";

export default function Areas() {
  return (
    <div className="max-w-full px-10 p-2 prose mt-32 prose-img:mx-auto ">
      <HomeContent />
    </div>
  );
}
