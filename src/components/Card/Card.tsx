type CardProps = {
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  tags: string[];
};

const Card = ({ title, description, author, createdAt, tags }: CardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg flex">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/programmers-love-coffee.jpg)` }}
      ></div>
      <div className="flex-[2] py-2 px-3">
        <h1 className="text-xl font-bold mb-3">{title}</h1>
        <p className="text-slate-500 mb-5">{description}</p>
        <div className="flex items-center mb-4">
          <img
            src="/assets/jonathan.jpg"
            alt="jonathen"
            className="rounded-full h-12 w-12 mr-3"
          />
          <p className="flex flex-col">
            {author}
            <span className="text-slate-500">
              {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                createdAt,
              )}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 bg-slate-200 text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
