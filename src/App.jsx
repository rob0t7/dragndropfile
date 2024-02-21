import { Button } from "./Button";
import { FileDropzone } from "./FileDropzone";
import { InputField } from "./InputField";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const fields = Object.fromEntries(form);
    console.log("fields: ", fields);
  }

  return (
    <>
      <div className="mx-auto max-w-7x1 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Drag & Drop Demo
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6">
            <InputField label="Name" name="name" placeholder="Full name" />
            <InputField label="Email" name="email" placeholder="Email" />
            <FileDropzone />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
