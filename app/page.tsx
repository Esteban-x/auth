import Image from "next/image";
import { SignupForm } from "./ui/signup-form";

export default function Home() {
  return (
    <div className="flex p-10 gap-5 flex-col items-center justify-center">
      Bienvenue sur mon système d'identification:
      <SignupForm />
    </div>
  );
}
