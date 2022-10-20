import HookForm from "./components/modules/hookForm";
import HookFormYup from "./components/modules/hookFormYup";

export default function App() {
  return (
    <div className="flex flex-col justify-center lg:flex-row">
      <HookForm />
      <HookFormYup />
    </div>
  );
}