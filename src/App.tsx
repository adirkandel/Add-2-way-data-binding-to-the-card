import Card from "./components/Card";
import Form from "./components/Form";

export default function App() {
  const title = "Developers 💚 Coffee";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    aliquip ex ea commodo consequat.";
  const author = "Jonathan Reinink";
  const createdAt = new Date();
  const tags = ["java", "aroma", "coffee"];
  return (
    <div className="App max-w-screen-sm mx-auto p-4">
      <h1 className="text-2xl mb-10">Add 2 way data binding</h1>
      <div className="flex flex-col gap-10">
        <Card
          title={title}
          description={description}
          author={author}
          createdAt={createdAt}
          tags={tags}
        />
        <Form />
      </div>
    </div>
  );
}
