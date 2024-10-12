import { useNavigate, useRouteError } from "react-router-dom";

import Button from "../../components/Button/Button";

export default function Error() {
  const error = useRouteError() as {
    status?: number;
    statusText: string;
    message: string;
  };
  // eslint-disable-next-line no-console
  console.error(error);

  const navigate = useNavigate();

  return (
    <article id="error-page" className="m-auto items-center justify-center">
      <h1 className="font-heading text-5xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <hr className="my-6 w-80 border" />
      <div className="items-center gap-4">
        <div className="items-center">
          {error.status ?
            <p className="text-3xl">{error.status}</p>
          : null}
          <p className="text-xl">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <Button
          text="Go back to home"
          onPress={() => {
            navigate("/");
          }}
        />
      </div>
    </article>
  );
}
