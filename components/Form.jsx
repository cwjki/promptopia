import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        handleSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your IA prompt
          </span>
          <textarea
          className="form_textarea"
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write your prompt here..."
            required
          />
        </label>
      </form>
    </section>
  );
};

export default Form;
