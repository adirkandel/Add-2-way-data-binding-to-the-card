const Form = () => {
  return (
    <form className="flex gap-4 border rounded-xl bg-slate-100 p-4">
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            placeholder="Title"
          />
        </div>

        <div>
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Description"
          ></textarea>
        </div>

        <div>
          <label className="label" htmlFor="author">
            Author
          </label>
          <input
            className="form-control"
            id="author"
            type="text"
            placeholder="Author"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div>
          <label className="label" htmlFor="createdOn">
            Created on
          </label>
          <input
            className="form-control"
            id="createdOn"
            type="date"
            placeholder="Created on"
          />
        </div>

        <div>
          <label className="label" htmlFor="tags">
            Tags
          </label>
          <select className="form-control" id="tags" multiple>
            <option value="java">java</option>
            <option value="aroma">aroma</option>
            <option value="coffee">aroma</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
