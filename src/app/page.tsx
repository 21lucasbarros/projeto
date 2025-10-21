import { Header as HeaderComponent } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="h-screen">
      <h1 className="">Olá!</h1>
      <Button variant={"destructive"}>Destrutivo</Button>
      <HeaderComponent />
    </div>
  );
}
