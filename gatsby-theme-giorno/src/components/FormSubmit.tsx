import React, { FC } from "react";

export interface Props {
  onSubmit: () => void;
}

const FormSubmit: FC<Props> = ({ onSubmit, children }) => {
  return (
    <div className="flex items-center justify-end">
      <button
        type="submit"
        onClick={onSubmit}
        className="text-lg bg-primary hover:bg-darker-primary text-invert-text px-9 py-3  outline-none rounded shadow"
      >
        {children}
      </button>
    </div>
  );
};

export default FormSubmit;
